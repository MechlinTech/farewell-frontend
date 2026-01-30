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
} from 'react-native';

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
  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
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
        <View
          style={[
            styles.sheet,
            {
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
            },
            containerStyle,
          ]}
        >
          {children}
        </View>
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
    flex: 1, // Ensures the container covers the whole screen
  },
  sheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: color.background,
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    padding: scale(16),
  },
});
