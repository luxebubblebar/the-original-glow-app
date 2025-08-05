import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MoonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌙 Moon Phases</Text>
      <Image
        source={require('../assets/moon.png')} // Place a moon image in your assets folder
        style={styles.image}
      />
      <Text style={styles.subtitle}>
        Discover the current phase of the moon and its meaning.
      </Text>
      {/* You can add more interactive features here, such as a moon phase calendar or info */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b2f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#b083ea',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#dcd6f7',
    textAlign: 'center',
    marginBottom: 20,
  },
});