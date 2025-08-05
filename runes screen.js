//import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RunesScreen({ navigation }) {
  // Handle selection of a rune spread
  const handleSpreadSelection = (spreadSize) => {
    Alert.alert(
      `${spreadSize} Rune Spread Selected`,
      `You selected the ${spreadSize}-rune spread.`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to a rune reading screen if needed
            // navigation.navigate('RuneReading', { spreadSize });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rune Readings</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSpreadSelection(3)}
        >
          <Text style={styles.buttonText}>3 Rune Spread</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSpreadSelection(5)}
        >
          <Text style={styles.buttonText}>5 Rune Spread</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSpreadSelection(9)}
        >
          <Text style={styles.buttonText}>9 Rune Spread</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b2f', // Navy blue background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#b083ea',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#ffc0cb', // Light pink buttons
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#1b1b2f', // Navy blue text for contrast
    fontWeight: 'bold',
  },
}); JavaScript source code
