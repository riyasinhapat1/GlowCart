import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import AppButton from '../components/AppButton';

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.heroCard}>
        <Text style={styles.brand}>Viorra</Text>
        <Text style={styles.subtitle}>Your Beauty, Delivered</Text>
      </View>

      <View style={{ width: '100%', alignItems: 'center' }}>
        <AppButton title="Get Started" onPress={() => navigation.navigate('Login')} style={{ width: width * 0.8 }} />
      </View>

      <Text style={styles.small}>By continuing, you agree to our Terms & Conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E9E9',
    justifyContent: 'space-between',
    paddingVertical: 40,
    alignItems: 'center',
  },
  heroCard: {
    marginTop: 40,
    width: '86%',
    height: 420,
    backgroundColor: '#FFEFF0',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    elevation: 6,
  },
  brand: {
    fontSize: 44,
    fontWeight: '800',
    color: '#C95F5F',
    letterSpacing: 1,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: '#7b5050',
  },
  small: {
    color: '#8a8a8a',
    fontSize: 12,
    marginBottom: 12,
  },
});
