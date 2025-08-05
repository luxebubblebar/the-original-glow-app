/import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const planets = [
  {
    name: 'Mercury',
    symbol: '☿',
    description: 'Communication, intellect, reasoning, travel.',
  },
  {
    name: 'Venus',
    symbol: '♀',
    description: 'Love, beauty, harmony, relationships.',
  },
  {
    name: 'Earth',
    symbol: '♁',
    description: 'Home, grounding, physical reality.',
  },
  {
    name: 'Mars',
    symbol: '♂',
    description: 'Energy, action, desire, courage.',
  },
  {
    name: 'Jupiter',
    symbol: '♃',
    description: 'Expansion, luck, growth, optimism.',
  },
  {
    name: 'Saturn',
    symbol: '♄',
    description: 'Discipline, responsibility, structure, lessons.',
  },
  {
    name: 'Uranus',
    symbol: '♅',
    description: 'Innovation, change, rebellion, freedom.',
  },
  {
    name: 'Neptune',
    symbol: '♆',
    description: 'Dreams, intuition, spirituality, illusions.',
  },
  {
    name: 'Pluto',
    symbol: '♇',
    description: 'Transformation, power, rebirth, secrets.',
  },
];

export default function PlanetInfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🪐 Planet Info</Text>
      {planets.map((planet) => (
        <View key={planet.name} style={styles.card}>
          <Text style={styles.symbol}>{planet.symbol}</Text>
          <Text style={styles.name}>{planet.name}</Text>
          <Text style={styles.description}>{planet.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#0b1a3d',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8c8dc',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#1f3057',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0c68b',
  },
  symbol: {
    fontSize: 48,
    color: '#e0c68b',
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f8c8dc',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#dcd6f7',
    textAlign: 'center',
  },
});
/ JavaScript source code
