import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { scale, verticalScale } from '@scale';

import BaseWrapper from 'components/Base';
import color from '@color';
import images from '@images';
import ImageComponent from 'components/ImageComponent';

const WelcomeScreen = () => {

  
  return (
    <BaseWrapper
      container_style={styles.container}
      fullScreenMode={true}
    >

      <ImageComponent
        source={images.farewell}
        style={styles.image}
      />

    </BaseWrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scale(50),
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: scale(322),
    height: verticalScale(142),
  }
});
