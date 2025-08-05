import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function SkyScanScreen() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission required", "We need access to your photos to scan the sky.");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      // You can add your sky analysis logic here
    }
  };

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission required", "We need access to your camera to take a photo.");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      // You can add your sky analysis logic here
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌌 Sky Scanner</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose Sky Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Take Sky Photo</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />}
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#1b1b2f', alignItems: 'center', justifyContent: 'center', padding: 20,
  },
  title: {
    fontSize: 28, color: '#f8e9d0', marginBottom: 20, fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#b083ea', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 10, marginBottom: 20,
  },
  buttonText: {
    color: 'white', fontSize: 16,
  },
  image: {
    width: 200, height: 200, borderRadius: 12, marginVertical: 20,
  },
});