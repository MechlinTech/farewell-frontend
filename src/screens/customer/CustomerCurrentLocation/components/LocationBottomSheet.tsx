import color from '@color';
import { scale } from '@scale';
import * as React from 'react';
import {
  Modal,
  View,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface BottomSheetProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  backdropOpacity?: number;
  borderRadius?: number;
}

const LocationBottomSheet = ({ children }: BottomSheetProps) => {
  return (
    <View style={[styles.sheet]}>
      {children}
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};

export default LocationBottomSheet;

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    backgroundColor: 'transparent',
    // flex: 1,
    // justifyContent: 'flex-end',
  },
  sheet: {
    width: '100%',
    backgroundColor: color.background,
    padding: scale(16),
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
    position: 'absolute',
  },
});
