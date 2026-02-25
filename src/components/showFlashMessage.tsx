// components/FlashMessage.tsx

import color from '@color';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toast, { BaseToastProps } from 'react-native-toast-message';

type ToastType = 'success' | 'error' | 'info' | 'default';
type ToastPosition = 'top' | 'bottom';

// ✅ Reusable function to show toast
export const showFlashMessage = (
  message: string,
  type: ToastType = 'default',
  position: ToastPosition = 'top',
  duration: number = 3000,
) => {
  message &&
    Toast.show({
      type: mapToastType(type),
      text1: message,
      position,
      visibilityTime: duration,
      autoHide: true,
      topOffset: 50,
      bottomOffset: 40,
    });
};

// ✅ Maps toast type to our custom keys
const mapToastType = (_type: ToastType): 'common' => {
  return 'common'; // All types use the same UI
};

// ✅ Custom Toast component (common style)
const CommonToast = ({ text1 }: BaseToastProps) => {
  return (
    <View style={styles.toastContainer}>
      <Text style={styles.toastText}>{text1}</Text>
    </View>
  );
};

// ✅ Export the config to plug into Toast
export const toastConfig = {
  common: (props: BaseToastProps) => <CommonToast {...props} />,
};

// ✅ Styles
const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: color.primaryMuted, // Common color
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(20),
    borderRadius: scale(8),
    marginHorizontal: scale(16),
    elevation: 4,
    width: '90%',
  },
  toastText: {
    color: color.text,
    fontFamily: fontFamily.weight300,
    fontSize: fontSize.fontSize_15,
  },
});

export default Toast;
