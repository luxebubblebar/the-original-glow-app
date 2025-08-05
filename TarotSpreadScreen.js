import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const CARD_WIDTH = Math.min(90, Dimensions.get('window').width / 5);

export default function TarotSpreadScreen({ route, navigation }) {
  const { spread } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Tarot Spread</Text>
      <View style={styles.spreadRow}>
        {spread.map((card, idx) => (
          <View key={card.id} style={styles.cardFaceUp}>
            <Text style={styles.cardName}>{card.name}</Text>
            <Text style={styles.cardOrder}>#{idx + 1}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.subtitle}>Tap back to try another reading.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162447',
    paddingTop: 48,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#ffd700',
    fontWeight: 'bold',
    marginBottom: 24,
    letterSpacing: 1,
    textAlign: 'center',
  },
  spreadRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
    minHeight: CARD_WIDTH * 1.4,
  },
  cardFaceUp: {
    backgroundColor: '#ffd1dc',
    borderColor: '#ffd700',
    borderWidth: 2,
    borderRadius: 12,
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.4,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ffd700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,
    padding: 6,
  },
  cardName: {
    color: '#162447',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  cardOrder: {
    color: '#6d597a',
    fontSize: 12,
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffd1dc',
    marginTop: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});const { spread } = route.params;