import * as React from 'react';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Base from '../../../components/Base';
import color from '@color';
import { fontFamily, fontSize } from '@constants';
import { Utils } from '@Utils';
import ImageComponent from '@components/ImageComponent';
import images from '@images';
import { scale, verticalScale } from '@scale';
import MaterialCommunityIcons from
  'react-native-vector-icons/MaterialCommunityIcons';
import RequestCard from '@screens/customer/CustomerHome/components/RequestCard';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,

} from 'react-native-reanimated';


const CustomerHome = ({ navigation }: any) => {

  return (
    <Base
      backgroundColor={color.background}
      fullScreenMode
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={color.background}
      />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >

      </ScrollView>
    </Base>
  );
};


export default CustomerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
  },


});
