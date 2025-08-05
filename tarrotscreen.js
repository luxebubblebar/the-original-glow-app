/import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TarotScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🃏 Tarot Reading Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b2f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
});
/ import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TarotScreen({ route }) {
  const { readingType } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{readingType} Tarot Reading</Text>
      {/* Your tarot card display logic here */}
      <Text style={styles.text}>Your {readingType.toLowerCase()} reading will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b2f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#b083ea',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

