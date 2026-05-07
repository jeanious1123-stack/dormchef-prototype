import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Central Illustration Area */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/Logo.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Branding Section */}
      <View style={styles.textSection}>
        <Text style={styles.tagline}>
          We make use of what's already{"\n"}in your pantry.
        </Text>
      </View>

      {/* Action Button */}
      <TouchableOpacity 
        style={styles.startBtn}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.startBtnText}>START NOW</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFB300', padding: 30, paddingBottom: 30 },
  imageContainer: { flex: 2, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 0, marginBottom: 0 },
  illustration: { width: '70%', height: '80%' },
  textSection: { flex: 0.4, alignItems: 'center', justifyContent: 'flex-start', marginTop: -30 },
  brandRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 6 },
  logo: { width: 48, height: 48, marginRight: 12 },
  appName: { fontSize: 42, fontWeight: '900', color: '#000', textAlign: 'center' },
  tagline: { fontSize: 18, fontWeight: '700', color: '#000', textAlign: 'center', marginTop: 0 },
  startBtn: { backgroundColor: '#8BC34A', height: 50, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginBottom: 20, paddingHorizontal: 40, alignSelf: 'center', minWidth: '50%' },
  startBtnText: { fontSize: 16, fontWeight: '900', color: '#000' }
});