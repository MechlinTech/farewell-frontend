import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseWrapper from '@components/Base';
import RiderMapBottomSheet from './components/RiderMapBottomSheet';
import color from '@color';
import { useState } from 'react';

const RiderMap = () => {
  const [data, setData] = useState({
    state: 3,
    distance: 3,
  });
  return (
    <BaseWrapper container_style={styles.container} fullScreenMode={true}>
      <RiderMapBottomSheet data={data} setData={setData} />
    </BaseWrapper>
  );
};

export default RiderMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
});
