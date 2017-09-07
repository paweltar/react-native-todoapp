import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { Item } from '../Item';

const ItemsList = ({ items, onPressItem }) => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {items.map(item => <Item key={item.id} item={item} onPressItem={onPressItem} />)}
    </ScrollView>
  </View>
);

ItemsList.propTypes = {
  items: PropTypes.array,
  onPressItem: PropTypes.func,
};

export default ItemsList;
