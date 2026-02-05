import color from '@color';
import { fontFamily, fontSize } from '@constants';
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
  label?: string;
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

  enableFocusStyle?: boolean;

  /* 🔴 Validation */
  error?: string;
  showError?: boolean;

  /* 🔴 NEW — Blur/Focus handlers */
  onBlur?: () => void;
  onFocus?: () => void;
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
  enableFocusStyle = true,
  error,
  showError = true,
  onBlur,
  onFocus,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const isError = !!error;

  return (
    <View style={containerStyle}>
      {/* Label */}
      {label && (
        <Text
          style={[
            {
              fontSize: fontSize.fontSize_14,
              fontFamily: fontFamily.Medium,
              color: color.textSecondary,
              marginBottom: verticalScale(6),
            },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}

      {/* Field */}
      <Pressable
        onPress={onPress}
        disabled={!onPress}
        style={[
          styles.pressable,
          fieldStyle,
          enableFocusStyle && isFocused && styles.focused,
          isError && styles.errorBorder,
        ]}
      >
        {leftIcon && <View style={{ marginRight: scale(8) }}>{leftIcon}</View>}

        <View style={{ flex: 1 }}>
                 <TextInput
            style={[
              { fontSize: fontSize.fontSize_16, color: color.inputText },
              textStyle,
            ]}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            placeholderTextColor={color.placeholderText}
            onFocus={() => {
              setIsFocused(true);
              onFocus?.(); // 🔴 trigger parent focus
            }}
            onBlur={() => {
              setIsFocused(false);
              onBlur?.(); // 🔴 trigger parent blur
            }}
          />
        </View>

        {children ??
          (rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>)}
      </Pressable>

      {/* Error */}
      {isError && showError && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(12),
    backgroundColor: color.primaryMuted,
    borderRadius: scale(10),
    minHeight: verticalScale(50),
    borderWidth: 1,
    borderColor: 'transparent',
  },
  focused: {
    borderColor: color.primary,
  },
  errorBorder: {
    borderColor: color.error,
  },
  errorText: {
    marginTop: verticalScale(4),
    fontSize: fontSize.fontSize_12,
    color: color.error,
    fontFamily: fontFamily.Medium,
  },
});
