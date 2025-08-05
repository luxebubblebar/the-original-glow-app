import ReadingTypeSelectionScreen from './screens/ReadingTypeSelectionScreen';
import TarotScreen from './screens/TarotScreen';

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSubscription } from '../context/SubscriptionContext'; // adjust path
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SubscriptionProvider } from './context/SubscriptionContext'; // adjust path
// ...other imports

export default function App() {
  return (
    <SubscriptionProvider>
      <NavigationContainer>
        {/* ...your navigators and screens... */}
      </NavigationContainer>
    </SubscriptionProvider>
  );
}

import TarotScreen from './screens/TarotScreen';
import CrystalInfoScreen from './screens/CrystalInfoScreen';
import CrystalScanScreen from './screens/CrystalScanScreen';
import RitualsScreen from './screens/RitualsScreen';
import AstrologyScreen from './screens/AstrologyScreen';
import SkyMapScreen from './screens/SkyMapScreen';
import JournalScreen from './screens/JournalScreen';
import SubscribeScreen from './screens/SubscribeScreen';
import MoonScreen from './screens/MoonScreen'; 
import MoonPhasesScreen from './screens/MoonPhasesScreen'; 
import SkyScanScreen from './crystalscreen/SkyScanScreen';
import PlanetInfoScreen from './screens/PlanetInfoScreen';
import MoonDatesScreen from './screens/MoonDatesScreen';
import BirthInfoScreen from './screens/BirthInfoScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const { isSubscribed } = useSubscription();
  const requireSub = () => Alert.alert('Subscribe Required', 'Please subscribe to access this feature.');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to The Temple</Text>
      <Text style={styles.subtitle}>
        Your sacred space for rituals, crystals, astrology, and more.
      </Text>

      <TouchableOpacity
        style={[styles.button, !isSubscribed && styles.lockedButton]}
        onPress={isSubscribed ? () => navigation.navigate('Rituals') : requireSub}
      >
        <Text style={styles.buttonText}>Rituals</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CrystalScan')}
      >
        <Text style={styles.buttonText}>Crystal Identifier</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SkyMap')}
      >
        <Text style={styles.buttonText}>Sky Map</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Journal')}
      >
        <Text style={styles.buttonText}>Journal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Subscribe')}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Screen name="ReadingTypeSelection" component={ReadingTypeSelectionScreen} />
<Stack.Screen name="Tarot" component={TarotScreen} />
<Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TarotReading" component={TarotScreen} />
        <Stack.Screen name="CrystalInfo" component={CrystalInfoScreen} />
        <Stack.Screen name="CrystalScan" component={CrystalScanScreen} />
        <Stack.Screen name="Rituals" component={RitualsScreen} />
        <Stack.Screen name="Astrology" component={AstrologyScreen} />
        <Stack.Screen name="SkyMap" component={SkyMapScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="Subscribe" component={SubscribeScreen} />
        import SkyScanScreen from './crystalscreen/SkyScanScreen';
// ...<Stack.Screen name="Moon" component={MoonScreen} />
<Stack.Screen name="SkyScan" component={SkyScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );import PlanetInfoScreen from './screens/PlanetInfoScreen';

<Stack.Screen name="PlanetInfo" component={PlanetInfoScreen} />

}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#1b1b2f',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    color: '#b083ea',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#dcd6f7',
    marginBottom: 40,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#b083ea',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  lockedButton: {
    backgroundColor: '#777',
  },
});
