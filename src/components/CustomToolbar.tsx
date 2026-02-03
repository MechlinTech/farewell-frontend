import color from '@color';
import { fontFamily, fontSize } from '@constants';
import { scale } from '@scale';
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
import Icon from 'react-native-vector-icons/Ionicons';

interface CustomToolbarProps {
  title: string;

  leftIcon?: React.ReactNode;
  leftIconName?: string;
  onLeftPress?: () => void;
  showLeftIcon?: boolean;

  rightIcon?: React.ReactNode;
  rightIconName?: string;
  onRightPress?: () => void;
  showRightIcon?: boolean;

  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  height?: number;

  children?: React.ReactNode;
}

export const CustomToolbar = ({
  title,

  leftIcon,
  leftIconName = 'chevron-back',
  onLeftPress,
  showLeftIcon = true,

  rightIcon,
  rightIconName,
  onRightPress,
  showRightIcon = false,

  containerStyle,
  titleStyle,
  backgroundColor = color.background,
  height = 56,

  children,
}: CustomToolbarProps) => {
  return (
    <View style={[styles.root, { height, backgroundColor }, containerStyle]}>
      {/* Left */}
      <View style={styles.side}>
        {showLeftIcon && (
          <Pressable
            onPress={onLeftPress}
            disabled={!onLeftPress}
            accessibilityRole="button"
            accessibilityLabel="Back"
            style={styles.iconButton}
          >
            {leftIcon || <Icon name={leftIconName as any} size={24} />}
          </Pressable>
        )}
      </View>

      {/* Center */}
      <View style={styles.center}>
        <Text
          numberOfLines={1}
          accessibilityRole="header"
          style={[
            {
              fontSize: fontSize.fontSize_18,
              fontFamily: fontFamily.Medium,
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
        {children}
      </View>

      {/* Right */}
      <View style={styles.side}>
        {showRightIcon && (
          <Pressable
            onPress={onRightPress}
            disabled={!onRightPress}
            accessibilityRole="button"
            accessibilityLabel="Action"
            style={styles.iconButton}
          >
            {rightIcon ||
              (rightIconName && <Icon name={rightIconName as any} size={24} />)}
          </Pressable>
        )}
      </View>
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
  side: {
    width: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
  },
});
