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

const LocationBottomSheet = ({
  children,
  containerStyle,
  backdropOpacity = 0.4,
}: //   borderRadius = scale(18),
BottomSheetProps) => {
  const insets = useSafeAreaInsets();

  return (
    // <Modal transparent>
    <View
      style={[
        styles.sheet,
        // styles.sheet,
        // {
        //   borderTopLeftRadius: borderRadius,
        //   borderTopRightRadius: borderRadius,
        //   paddingBottom: scale(16) + insets.bottom,
        // },
        // containerStyle,
      ]}
    >
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
