import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import { CartContext } from '../context/CartContext';

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <ScrollView style={{flex:1, backgroundColor:'#F7E9E9'}}>
      <Image source={{ uri: product.images?.[0] || product.thumbnail }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>₹{product.price}</Text>
        <Text style={styles.desc}>{product.description}</Text>
        <AppButton title="Add to Bag" onPress={() => { addToCart(product); alert('Added to bag'); }} style={{ marginTop: 16 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', height: 360, resizeMode: 'cover' },
  card: { padding: 16 },
  title: { fontSize: 20, fontWeight: '800', color: '#7b5050' },
  price: { marginTop: 8, fontSize: 18, fontWeight: '800', color: '#D87C7C' },
  desc: { marginTop: 12, color: '#666', lineHeight: 20 }
});
