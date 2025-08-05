    import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const crystals = [
  {
    name: 'Tanzanite',
    description: 'Transformation, intuition, and spiritual awareness.',
  },
  {
    name: 'Tiger\'s Eye',
    description: 'Confidence, protection, and grounding.',
  },
  {
    name: 'Topaz',
    description: 'Joy, generosity, and abundance.',
  },
  {
    name: 'Tourmaline',
    description: 'Protection, balance, and inspiration.',
  },
  {
    name: 'Turquoise',
    description: 'Healing, protection, and communication.',
  },
  {
    name: 'Unakite',
    description: 'Emotional healing, balance, and vision.',
  },
  {
    name: 'Variscite',
    description: 'Calmness, understanding, and hope.',
  },
  {
    name: 'Zebra Jasper',
    description: 'Motivation, balance, and optimism.',
  },
  {
    name: 'Zircon',
    description: 'Purity, protection, and wisdom.',
  },
];

const { width } = Dimensions.get('window');

export default function AZCrystalsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>T-Z Crystals</Text>
      <FlatList
        data={crystals.sort((a, b) => a.name.localeCompare(b.name))}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.crystalName}>{item.name}</Text>
            <Text style={styles.crystalDesc}>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162447', // deep navy
    paddingTop: 48,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    letterSpacing: 2,
    color: '#ffd700', // gold
    textShadowColor: '#ffd1dc',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  card: {
    backgroundColor: '#ffd1dc', // light pink
    borderWidth: 2,
    borderColor: '#ffd700',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    shadowColor: '#ffd700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
    width: width - 32,
    alignSelf: 'center',
  },
  crystalName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#162447',
    marginBottom: 8,
    letterSpacing: 1,
  },
  crystalDesc: {
    fontSize: 16,
    color: '#6d597a',
    fontStyle: 'italic',
    letterSpacing: 0.5,
  },
});