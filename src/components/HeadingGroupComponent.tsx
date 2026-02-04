import * as React from 'react';
import { View, Text, StyleProp, TextStyle, StyleSheet } from 'react-native';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import color from '@color';

interface HeadingGroupProps {
  heading: string;
  headingStyle?: StyleProp<TextStyle>;
  subheading?: string;
  subheadingStyle?: StyleProp<TextStyle>;
}

export const HeadingGroup = ({
  heading,
  subheading,
  headingStyle,
  subheadingStyle,
}: HeadingGroupProps) => {
  return (
    <View style={style.container}>
      <Text style={[style.heading, headingStyle]}>{heading}</Text>
      <Text style={[style.subheading, subheadingStyle]}>{subheading}</Text>
    </View>
  );
};

export default HeadingGroup;

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    // paddingHorizontal: scale(12),
    paddingBlock: verticalScale(35),
    gap: verticalScale(5),
  },
  heading: {
    color: color.textMain,
    fontSize: fontSize.fontSize_20,
    fontFamily: fontFamily.weight800,
    marginBottom: verticalScale(6),
  },
  subheading: {
    color: color.textSubHeading,
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
  },
});
