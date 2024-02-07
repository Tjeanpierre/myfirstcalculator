import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const renderButton = (value, style = {}) => (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => handlePress(value)}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (

    
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('/', { backgroundColor: '#FF9500' })}
        </View>
        <View style={styles.row}>
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('*', { backgroundColor: '#FF9500' })}
        </View>
        <View style={styles.row}>
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('-', { backgroundColor: '#FF9500' })}
        </View>
        <View style={styles.row}>
          {renderButton('0')}
          {renderButton('.', { backgroundColor: '#FF9500' })}
          {renderButton('=', { backgroundColor: '#FF9500' })}
          {renderButton('+', { backgroundColor: '#FF9500' })}
        </View>
        <View style={styles.row}>
          {renderButton('C', { backgroundColor: '#FF3B30' })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
  inputText: {
    fontSize: 32,
    color: '#FFF',
  },
  resultText: {
    fontSize: 24,
    color: '#FFF',
  },
});

export default CalculatorApp;
