import * as React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

interface Props {
  children: React.ReactNode;
  translucent: boolean;
  backgroundColor: any;
  barStyle: any;
  container_style?: any;
}

const defaultContainer = StyleSheet.create({
  root: { flex: 1, width: '100%' },
});

const TranslucentStatusBar: React.FC<Props> = ({
  children,
  translucent,
  backgroundColor,
  barStyle,
  container_style,
}) => {
  return (
    <View style={container_style || defaultContainer.root}>
      <StatusBar
        translucent={translucent}
        backgroundColor={backgroundColor}
        barStyle={barStyle} // or "dark-content"
      />
      {children}
    </View>
  );
};

export default TranslucentStatusBar;
