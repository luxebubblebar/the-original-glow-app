import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function DetailedJournalScreen() {
  const [entries, setEntries] = useState([
    // Example initial entries; in real app, load from storage or backend
    {
      id: '1',
      type: 'Tarot Reading',
      title: 'Daily Tarot',
      content: 'Pulled The Fool, a sign of new beginnings...',
      date: '2025-08-05',
    },
    {
      id: '2',
      type: 'Ritual',
      title: 'Full Moon Release',
      content: 'Let go of negativity, light a white candle...',
      date: '2025-08-01',
    },
  ]);
  const [newEntryType, setNewEntryType] = useState('Tarot Reading');
  const [newEntryTitle, setNewEntryTitle] = useState('');
  const [newEntryContent, setNewEntryContent] = useState('');

  const addEntry = () => {
    if (!newEntryTitle || !newEntryContent) {
      Alert.alert('Please fill in both title and content');
      return;
    }
    const newEntry = {
      id: Date.now().toString(),
      type: newEntryType,
      title: newEntryTitle,
      content: newEntryContent,
      date: new Date().toISOString().split('T')[0],
    };
    setEntries([newEntry, ...entries]);
    setNewEntryTitle('');
    setNewEntryContent('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📔 Detailed Journal</Text>

      {/* New Entry Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Entry Type</Text>
        <View style={styles.entryTypeContainer}>
          {['Tarot Reading', 'Ritual', 'Birth Chart'].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.entryTypeButton,
                newEntryType === type && styles.entryTypeButtonActive,
              ]}
              onPress={() => setNewEntryType(type)}
            >
              <Text
                style={[
                  styles.entryTypeText,
                  newEntryType === type && styles.entryTypeTextActive,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Entry title"
          value={newEntryTitle}
          onChangeText={setNewEntryTitle}
        />

        <Text style={styles.label}>Content</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          multiline
          placeholder="Write your notes here..."
          value={newEntryContent}
          onChangeText={setNewEntryContent}
        />

        <TouchableOpacity style={styles.addButton} onPress={addEntry}>
          <Text style={styles.addButtonText}>Add Entry</Text>
        </TouchableOpacity>
      </View>

      {/* Entries List */}
      <View style={styles.entries}>
        {entries.length === 0 ? (
          <Text style={styles.noEntries}>No entries yet</Text>
        ) : (
          entries.map(({ id, type, title, content, date }) => (
            <View key={id} style={styles.entryCard}>
              <Text style={styles.entryType}>{type}</Text>
              <Text style={styles.entryTitle}>{title}</Text>
              <Text style={styles.entryDate}>{date}</Text>
              <Text style={styles.entryContent}>{content}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#0b1a3d',
    flexGrow: 1,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8c8dc',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#1f3057',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  label: {
    color: '#e0c68b',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  entryTypeContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-around',
  },
  entryTypeButton: {
    borderWidth: 1,
    borderColor: '#b083ea',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  entryTypeButtonActive: {
    backgroundColor: '#b083ea',
  },
  entryTypeText: {
    color: '#b083ea',
    fontWeight: 'bold',
  },
  entryTypeTextActive: {
    color: 'white',
  },
  input: {
    backgroundColor: '#0b1a3d',
    borderColor: '#b083ea',
    borderWidth: 1,
    borderRadius: 8,
    color: '#f8e9d0',
    padding: 12,
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#e0c68b',
    borderRadius: 12,
    paddingVertical: 14,
  },
  addButtonText: {
    color: '#1f3057',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  entries: {
    // List container
  },
  noEntries: {
    color: '#dcd6f7',
    textAlign: 'center',
    marginTop: 20,
  },
  entryCard: {
    backgroundColor: '#1f3057',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  entryType: {
    color: '#e0c68b',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  entryTitle: {
    color: '#f8c8dc',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  entryDate: {
    color: '#b083ea',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  entryContent: {
    color: '#dcd6f7',
  },
});
// JavaScript source code
