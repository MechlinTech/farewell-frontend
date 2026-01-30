import color from '@color';
import { fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import * as React from 'react';
import {
  Pressable,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInput,
  StyleSheet,
} from 'react-native';

interface CustomInputProps {
  label: string;
  value?: string;
  placeholder?: string;
  onPress?: () => void;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  onChangeText?: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  fieldStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}
export const CustomInput = ({
  label,
  value,
  placeholder,
  onPress,
  leftIcon,
  rightIcon,
  children,
  containerStyle,
  fieldStyle,
  labelStyle,
  onChangeText,
  textStyle,
}: CustomInputProps) => {
  return (
    <View style={containerStyle}>
      <Text
        style={[
          {
            fontSize: 16,
            fontWeight: '700',
            color: '#666',
            marginBottom: 6,
          },
          labelStyle,
        ]}
      >
        {label}
      </Text>

      <Pressable
        onPress={onPress}
        disabled={!onPress}
        style={[style.pressable, fieldStyle]}
      >
        {/* Left icon */}
        {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}

        {/* Text / value */}
        <View style={{ flex: 1 }}>
          <TextInput
            style={[
              { fontSize: fontSize.fontSize_16, color: color.inputText },
              textStyle,
            ]}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText} // pass from root component
            placeholderTextColor={color.black}
          />
        </View>

        {/* Right icon OR children */}
        {children ??
          (rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>)}
      </Pressable>
    </View>
  );
};

export default CustomInput;

const style = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(12),
    backgroundColor: color.lightTheme,
    borderRadius: scale(10),
    minHeight: verticalScale(50),
  },
});
