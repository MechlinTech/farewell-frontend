import * as React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import color from '@color';
import { scale } from '@scale';

interface CenterModalProps {
  visible: boolean;
  onClose?: () => void;
  disableClose?: boolean; // ✅ NEW

  containerStyle?: StyleProp<ViewStyle>;
  modalStyle?: StyleProp<ViewStyle>;

  animationType?: 'none' | 'slide' | 'fade';
  transparent?: boolean;
  statusBarTranslucent?: boolean;

  children: React.ReactNode;
}

const CenterModal = ({
  visible,
  onClose,
  disableClose = false,

  containerStyle,
  modalStyle,

  animationType = 'fade',
  transparent = true,
  statusBarTranslucent = true,

  children,
}: CenterModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      statusBarTranslucent={statusBarTranslucent}
      onRequestClose={disableClose ? () => {} : onClose}
    >
      {/* Backdrop */}
      <Pressable
        style={[styles.backdrop, containerStyle]}
        onPress={disableClose ? undefined : onClose}
      >
        {/* Prevent backdrop close when tapping modal */}
        <Pressable>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <View style={[styles.modal, modalStyle]}>{children}</View>
          </KeyboardAvoidingView>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default CenterModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: color.background,
    borderRadius: scale(32),
    paddingHorizontal: scale(33),
    paddingTop: scale(40),
    paddingBottom: scale(36),
    marginTop: scale(30),
    marginBottom: scale(30),
  },
});
