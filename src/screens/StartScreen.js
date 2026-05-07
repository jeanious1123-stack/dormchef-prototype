import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo + Tagline grouped at top */}
      <View style={styles.topSection}>
        <Image 
          source={require('../../assets/Logo.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
        <Text style={styles.tagline}>
          We make use of what's already{"\n"}in your pantry.
        </Text>
      </View>

      {/* Action Button pinned at bottom */}
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
  container: { flex: 1, backgroundColor: '#FFB300', padding: 30, justifyContent: 'space-between' },
  topSection: { alignItems: 'center', marginTop: 40 },
  illustration: { width: 300, height: 300, marginBottom: -20 },
  tagline: { fontSize: 18, fontWeight: '700', color: '#000', textAlign: 'center', marginTop: 4 },
  startBtn: { backgroundColor: '#8BC34A', height: 44, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 10, paddingHorizontal: 30, alignSelf: 'center', minWidth: '45%' },
  startBtnText: { fontSize: 13, fontWeight: '900', color: '#000' }
});