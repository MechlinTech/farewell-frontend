import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import TranslucentStatusBar from './TranslucentStatusBar';
import color from '@color';
 
export interface Props {
  container_style?: any;
  children?: React.ReactNode;
  backgroundColor?: string;
  fullScreenMode?: boolean;
}
 
const BaseWrapper: React.FC<Props> = ({
  container_style,
  children,
  backgroundColor = color.background,
  fullScreenMode = false,
}) => {
  /**
   * ✅ Safe area handling
   *
   * Android fullscreen → remove top
   * iOS fullscreen → KEEP top
   */
  const edges: any = ['top', 'left', 'right', 'bottom'];

  return (
    <SafeAreaView
      edges={edges}
      style={[
        styles.safeAreaView,
        { backgroundColor: backgroundColor },
      ]}
    >
      <View style={styles.contentContainer}>
        <TranslucentStatusBar
          container_style={container_style}
          translucent={fullScreenMode}
          backgroundColor={
            fullScreenMode ? 'transparent' : backgroundColor
          }
          barStyle="dark-content"
        >
          {children}
        </TranslucentStatusBar>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
});
 
export default BaseWrapper;
