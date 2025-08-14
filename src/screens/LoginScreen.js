import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import AppButton from '../components/AppButton';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1, backgroundColor: '#FDECEA' }}
    >
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hello Again!</Text>
        <Text style={styles.headerSubtitle}>
          Welcome back you’ve been missed.
        </Text>
      </View>

      {/* Form Card */}
      <View style={styles.form}>
        {/* Email */}
        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="#888" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter your email id"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
          />
          <Ionicons name="eye-outline" size={20} color="#888" style={styles.eyeIcon} />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 6 }}>
          <Text style={styles.forgot}>Forgot password</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <AppButton
        title="Log In"
        style={{ marginTop: 20 }}
        onPress={() => {
        if (email && password) {
        navigation.replace("Main"); 
        } else {
        alert("Please enter email and password");
        }
        }}
        />


        {/* Divider */}
        <View style={styles.dividerWrapper}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or Continue With</Text>
          <View style={styles.divider} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <AntDesign name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <AntDesign name="apple1" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <AntDesign name="facebook-square" size={24} color="#4267B2" />
          </TouchableOpacity>
        </View>

        {/* Bottom Register */}
        <View style={styles.bottomRow}>
          <Text style={{ color: '#555' }}>Not a Member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.register}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E3A6A1',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#7b2c2c',
  },
  headerSubtitle: {
    marginTop: 6,
    color: '#fff',
    fontSize: 15,
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 14,
    paddingHorizontal: 12,
  },
  inputIcon: { marginRight: 8 },
  input: { flex: 1, paddingVertical: 12 },
  eyeIcon: { marginLeft: 6 },
  forgot: { color: '#C95F5F', fontSize: 13 },
  dividerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 8,
    fontSize: 12,
    color: '#777',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialBtn: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  register: {
    color: '#C95F5F',
    fontWeight: '700',
  },
});
