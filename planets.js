/import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const planets = [
  {
    name: '☉ Sun',
    meaning: 'Identity, ego, vitality, and life force.',
    facts: 'Ruler of Leo. Represents the core self and conscious mind.',
  },
  {
    name: '☽ Moon',
    meaning: 'Emotions, instincts, habits, and subconscious.',
    facts: 'Ruler of Cancer. Governs feelings and intuition.',
  },
  {
    name: '☿ Mercury',
    meaning: 'Communication, intellect, reasoning, and travel.',
    facts: 'Ruler of Gemini and Virgo. Influences thought and expression.',
  },
  {
    name: '♀ Venus',
    meaning: 'Love, beauty, harmony, and values.',
    facts: 'Ruler of Taurus and Libra. Governs relationships and aesthetics.',
  },
  {
    name: '♂ Mars',
    meaning: 'Action, desire, aggression, and energy.',
    facts: 'Ruler of Aries and Scorpio. Drives ambition and passion.',
  },
  {
    name: '♃ Jupiter',
    meaning: 'Expansion, luck, growth, and wisdom.',
    facts: 'Ruler of Sagittarius and Pisces. Brings abundance and optimism.',
  },
  {
    name: '♄ Saturn',
    meaning: 'Discipline, structure, responsibility, and karma.',
    facts: 'Ruler of Capricorn and Aquarius. Teaches lessons and boundaries.',
  },
  {
    name: '♅ Uranus',
    meaning: 'Innovation, rebellion, sudden change, and freedom.',
    facts: 'Ruler of Aquarius. Inspires originality and breakthroughs.',
  },
  {
    name: '♆ Neptune',
    meaning: 'Dreams, intuition, spirituality, and illusion.',
    facts: 'Ruler of Pisces. Connects to imagination and mysticism.',
  },
  {
    name: '♇ Pluto',
    meaning: 'Transformation, power, rebirth, and the subconscious.',
    facts: 'Ruler of Scorpio. Associated with deep change and renewal.',
];
  },

export default function PlanetInfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🪐 Planet Info</Text>
      {planets.map((planet, idx) => (
        <View key={idx} style={styles.planetBox}>
          <Text style={styles.planetName}>{planet.name}</Text>
          <Text style={styles.sectionTitle}>Meaning:</Text>
          <Text style={styles.sectionText}>{planet.meaning}</Text>
          <Text style={styles.sectionTitle}>Astro Facts:</Text>
          <Text style={styles.sectionText}>{planet.facts}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1b1b2f',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#b083ea',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  planetBox: {
    backgroundColor: '#23234b',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    width: '100%',
  },
  planetName: {
    color: '#b083ea',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#f8e9d0',
    fontWeight: 'bold',
    marginTop: 8,
  },
  sectionText: {
    color: '#dcd6f7',
    marginBottom: 4,
  },
});/ JavaScript source code
