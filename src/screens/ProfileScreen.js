import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Title */}
      <Text style={styles.title}>Profile</Text>

      {/* User Info */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Olivia</Text>
          <Text style={styles.email}>Olivia@gmail.com</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="pencil-outline" size={20} color="#444" />
        </TouchableOpacity>
      </View>

      {/* First Section */}
      <View style={styles.section}>
        <ProfileItem icon="location-outline" label="Address" subLabel="Manage your saved address" />
        <ProfileItem icon="time-outline" label="Order History" subLabel="View your past orders" />
        <ProfileItem icon="language-outline" label="Language" />
        <ProfileItem icon="notifications-outline" label="Notifications" />
      </View>

      {/* Second Section */}
      <View style={styles.section}>
        <ProfileItem icon="mail-outline" label="Contact Us" />
        <ProfileItem icon="help-circle-outline" label="Get Help" />
        <ProfileItem icon="shield-outline" label="Privacy Policy" />
        <ProfileItem icon="document-text-outline" label="Terms and Conditions" />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ProfileItem({ icon, label, subLabel }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Ionicons name={icon} size={20} color="#444" style={{ marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        {subLabel ? <Text style={styles.subLabel}>{subLabel}</Text> : null}
      </View>
      <Ionicons name="chevron-forward" size={18} color="#aaa" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDECEA',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 16,
    color: '#000',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: { fontSize: 16, fontWeight: '700', color: '#000' },
  email: { fontSize: 14, color: '#555', marginTop: 2 },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    paddingVertical: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: { fontSize: 15, color: '#000', fontWeight: '500' },
  subLabel: { fontSize: 12, color: '#777', marginTop: 2 },
  logout: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 40,
  },
  logoutText: { color: '#C95F5F', fontWeight: '700', fontSize: 15 },
});
