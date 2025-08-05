import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CrystalScanScreen() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission required", "We need access to your photos to scan a crystal.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      sendToClarifai(result.uri);
    }
  };

  const sendToClarifai = async (imageUri) => {
    setLoading(true);
    try {
      const base64 = await (await fetch(imageUri)).blob();

      const response = await fetch("https://api.clarifai.com/v2/models/general-image-recognition/outputs", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": "Key 27db9f69428e4e0c95d2976760532fe3",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: [
            {
              data: {
                image: {
                  url: imageUri, // For simplicity, we use the URI here. You can upgrade to base64 for offline images.
                },
              },
            },
          ],
        }),
      });

      const json = await response.json();
      const concepts = json.outputs?.[0]?.data?.concepts || [];

      if (concepts.length > 0) {
        setResult(concepts[0].name);
      } else {
        setResult("No result found");
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "There was a problem identifying the image.");
    } finally {
      setLoading(false);
    }
  };

  // Handler for tapping the example image
  const handleExampleImagePress = () => {
    // You can use require for local assets
    const exampleImage = Image.resolveAssetSource(require('../assets/crystals/f01eab47-02a3-47bd-adf9-1f7fbed84a96-thumbnail.webp')).uri;
    setImage(exampleImage);
    sendToClarifai(exampleImage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Crystal Scanner</Text>

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload Crystal Image</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleExampleImagePress} style={styles.exampleImageContainer}>
        <Image
          source={require('../assets/crystals/f01eab47-02a3-47bd-adf9-1f7fbed84a96-thumbnail.webp')}
          style={styles.exampleImage}
        />
        <Text style={styles.exampleText}>Tap to scan this crystal</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.image} />}
      {loading && <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />}
      {result && !loading && (
        <Text style={styles.result}>Detected: {result}</Text>
      )}
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
  exampleImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  exampleImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#b083ea',
  },
  exampleText: {
    color: '#b083ea',
    fontSize: 16,
    fontStyle: 'italic',
  },
  image: {
    width: 200, height: 200, borderRadius: 12, marginVertical: 20,
  },
  result: {
    color: 'white', fontSize: 18, marginTop: 10,
  },
});
JavaScript source code
