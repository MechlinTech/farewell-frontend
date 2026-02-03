import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { scale } from '@scale';

import BaseWrapper from 'components/Base';

const WelcomeScreen = () => {
  return (
    <BaseWrapper
      container_style={styles.container}
      fullScreenMode={true}
    >
      <Text>233</Text>
    </BaseWrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scale(50),
  },
});
