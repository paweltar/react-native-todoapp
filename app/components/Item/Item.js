import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Item = ({ item, onPressItem }) => (
  <TouchableOpacity onPress={() => onPressItem(item.id)}>
    <View>
      <Text style={item.isDone && styles.isDone}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

Item.propTypes = {
  item: PropTypes.object,
  onPressItem: PropTypes.func,
};

export default Item;
