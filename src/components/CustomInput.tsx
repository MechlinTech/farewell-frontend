import color from '@color';
import { fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import * as React from 'react';
import {
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';

interface CustomInputProps {
  label?: string;
  value?: string;
  placeholder?: string | any;
  onPress?: () => void;
  onChangeText?: (text: string) => void;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;

  containerStyle?: StyleProp<ViewStyle>;
  fieldStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;

  editable?: boolean;
}

export const CustomInput = ({
  label,
  value,
  placeholder,
  onPress,
  onChangeText,
  leftIcon,
  rightIcon,
  children,
  containerStyle,
  fieldStyle,
  labelStyle,
  textStyle,
  editable = true,
}: CustomInputProps) => {
  const Wrapper = onPress ? Pressable : View;

  return (
    <View style={containerStyle}>
      <Text
        accessibilityRole="text"
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

      <Wrapper
        onPress={onPress}
        disabled={!onPress}
        style={[styles.field, fieldStyle]}
      >
        {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}

        <View style={{ flex: 1 }}>
          <TextInput
            style={[
              {
                fontSize: fontSize.fontSize_16,
                color: color.inputText,
              },
              textStyle,
            ]}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            placeholderTextColor="#999"
            editable={editable && !onPress}
            accessibilityLabel={label}
          />
        </View>

        {children
          ? children
          : rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
      </Wrapper>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(12),
    backgroundColor: color.lightTheme,
    borderRadius: scale(10),
    minHeight: verticalScale(50),
  },
});
