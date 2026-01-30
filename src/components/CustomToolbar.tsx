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

  // Left icon
  leftIcon?: React.ReactNode;
  leftIconName?: string;
  onLeftPress?: () => void;
  showLeftIcon?: boolean;

  // Right icon
  rightIcon?: React.ReactNode;
  rightIconName?: string;
  onRightPress?: () => void;
  showRightIcon?: boolean;

  // Styles
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  height?: number;

  // Extra content (below or replacing title area if needed)
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
  backgroundColor = '#FFFFFF',
  height = 56,

  children,
}: CustomToolbarProps) => {
  return (
    <View style={[style.view, { height, backgroundColor }, containerStyle]}>
      {/* Left */}
      {showLeftIcon ? (
        <Pressable onPress={onLeftPress} style={{ padding: 8 }}>
          {leftIcon || <Icon name={leftIconName as any} size={24} />}
        </Pressable>
      ) : (
        <View style={{ width: scale(40) }} />
      )}

      {/* Center */}
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text
          numberOfLines={1}
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
      {showRightIcon ? (
        <Pressable onPress={onRightPress} style={{ padding: 8 }}>
          {rightIcon ||
            (rightIconName && <Icon name={rightIconName as any} size={24} />)}
        </Pressable>
      ) : (
        <View style={{ width: 40 }} />
      )}
    </View>
  );
};

export default CustomToolbar;

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(16),
  },
});
