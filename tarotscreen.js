/import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ReadingTypeSelectionScreen({ navigation }) {
  const readingTypes = [
    { key: 'Daily', label: 'Daily Reading' },
    { key: 'Love', label: 'Love Reading' },
    { key: 'Career', label: 'Career Reading' },
    { key: 'Spiritual', label: 'Spiritual Guidance' },
    { key: 'PastLife', label: 'Past Life Reading' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select Your Tarot Reading Type</Text>
      {readingTypes.map((reading) => (
        <TouchableOpacity
          key={reading.key}
          style={styles.button}
          onPress={() => navigation.navigate('Tarot', { readingType: reading.key })}
        >
          <Text style={styles.buttonText}>{reading.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#1b1b2f',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#b083ea',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    width: '90%',
    backgroundColor: '#b083ea',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
/ import ReadingTypeSelectionScreen from './screens/ReadingTypeSelectionScreen';
import TarotScreen from './screens/TarotScreen';

<Stack.Screen name="ReadingTypeSelection" component={ReadingTypeSelectionScreen} />
<Stack.Screen name="Tarot" component={TarotScreen} />
JavaScript source code
