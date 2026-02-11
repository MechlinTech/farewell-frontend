import color from '@color';
import { fontFamily, fontSize } from '@constants';
import images from '@images';
import { scale, verticalScale } from '@scale';
import * as React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import ImageComponent from './ImageComponent';
import Navigator from '@Navigator';

interface CustomToolbarProps {
  title: string;

  leftIcon?: React.ReactNode;
  onLeftPress?: () => void;
  showLeftIcon?: boolean;

  rightIcon?: React.ReactNode;
  onRightPress?: () => void;

  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  height?: number;

  children?: React.ReactNode;
  navigation: any;
}

export const CustomToolbar = ({
  title,

  leftIcon,
  onLeftPress,
  showLeftIcon = false,

  rightIcon,
  onRightPress,

  containerStyle,
  titleStyle,
  backgroundColor = color.background,
  height = verticalScale(56),

  children,
  navigation,
}: CustomToolbarProps) => {
  return (
    <View style={[styles.root, { height, backgroundColor }, containerStyle]}>
      {/* Left */}
      {showLeftIcon && (
        <Pressable
          onPress={() => {
            onLeftPress ? onLeftPress() : Navigator.goBack(navigation);
          }}
          style={styles.iconButton}
        >
          {leftIcon || (
            <ImageComponent
              source={images.backArrow}
              style={{ width: scale(20), height: verticalScale(20) }}
            />
          )}
        </Pressable>
      )}

      {/* Center */}
      <View style={styles.center}>
        <Text
          numberOfLines={1}
          style={[
            {
              fontSize: fontSize.fontSize_20,
              fontFamily: fontFamily.Heavy,
              color: color.text,
              marginTop: verticalScale(4.25),

            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
        {children}
      </View>

      {/* Right */}
      {rightIcon && (
        <Pressable
          onPress={onRightPress}
          disabled={!onRightPress}
          accessibilityRole="button"
          accessibilityLabel="Action"
          style={styles.iconButton}
        >
          {
            <ImageComponent
              source={rightIcon}
              style={{ width: scale(20), height: verticalScale(20) }}
            />
          }
        </Pressable>
      )}
    </View>
  );
};

export default CustomToolbar;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(16),
  },

  center: {
    flex: 1,
    alignItems: 'flex-start',
  },
  iconButton: {
    // width: scale(40),
    height: verticalScale(40),
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: scale(16),
  },
});
