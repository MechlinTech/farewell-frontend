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
  visible?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  backdropOpacity?: number;
  borderRadius?: number;
}

const BottomSheet = ({
  visible,
  onClose,
  children,
  containerStyle,
  backdropOpacity = 0.4,
  borderRadius = 18,
}: BottomSheetProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Backdrop */}
        <Pressable
          style={[
            styles.backdrop,
            { backgroundColor: `rgba(0,0,0,${backdropOpacity})` },
          ]}
          onPress={onClose}
        />

        {/* Sheet */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View
            style={[
              styles.sheet,
              {
                borderTopLeftRadius: borderRadius,
                borderTopRightRadius: borderRadius,
                paddingBottom: scale(16) + insets.bottom,
              },
              containerStyle,
            ]}
          >
            {children}
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheet: {
    width: '100%',
    backgroundColor: color.background,
    padding: scale(16),
  },
});
