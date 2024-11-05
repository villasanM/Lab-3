import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const RecoverPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    // Handle reset password logic here, e.g., send email with instructions
    console.log('Email:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recover Password</Text>
      <Text style={styles.subtitle}>Enter your Email and instructions will be sent to you!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          placeholderTextColor="#8B7E74" // Darker shade for placeholder text
        />
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.backToLogin}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5E0C3', // Nude color for the entire background
    margin: 0, // Make sure there's no margin
    padding: 0, // Remove padding to ensure full coverage
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5C504D', // Darker nude for text
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#8B7E74', // Muted shade for subtitle
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF', // White background for input
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#5C504D', // Darker nude for input text
    borderWidth: 1, // Optional: add a border
    borderColor: '#C0C0C0', // Optional: light gray border color
  },
  resetButton: {
    backgroundColor: '#5B3A29', // Dark brown background for the reset button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  resetButtonText: {
    color: '#FFFFFF', // White color for the reset button text
    fontSize: 18,
    fontWeight: '600',
  },
  backToLogin: {
    color: '#8B7E74', // Nude color for "Back to Login" text
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default RecoverPasswordForm;
