import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import color from '@color';

const Loader = ({ isLoading = false }) => {
  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={color.purple} />
      </View>
    );
  }
  return null;
};

export default Loader;
