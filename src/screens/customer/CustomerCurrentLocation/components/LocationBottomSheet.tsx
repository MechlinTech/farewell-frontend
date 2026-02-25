import color from '@color';
import { scale } from '@scale';
import * as React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

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
    borderRadius: scale(25),
    position: 'absolute',
  },
});
