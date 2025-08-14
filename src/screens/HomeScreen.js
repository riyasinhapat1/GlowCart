import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from '../api/axios';

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const cosmeticKeywords = ['mask', 'lip', 'skin', 'cream', 'perfume', 'fragrance', 'makeup', 'shampoo', 'mascara', 'foundation', 'eyeshadow', 'powder', 'blush'];

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await axios.get('/products?limit=100');
      const all = res.data.products || [];
      const filtered = all.filter(p => {
        const text = `${p.title} ${p.description} ${p.category}`.toLowerCase();
        return cosmeticKeywords.some(k => text.includes(k));
      });
      setProducts(filtered.length ? filtered : all.slice(0, 30));
    } catch (e) {
      console.log(e);
      alert('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }

  const filtered = products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  if (loading) return <View style={{flex:1,justifyContent:'center'}}><ActivityIndicator size="large" /></View>;

  return (
    <View style={{flex:1, backgroundColor:'#F7E9E9'}}>
      <View style={styles.header}>
        <Text style={styles.hTitle}>Best Products</Text>
        <TextInput placeholder="Search" style={styles.search} value={query} onChangeText={setQuery} />
      </View>

      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{padding:12}}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
            <Image source={{ uri: item.thumbnail || item.images?.[0] }} style={styles.thumb} />
            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 12 },
  hTitle: { fontSize: 20, fontWeight: '700', color: '#7b5050' },
  search: { backgroundColor: '#fff', marginTop: 8, padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#eee' },
  card: { flex: 1, backgroundColor: '#fff', margin: 8, borderRadius: 14, padding: 12, alignItems:'center' },
  thumb: { width: 120, height: 120, borderRadius: 10 },
  title: { marginTop: 8, fontWeight:'600', fontSize: 14 },
  price: { marginTop: 6, fontWeight: '700', color: '#D87C7C' }
});
