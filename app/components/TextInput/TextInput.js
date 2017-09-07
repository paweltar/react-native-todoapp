import React from 'react';
import { TextInput } from 'react-native';
import { PropTypes } from 'prop-types';

import styles from './styles';

const Input = ({ onTextChange, onTextSubmit, inputValue }) => (
  <TextInput
    style={styles.input}
    underlineColorAndroid="transparent"
    placeholder="What do you want to finish?"
    placeholderTextColor="#343434"
    onSubmitEditing={onTextSubmit}
    onChangeText={onTextChange}
    value={inputValue}
  />
);

Input.propTypes = {
  onTextChange: PropTypes.func,
  onTextSubmit: PropTypes.func,
  inputValue: PropTypes.string,
};

export default Input;
