// import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const planets = [
  {
    name: 'Mercury',
    symbol: '☿',
    element: 'Air',
    rulership: 'Gemini, Virgo',
    keywords: ['Communication', 'Intellect', 'Reasoning', 'Travel', 'Curiosity'],
    description:
      'Mercury governs communication, intellect, and reasoning. It influences how we think, write, and express ourselves. In astrology, Mercury rules Gemini and Virgo, encouraging curiosity and analytical thinking. Mercury’s energy is quick, adaptable, and sometimes restless.',
  },
  {
    name: 'Venus',
    symbol: '♀',
    element: 'Earth & Air',
    rulership: 'Taurus, Libra',
    keywords: ['Love', 'Beauty', 'Harmony', 'Relationships', 'Values'],
    description:
      'Venus represents love, beauty, harmony, and relationships. It governs how we attract, what we value, and our sense of aesthetics. As ruler of Taurus and Libra, Venus encourages sensuality, diplomacy, and appreciation of art and comfort.',
  },
  {
    name: 'Earth',
    symbol: '♁',
    element: 'Earth',
    rulership: 'None',
    keywords: ['Grounding', 'Stability', 'Physical Reality', 'Life'],
    description:
      'Earth is our home planet and symbolizes grounding, stability, and the physical world. Though not traditionally included in astrological rulerships, Earth’s energy anchors us and reminds us to be present in our material and emotional lives.',
  },
  {
    name: 'Mars',
    symbol: '♂',
    element: 'Fire',
    rulership: 'Aries, Scorpio (traditional)',
    keywords: ['Energy', 'Action', 'Desire', 'Courage', 'Conflict'],
    description:
      'Mars is the planet of energy, passion, action, and drive. It governs desire, courage, and conflict, encouraging us to pursue our goals boldly. Mars rules Aries traditionally and Scorpio in modern astrology, reflecting both impulsiveness and intensity.',
  },
  {
    name: 'Jupiter',
    symbol: '♃',
    element: 'Fire',
    rulership: 'Sagittarius, Pisces (traditional)',
    keywords: ['Expansion', 'Luck', 'Growth', 'Wisdom', 'Philosophy'],
    description:
      'Jupiter is the planet of expansion, luck, and wisdom. It encourages growth, optimism, and a search for higher meaning. Ruling Sagittarius and Pisces, Jupiter brings a broad-minded, philosophical, and generous energy.',
  },
  {
    name: 'Saturn',
    symbol: '♄',
    element: 'Earth',
    rulership: 'Capricorn, Aquarius (traditional)',
    keywords: ['Discipline', 'Responsibility', 'Structure', 'Lessons', 'Time'],
    description:
      'Saturn represents discipline, responsibility, and the lessons of life. It governs structure, authority, and long-term goals. Saturn rules Capricorn and traditionally Aquarius, teaching us patience, perseverance, and boundaries.',
  },
  {
    name: 'Uranus',
    symbol: '♅',
    element: 'Air',
    rulership: 'Aquarius',
    keywords: ['Innovation', 'Change', 'Rebellion', 'Freedom', 'Sudden Insights'],
    description:
      'Uranus is the planet of innovation, change, and rebellion. It governs freedom, individuality, and sudden insights or disruptions. Uranus rules Aquarius, promoting originality, eccentricity, and visionary thinking.',
  },
  {
    name: 'Neptune',
    symbol: '♆',
    element: 'Water',
    rulership: 'Pisces',
    keywords: ['Dreams', 'Intuition', 'Spirituality', 'Illusion', 'Compassion'],
    description:
      'Neptune governs dreams, intuition, and spirituality. It blurs boundaries between reality and fantasy, encouraging compassion and mysticism. Neptune rules Pisces, inspiring artists and visionaries but also cautioning against deception.',
  },
  {
    name: 'Pluto',
    symbol: '♇',
    element: 'Water',
    rulership: 'Scorpio',
    keywords: ['Transformation', 'Power', 'Rebirth', 'Secrets', 'Intensity'],
    description:
      'Pluto symbolizes transformation, power, and rebirth. It rules Scorpio and deals with deep psychological processes, hidden truths, and intensity. Pluto encourages profound change, healing, and regeneration.',
  },
];

export default function PlanetInfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🪐 Detailed Planet Info</Text>
      {planets.map((planet) => (
        <View key={planet.name} style={styles.card}>
          <Text style={styles.symbol}>{planet.symbol}</Text>
          <Text style={styles.name}>{planet.name}</Text>
          <Text style={styles.info}><Text style={styles.label}>Element:</Text> {planet.element}</Text>
          <Text style={styles.info}><Text style={styles.label}>Rulership:</Text> {planet.rulership}</Text>
          <Text style={styles.info}><Text style={styles.label}>Keywords:</Text> {planet.keywords.join(', ')}</Text>
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
    backgroundColor: '#0b1a3d', // navy blue
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8c8dc', // light pink
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1f3057', // darker navy
    width: '100%',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0c68b', // gold
  },
  symbol: {
    fontSize: 48,
    color: '#e0c68b', // gold
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f8c8dc', // light pink
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#f8c8dc', // light pink
  },
  info: {
    fontSize: 16,
    color: '#dcd6f7', // soft light pink
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#dcd6f7',
    marginTop: 10,
  },
});
JavaScript source code
