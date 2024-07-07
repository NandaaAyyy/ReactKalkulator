import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './src/components/Calculator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 10,
  },
});

export default App;