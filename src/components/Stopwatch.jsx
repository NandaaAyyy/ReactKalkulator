import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const startStop = () => {
    if (running) {
      clearInterval(timerRef.current);
    } else {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 1000);
    }
    setRunning(!running);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{(time / 1000).toFixed(1)}s</Text>
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
});

export default Stopwatch;
