import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function TarotCardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarot Card Readings</Text>
      <ScrollView contentContainerStyle={styles.buttonContainer} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate?.('SingleCardReading')}>
          <Text style={styles.buttonText}>Single Card</Text>
          <Text style={styles.buttonSub}>Quick insight for the day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate?.('ThreeCardReading')}>
          <Text style={styles.buttonText}>Three Card Spread</Text>
          <Text style={styles.buttonSub}>Past, Present, Future</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate?.('CelticCrossReading')}>
          <Text style={styles.buttonText}>Celtic Cross</Text>
          <Text style={styles.buttonSub}>In-depth life overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate?.('RelationshipReading')}>
          <Text style={styles.buttonText}>Relationship Spread</Text>
          <Text style={styles.buttonSub}>Love & connections</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate?.('CareerReading')}>
          <Text style={styles.buttonText}>Career Spread</Text>
          <Text style={styles.buttonSub}>Work & ambitions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162447', // deep navy
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffd700', // gold
    textAlign: 'center',
    marginBottom: 32,
    letterSpacing: 2,
    textShadowColor: '#ffd1dc',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#ffd1dc', // light pink
    borderWidth: 2,
    borderColor: '#ffd700',
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 28,
    marginBottom: 22,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#ffd700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#162447',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  buttonSub: {
    color: '#6d597a',
    fontSize: 15,
    fontStyle: 'italic',
  },
});