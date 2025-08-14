import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AppButton({ title, onPress, style, disabled }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style, disabled && { opacity: 0.6 }]} disabled={disabled}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#D87C7C',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 160,
  },
  txt: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
