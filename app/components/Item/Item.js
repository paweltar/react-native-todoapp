import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';

const Item = ({ item, onPressItem }) => {
  const textStyles = [styles.text];
  const containerStyles = [styles.container];
  if (item.isDone) {
    textStyles.push(styles.isDone);
    containerStyles.push(styles.activeContainer);
  }
  return (
    <TouchableOpacity onPress={() => onPressItem(item.id)}>
      <View style={containerStyles}>
        <Text style={textStyles}>{item.title}</Text>
        <Text style={styles.date}>{moment(item.date).fromNow()}</Text>
      </View>
    </TouchableOpacity>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  onPressItem: PropTypes.func,
};

export default Item;
