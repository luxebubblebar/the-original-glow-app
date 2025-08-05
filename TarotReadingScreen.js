import { useSubscription } from '../context/SubscriptionContext'; // adjust path

function SomeScreen() {
  const { isSubscribed, setIsSubscribed } = useSubscription();

  // Use isSubscribed to lock/unlock features
}
// ...other imports
import { useNavigation } from '@react-navigation/native';

// ...inside your component
export default function TarotReadingScreen() {
  const navigation = useNavigation();
  // ...existing state

  const handleCardPick = (card) => {
    if (spread.length >= SPREAD_SIZE || showResults) return;
    const newSpread = [...spread, card];
    setSpread(newSpread);
    if (newSpread.length === SPREAD_SIZE) {
      setTimeout(() => {
        navigation.navigate('TarotSpread', { spread: selectedCardsArray });
      }, 700); // Small delay for UX
    }
  };

  navigation.navigate('TarotSpread', { spread: selectedCardsArray });// ...rest of your component
}import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function JournalScreen({ navigation }) {
  const [entries, setEntries] = useState([
    {
      name: 'The Empress',
      date: 'July 28, 2025, 9:32 AM',
      meaning: 'Abundance, fertility, nurturing energy.'
    },
    {
      name: 'The Moon',
      date: 'July 27, 2025, 7:45 PM',
      meaning: 'Illusion, intuition, dreams and shadows.'
    }
  ]);

  // 🔐 Simulate subscription (set to false to lock it)
  const isSubscriber = false;

  if (!isSubscriber) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🔒 Subscribers Only</Text>
        <Text style={styles.text}>The Tarot Journal is available to Original Glow members.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subscribe')}>
          <Text style={styles.buttonText}>Become a Subscriber</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📓 Tarot Journal</Text>
      {entries.length === 0 ? (
        <Text style={styles.text}>No saved readings yet.</Text>
      ) : (
        entries.map((entry, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <Text style={styles.card}>{entry.name}</Text>
            <Text style={styles.text}>Drawn on: {entry.date}</Text>
            <Text style={styles.text}>Meaning: {entry.meaning}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1b1b2f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#f8e9d0',
    marginBottom: 30,
    fontWeight: 'bold'
  },
  card: {
    fontSize: 26,
    color: '#ffccf9',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#b083ea',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
   import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

import moonImg from '../assets/moon.png';
import flowerOfLifeImg from '../assets/flower_of_life.png';

const MUSIC_URL = 'https://soundcloud.com/spiritualmoment/energy-cleanse/stream';

export default function TarotReadingScreen() {
  const navigation = useNavigation();
  const [isShuffling, setIsShuffling] = useState(false);
  const [musicLoading, setMusicLoading] = useState(false);
  const soundRef = useRef(null);

  const handleShuffle = async () => {
    setIsShuffling(true);
    setMusicLoading(true);

    // Play music
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: MUSIC_URL },
        { shouldPlay: true }
      );
      soundRef.current = sound;
      setMusicLoading(false);
    } catch (e) {
      setMusicLoading(false);
    }

    // Simulate shuffle animation
    setTimeout(() => {
      setIsShuffling(false);
      if (soundRef.current) {
        soundRef.current.stopAsync();
        soundRef.current.unloadAsync();
      }
      navigation.navigate('TarotCard');
    }, 4000); // 4 seconds for shuffle + music intro
  };

  // Clean up sound on unmount
  React.useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prepare for Your Tarot Reading</Text>
      <Text style={styles.mantra}>
        Find a peaceful place. Take a deep breath. Relax your mind and body. When you are ready, tap the deck to shuffle and begin your reading.
      </Text>

      <TouchableOpacity
        style={[styles.deck, isShuffling && styles.deckShuffling]}
        onPress={handleShuffle}
        disabled={isShuffling}
        activeOpacity={0.7}
      >
        <View style={styles.cardBackImages}>
          <Image source={moonImg} style={styles.moonImage} resizeMode="contain" />
          <Image source={flowerOfLifeImg} style={styles.flowerImage} resizeMode="contain" />
        </View>
        {isShuffling && (
          <Text style={styles.shufflingText}>Shuffling...</Text>
        )}
      </TouchableOpacity>

      {musicLoading && (
        <ActivityIndicator size="large" color="#ffd700" style={{ marginTop: 20 }} />
      )}
    </View>
  );
}

const CARD_WIDTH = 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162447',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    color: '#ffd700',
    fontWeight: 'bold',
    marginBottom: 18,
    letterSpacing: 1,
    textAlign: 'center',
  },
  mantra: {
    fontSize: 18,
    color: '#ffd1dc',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 28,
  },
  deck: {
    backgroundColor: '#162447',
    borderColor: '#ffd700',
    borderWidth: 3,
    borderRadius: 16,
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ffd700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  deckShuffling: {
    opacity: 0.7,
  },
  cardBackImages: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  moonImage: {
    width: CARD_WIDTH * 0.5,
    height: CARD_WIDTH * 0.3,
    marginBottom: 4,
  },
  flowerImage: {
    width: CARD_WIDTH * 0.6,
    height: CARD_WIDTH * 0.4,
  },
  shufflingText: {
    color: '#ffd700',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
}); color: 'white', fontSize: 16,
import ReadingTypeSelectionScreen from './screens/ReadingTypeSelectionScreen';
import TarotScreen from './screens/TarotScreen';

<Stack.Screen name="ReadingTypeSelection" component={ReadingTypeSelectionScreen} />
<Stack.Screen name="Tarot" component={TarotScreen} />
import tarotDeck from '../data/tarotDeck';
