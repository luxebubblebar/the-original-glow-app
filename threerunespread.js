// import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function ThreeRuneSpreadScreen({ navigation }) {
  const [selectedLayout, setSelectedLayout] = useState('pastPresentFuture');

  const renderLayout = () => {
    switch (selectedLayout) {
      case 'pastPresentFuture':
        return (
          <View style={styles.layoutContainer}>
            <View style={styles.runeContainer}>
              <Text style={styles.runeTitle}>Past</Text>
            </View>
            <View style={styles.runeContainer}>
              <Text style={styles.runeTitle}>Present</Text>
            </View>
            <View style={styles.runeContainer}>
              <Text style={styles.runeTitle}>Future</Text>
            </View>
          </View>
        );
      case 'problemObstaclesSolution':
        return (
          <View style={styles.layoutContainer}>
            <View style={styles.runeContainer}>
              <Text style={styles.runeTitle}>Problem</Text>
            </View>
            <View style={styles.runeContainer}>
              <Text style={styles.runeTitle}>Obstacles</Text>
            </View>
            <View style={styles.runeContainer}>
              <Text style={styles.runeTitle}>Solution</Text>
            </View>
          </View>
        );
      case 'influenceActionOutcome':
        return (
          <View style={styles.layoutContainer}>
            <View style={styles.runeContainer}>
              <Text style={styles.runeTitle}>Influence</Text>
            </View>
            <View style={styles.runeContainer}>
              <Text style={styles.runeTitle}>Action</Text>
            </View>
            <View style={styles.runeContainer}>
              <Text style={styles.runeTitle}>Outcome</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'data:image/jpeg;base64,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' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>3 Rune Spread</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.layoutButton,
              selectedLayout === 'pastPresentFuture' && styles.selectedButton,
            ]}
            onPress={() => setSelectedLayout('pastPresentFuture')}
          >
            <Text style={styles.buttonText}>Past / Present / Future</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.layoutButton,
              selectedLayout === 'problemObstaclesSolution' && styles.selectedButton,
            ]}
            onPress={() => setSelectedLayout('problemObstaclesSolution')}
          >
            <Text style={styles.buttonText}>Problem / Obstacles / Solution</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.layoutButton,
              selectedLayout === 'influenceActionOutcome' && styles.selectedButton,
            ]}
            onPress={() => setSelectedLayout('influenceActionOutcome')}
          >
            <Text style={styles.buttonText}>Influence / Action / Outcome</Text>
          </TouchableOpacity>
        </View>
        {renderLayout()}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(27, 27, 47, 0.7)', // semi-transparent overlay to improve readability
  },
  header: {
    fontSize: 28,
    color: '#b083ea',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonRow: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  layoutButton: {
    width: '90%',
    backgroundColor: '#ffc0cb',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  selectedButton: {
    borderColor: '#b083ea',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#1b1b2f',
    fontWeight: 'bold',
  },
  layoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  runeContainer: {
    flex: 1,
    backgroundColor: '#ffc0cb',
    marginHorizontal: 5,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  runeTitle: {
    fontSize: 18,
    color: '#1b1b2f',
    fontWeight: 'bold',
  },
});JavaScript source code
