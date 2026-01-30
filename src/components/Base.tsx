import React from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TranslucentStatusBar from './TranslucentStatusBar';
import color from '@color';

export interface Props {
  container_style?: any;
  children?: React.ReactNode;
  backgroundColor?: string;
  fullScreenMode: boolean;
  linearGrad?: boolean;
  linearLocation?: number[];
  linearColor?: string[];
  linearStyle?: any;
  linearStart?: { x: number; y: number };
  linearEnd?: { x: number; y: number };
  topViewBackgroundColor?: any;
}

const BaseWrapper: React.FC<Props> = ({
  container_style,
  children,
  backgroundColor = color.background,
  fullScreenMode,
  linearGrad = false,
  linearLocation = [0, 0.5, 1],
  linearColor = [color.background, color.background],
  linearStyle = {},
  linearStart = { x: 0, y: 0 },
  linearEnd = { x: 0, y: 1 },
}) => {
  const edgeInsets = fullScreenMode
    ? ['left', 'right', 'bottom']
    : ['top', 'left', 'right', 'bottom'];

  const wrapperProps = {
    colors: linearColor,
    locations: linearLocation,
    start: linearStart,
    end: linearEnd,
    style: { flex: 1 },
  };

  // Background is transparent if gradient is enabled
  const Content = (
    <View
      style={[
        styles.contentContainer,
        { backgroundColor: linearGrad ? 'transparent' : backgroundColor },
      ]}
    >
      <TranslucentStatusBar
        container_style={container_style}
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      >
        {children}
      </TranslucentStatusBar>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }} edges={edgeInsets}>
      {linearGrad ? (
        <LinearGradient {...wrapperProps}>{Content}</LinearGradient>
      ) : (
        Content
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: '100%',
  },
});

export default BaseWrapper;
