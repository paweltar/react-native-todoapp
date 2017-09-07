import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const DeleteButton = ({ onPressDelete }) => (
  <View>
    <Button
      onPress={onPressDelete}
      title="Delete finished items"
      color="#D57A66"
      accessibilityLabel="Remove finished items from the list"
    />
  </View>
);

DeleteButton.propTypes = {
  onPressDelete: PropTypes.func,
};

export default DeleteButton;
