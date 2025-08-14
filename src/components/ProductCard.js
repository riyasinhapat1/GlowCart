import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(product)} style={styles.card}>
      <Image source={{ uri: product.thumbnail || product.images?.[0] }} style={styles.image} />
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text numberOfLines={1} style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>₹{product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', backgroundColor: '#fff', borderRadius: 8, padding: 8,
    marginVertical: 6, marginHorizontal: 12, alignItems: 'center', elevation: 2
  },
  image: { width: 80, height: 80, borderRadius: 6 },
  title: { fontSize: 16, fontWeight: '600' },
  price: { marginTop: 6, fontSize: 14, fontWeight: '700' }
});
