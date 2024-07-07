import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleTap = (type, value) => {
    if (type === 'number') {
      setCurrentValue(currentValue === '0' ? `${value}` : `${currentValue}${value}`);
    }

    if (type === 'operator') {
      setOperator(value);
      setPreviousValue(currentValue);
      setCurrentValue('0');
    }

    if (type === 'clear') {
      setCurrentValue('0');
      setOperator(null);
      setPreviousValue(null);
    }

    if (type === 'equal') {
      const current = parseFloat(currentValue);
      const previous = parseFloat(previousValue);

      if (operator === '+') {
        setCurrentValue((previous + current).toString());
        setOperator(null);
        setPreviousValue(null);
      }

      if (operator === '-') {
        setCurrentValue((previous - current).toString());
        setOperator(null);
        setPreviousValue(null);
      }

      if (operator === '*') {
        setCurrentValue((previous * current).toString());
        setOperator(null);
        setPreviousValue(null);
      }

      if (operator === '/') {
        setCurrentValue((previous / current).toString());
        setOperator(null);
        setPreviousValue(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.value}>
        {parseFloat(currentValue).toLocaleString()}
      </Text>
      <View style={styles.row}>
        <Button text="C" theme="secondary" onPress={() => handleTap('clear')} />
        <Button text="+/-" theme="secondary" onPress={() => handleTap('posneg')} />
        <Button text="%" theme="secondary" onPress={() => handleTap('percentage')} />
        <Button text="/" theme="accent" onPress={() => handleTap('operator', '/')} />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={() => handleTap('number', 7)} />
        <Button text="8" onPress={() => handleTap('number', 8)} />
        <Button text="9" onPress={() => handleTap('number', 9)} />
        <Button text="*" theme="accent" onPress={() => handleTap('operator', '*')} />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={() => handleTap('number', 4)} />
        <Button text="5" onPress={() => handleTap('number', 5)} />
        <Button text="6" onPress={() => handleTap('number', 6)} />
        <Button text="-" theme="accent" onPress={() => handleTap('operator', '-')} />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={() => handleTap('number', 1)} />
        <Button text="2" onPress={() => handleTap('number', 2)} />
        <Button text="3" onPress={() => handleTap('number', 3)} />
        <Button text="+" theme="accent" onPress={() => handleTap('operator', '+')} />
      </View>
      <View style={styles.row}>
        <Button text="0" size="double" onPress={() => handleTap('number', 0)} />
        <Button text="." onPress={() => handleTap('number', '.')} />
        <Button text="=" theme="accent" onPress={() => handleTap('equal')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#1E1E1E',
    padding: 10,
  },
  value: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
});

export default Calculator;
