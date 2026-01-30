import React, { useState } from 'react';
import { StyleSheet, StatusBar, Appearance } from 'react-native';
import color from '@color';

import BaseWrapper from 'components/Base';

const WelcomeScreen = () => {
  return (
    <BaseWrapper
      container_style={styles.container}
      fullScreenMode={true}
      linearGrad={true}
      linearStart={{ x: 0, y: 0 }}
      linearEnd={{ x: 1, y: 1 }}
    >
      <StatusBar
        backgroundColor={color.transparent}
        barStyle={'light-content'}
      />
    </BaseWrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
