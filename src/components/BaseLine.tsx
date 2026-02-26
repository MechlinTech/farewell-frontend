// components/BaseLine.tsx
import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import color from '@color';
import { scale } from '@scale';

interface Props {
  style?: ViewStyle;
}

const BaseLine: React.FC<Props> = ({ style }) => {
  return <View style={[styles.line, style]} />;
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: color.border,
    height: scale(1),
  },
});

export default BaseLine;
