import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  Pressable,
  ImageStyle
} from 'react-native';
import * as React from 'react';
import ImageComponent from './ImageComponent';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import color from '@color';

interface CustomImageButtonProps {
  imageSource: string;
  imageStyle?: StyleProp<ImageStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  selected?: boolean;
  selectedStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const CustomImageButton = ({
  title,
  onPress,
  imageSource,
  selected,
  selectedStyle,
  imageStyle,
  titleStyle,
  containerStyle
}: CustomImageButtonProps) => {
  return (
      <Pressable
        onPress={onPress}
        style={[styles.pressable, selected && styles.selectedStyle,containerStyle]}
      >
        <ImageComponent
          source={imageSource}
          style={[styles.image, imageStyle]}
        />
        <Text style={[styles.title, titleStyle]}>
          {title}
        </Text>
      </Pressable>
  );
};

export default CustomImageButton;

const styles = StyleSheet.create({

  pressable: {
    width: scale(98),
    height: verticalScale(82),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(5),
    backgroundColor: color.primaryMuted,
    alignSelf:'flex-start'
  },
  image: {
    width: scale(27),
    height: scale(27),
  },
  title: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.Medium,
    color: color.delivery.value,
  },
  selectedStyle: {
    borderColor: color.delivery.selected,
    borderWidth: 1,
  }
});