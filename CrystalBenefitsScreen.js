import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const benefits = [
  {
    name: 'Amethyst',
    benefit: 'Calms the mind, relieves stress, supports spiritual growth, and is believed to help soothe skin irritation.',
  },
  {
    name: 'Rose Quartz',
    benefit: 'Encourages love, self-acceptance, emotional healing, and is popular in skincare for promoting a youthful glow and soothing inflammation.',
  },
  {
    name: 'Citrine',
    benefit: 'Boosts joy, abundance, personal power, and is thought to help with skin radiance and detoxification.',
  },
  {
    name: 'Clear Quartz',
    benefit: 'Amplifies energy, clarity, healing intentions, and is used in facial rollers to promote clear, healthy skin.',
  },
  {
    name: 'Tiger\'s Eye',
    benefit: 'Increases confidence, courage, protection, and may help with skin resilience and vitality.',
  },
  {
    name: 'Turquoise',
    benefit: 'Supports healing, communication, protection, and is believed to aid in skin detoxification and anti-inflammatory effects.',
  },
  {
    name: 'Obsidian',
    benefit: 'Provides grounding, protection, emotional release, and is used in facial tools to help reduce puffiness and improve skin tone.',
  },
  {
    name: 'Lapis Lazuli',
    benefit: 'Enhances wisdom, intuition, truth, and is thought to help with skin clarity and reducing inflammation.',
  },
  {
    name: 'Jade',
    benefit: 'Brings harmony, balance, good fortune, and is famous for jade rollers that soothe, tone, and brighten the skin.',
  },
  {
    name: 'Carnelian',
    benefit: 'Boosts motivation, creativity, vitality, and is believed to improve skin health and circulation.',
  },
  {
    name: 'Aventurine',
    benefit: 'Attracts luck, prosperity, confidence, and is said to help with skin healing and soothing acne.',
  },
  {
    name: 'Moonstone',
    benefit: 'Inspires intuition, new beginnings, inner growth, and is thought to help with skin regeneration and hormonal balance.',
  },
  {
    name: 'Garnet',
    benefit: 'Energizes, regenerates, inspires passion, and may support skin renewal and healthy complexion.',
  },
  {
    name: 'Selenite',
    benefit: 'Cleanses energy, promotes peace, mental clarity, and is sometimes used to calm irritated skin.',
  },
  {
    name: 'Black Tourmaline',
    benefit: 'Shields against negativity, grounds energy, and is believed to help detoxify and purify the skin.',
  },
  {
    name: 'Malachite',
    benefit: 'Encourages transformation, emotional healing, and is used in skincare for its antioxidant and skin-protective properties.',
  },
  {
    name: 'Amazonite',
    benefit: 'Soothes anxiety, supports honest communication, and may help calm sensitive or irritated skin.',
  },
  {
    name: 'Hematite',
    benefit: 'Promotes grounding, focus, protection, and is thought to support skin healing and circulation.',
  },
  {
    name: 'Labradorite',
    benefit: 'Boosts intuition, transformation, perseverance, and is believed to help with skin balance and radiance.',
  },
  {
    name: 'Smoky Quartz',
    benefit: 'Dispels fear, lifts depression, grounds energy, and is said to help detoxify and clear the skin.',
  },
];

const { width } = Dimensions.get('window');

export default function CrystalBenefitsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crystal Benefits</Text>
      <FlatList
        data={benefits}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.crystalName}>{item.name}</Text>
            <Text style={styles.crystalBenefit}>{item.benefit}</Text>
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
    fontSize: 32,
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
  crystalBenefit: {
    fontSize: 16,
    color: '#6d597a',
    fontStyle: 'italic',
    letterSpacing: 0.5,
  },
});