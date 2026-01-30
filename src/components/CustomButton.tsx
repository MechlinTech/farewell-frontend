import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  Pressable,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
w            
interface CustomButtonProps {
  title: string;
  onPress: () => void;

  /* Layout */
  width?: number | string;
  height?: number;

  /* Gradient */
  gradientColors?: string[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };

  /* Shape */
  borderRadius?: number;

  /* Text */
  textColor?: string;
  fontSize?: number;
  fontFamily?: string;
  letterSpacing?: number;
  textStyle?: StyleProp<TextStyle>;

  /* Containers */
  containerStyle?: StyleProp<ViewStyle>; // LinearGradient
  pressableStyle?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconSpacing?: number; // Pressable

  disabled?: boolean;
  pressOpacity?: number;
}

const DEFAULTS = {
  height: 58,
  borderRadius: 12,
  textColor: '#0A5783',
  fontSize: 14,
  fontFamily: 'Poppins-Medium',
  letterSpacing: 1,
  gradientColors: ['#8FD0F6', '#8FD0F6'],
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
  fontSize = DEFAULTS.fontSize,
  fontFamily = DEFAULTS.fontFamily,
  letterSpacing = DEFAULTS.letterSpacing,
  textStyle,

  containerStyle,
  pressableStyle,

  disabled,
  icon,
  iconPosition = 'left',
  iconSpacing,
  pressOpacity = DEFAULTS.pressOpacity,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={() => !disabled && onPress()}
      style={({ pressed }) => [
        { width: width as any },
        pressableStyle,
        pressed && !disabled && { opacity: pressOpacity },
      ]}
    >
      <LinearGradient
        start={gradientStart}
        end={gradientEnd}
        colors={gradientColors}
        style={[
          {
            height,
            borderRadius,
            justifyContent: 'center',
            alignItems: 'center',
          },
          containerStyle,
          disabled && { opacity: 0.6 },
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: icon ? iconSpacing ?? 8 : 0,
          }}
        >
          {icon && iconPosition === 'left' && <View>{icon}</View>}
          <Text
            style={[
              {
                color: textColor,
                fontSize,
                fontFamily,
                letterSpacing,
              },
              textStyle,
            ]}
          >
            {title}
          </Text>
          {icon && iconPosition === 'right' && <View>{icon}</View>}
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default CustomButton;
