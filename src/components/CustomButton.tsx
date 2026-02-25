import * as React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
  Pressable,
  View,
  StyleSheet,
  ImageStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/color';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import ImageComponent from './ImageComponent';

interface CustomButtonProps {
  title: string;
  onPress: () => void;

  width?: number | string;
  height?: number;

  gradientColors?: string[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };

  borderRadius?: number;

  textColor?: string;
  fontSize?: number;
  fontFamily?: string;
  letterSpacing?: number;
  textStyle?: StyleProp<TextStyle>;

  containerStyle?: StyleProp<ViewStyle>;
  pressableStyle?: StyleProp<ViewStyle> | any;

  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconSpacing?: number;
  iconStyle?: StyleProp<ImageStyle>;

  disabled?: boolean;
  pressOpacity?: number;
}

const DEFAULTS = {
  height: verticalScale(58),
  borderRadius: scale(12),
  textColor: colors.textContrast,
  fontSize: fontSize.fontSize_16,
  fontFamily: fontFamily.Heavy,
  letterSpacing: 0,
  gradientColors: [colors.primary, colors.primary],
  gradientStart: { x: 0, y: 1 },
  gradientEnd: { x: 0, y: 0 },
  pressOpacity: 0.5,
};

const CustomButton = ({
  title,
  onPress,
  width = '100%',
  height = DEFAULTS.height,

  gradientColors = DEFAULTS.gradientColors,
  gradientStart = DEFAULTS.gradientStart,
  gradientEnd = DEFAULTS.gradientEnd,

  borderRadius = DEFAULTS.borderRadius,

  textColor = DEFAULTS.textColor,
  fontSize: textFontSize = DEFAULTS.fontSize,
  fontFamily: textFontFamily = DEFAULTS.fontFamily,
  letterSpacing = DEFAULTS.letterSpacing,
  textStyle,

  containerStyle,
  pressableStyle,

  disabled = false,
  icon,
  iconPosition = 'left',
  iconSpacing = 8,
  pressOpacity = DEFAULTS.pressOpacity,
  iconStyle,
}: CustomButtonProps) => {
  return (
    <Pressable
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={title}
      hitSlop={10}
      onPress={onPress}
      style={({ pressed }) => [
        { width },
        pressableStyle,
        pressed && !disabled && { opacity: pressOpacity },
      ]}
    >
      <LinearGradient
        start={gradientStart}
        end={gradientEnd}
        colors={gradientColors}
        style={[
          styles.gradient,
          {
            height,
            borderRadius,
          },
          disabled ? styles.gradientDisabled : styles.gradientEnabled,
          containerStyle,
        ]}
      >
        <View style={styles.content}>
          {icon && iconPosition === 'left' && (
            <View style={{ marginRight: iconSpacing }}>
              <ImageComponent source={icon} style={[styles.icon, iconStyle]} />
            </View>
          )}

          <Text
            style={[
              {
                color: textColor,
                fontSize: textFontSize,
                fontFamily: textFontFamily,
                letterSpacing,
              },
              textStyle,
            ]}
          >
            {title}
          </Text>

          {icon && iconPosition === 'right' && (
            <View style={{ marginLeft: iconSpacing }}>
              <ImageComponent source={icon} style={[styles.icon, iconStyle]} />
            </View>
          )}
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientDisabled: {
    opacity: 0.6,
  },
  gradientEnabled: {
    opacity: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: scale(10),
    height: verticalScale(10),
  },
});
