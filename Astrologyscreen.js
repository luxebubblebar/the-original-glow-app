
 import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function AstrologyScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>✨ Astrology & Lunar Wisdom</Text>
      <Text style={styles.subheader}>
        Explore the celestial energies shaping your journey.
      </Text>
      
      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('PlanetInfo')}
>
  <Text style={styles.buttonText}>🪐 Planet Info</Text>
  <Text style={styles.buttonSubtitle}>Learn about planetary movements and influences</Text>
</TouchableOpacity>
<TouchableOpacity
     style={styles.button}
     onPress={() => navigation.navigate('PlanetInfo')}
   >
     <Text style={styles.buttonText}>🪐 Planet Info</Text>
   </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MoonPhases')}
      >
        <Text style={styles.buttonText}>🌙 Moon Phases</Text>
        <Text style={styles.buttonSubtitle}>Discover the current lunar phase & meanings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SkyScan')}
      >
        <Text style={styles.buttonText}>🔭 Sky Scan</Text>
        <Text style={styles.buttonSubtitle}>Scan the night sky for stars & constellations</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PlanetInfo')}
      >
        <Text style={styles.buttonText}>🪐 Planet Info</Text>
        <Text style={styles.buttonSubtitle}>Learn about planetary movements and influences</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MoonDates')}
      >
        <Text style={styles.buttonText}>📅 Moon Dates</Text>
        <Text style={styles.buttonSubtitle}>Track important lunar phase dates</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BirthInfo')}
      >
        <Text style={styles.buttonText}>👶 Birth Info</Text>
        <Text style={styles.buttonSubtitle}>Get insights based on your birth chart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#0b1a3d',  // navy blue background
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8c8dc',  // pale pink
    marginBottom: 10,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    color: '#e0c68b',  // gold
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    width: '100%',
    backgroundColor: '#1f3057',  // darker navy for buttons
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#e0c68b', // gold border
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8c8dc', // pale pink
  },
  buttonSubtitle: {
    fontSize: 14,
    color: '#e0c68b', // gold
    marginTop: 6,
  },
});

