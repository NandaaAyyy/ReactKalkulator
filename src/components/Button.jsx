import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      {typeof text === 'string' ? (
        <Text style={textStyles}>{text}</Text>
      ) : (
        text
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    borderRadius: 5,
    backgroundColor: '#333333',
  },
  text: {
    color: '#fff',
    fontSize: 28,
  },
  buttonDouble: {
    flex: 2,
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
  },
  textSecondary: {
    color: '#060606',
  },
  buttonAccent: {
    backgroundColor: '#f09a36',
  },
});

export default Button;
