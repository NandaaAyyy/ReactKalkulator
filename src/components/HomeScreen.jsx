import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Aplikasi Multifungsi</Text>
      <Button
        title="Kalkulator"
        onPress={() => navigation.navigate('Calculator')}
      />
      <Button
        title="Stopwatch"
        onPress={() => navigation.navigate('Stopwatch')}
      />
      <Button
        title="Timer"
        onPress={() => navigation.navigate('Timer')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#758694',
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 30,
  },
  button: {
    marginBottom: 30,
  },
});

export default HomeScreen;
