import React, { useState, useRef } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [input, setInput] = useState('');
  const timerRef = useRef(null);

  const startStop = () => {
    if (running) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => Math.max(prevTime - 1000, 0));
      }, 1000);
    }
    setRunning(!running);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setRunning(false);
  };

  const setTimer = () => {
    setTime(parseInt(input, 10) * 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{(time / 1000).toFixed(1)}s</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
        placeholder="Set timer (seconds)"
      />
      <Button title="Set Timer" onPress={setTimer} />
      <Button title={running ? 'Stop' : 'Start'} onPress={startStop} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  time: {
    fontSize: 48,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    color: '#FFFFFF',
    width: '80%',
    textAlign: 'center',
  },
});

export default Timer;
