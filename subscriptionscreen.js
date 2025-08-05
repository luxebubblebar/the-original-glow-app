import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSubscription } from '../context/SubscriptionContext';

export default function SubscribeScreen({ navigation }) {
  const { setIsSubscribed } = useSubscription();

  const handleSubscribe = () => {
    // Here you would handle payment/in-app purchase logic
    // After successful purchase:
    setIsSubscribed(true);
    navigation.goBack(); // or navigate to a premium screen
  };

  return (
    <View>
      <Text>Subscribe to unlock all features!</Text>
      <Button title="Subscribe Now" onPress={handleSubscribe} />
    </View>
  );import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useSubscription } from '../context/SubscriptionContext';
import * as RNIap from 'react-native-iap';

const productIds = ['com.yourapp.premium_monthly']; // Replace with your real product IDs

export default function SubscribeScreen({ navigation }) {
  const { setIsSubscribed } = useSubscription();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    RNIap.initConnection().then(async () => {
      try {
        const items = await RNIap.getSubscriptions(productIds);
        setProducts(items);
      } catch (err) {
        Alert.alert('Error', 'Could not load products');
      }
    });
    return () => {
      RNIap.endConnection();
    };
  }, []);

  const handleSubscribe = async () => {
    try {
      const purchase = await RNIap.requestSubscription(productIds[0]);
      // You should validate the purchase with your backend here
      setIsSubscribed(true);
      Alert.alert('Success', 'Subscription successful!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Error', 'Subscription failed or cancelled.');
    }
  };

  return (
    <View>
      <Text>Subscribe to unlock all features!</Text>
      <Button
        title="Subscribe Now"
        onPress={handleSubscribe}
        disabled={products.length === 0}
      />
    </View>
  );
}
}
