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

interface CenterModalProps {
  visible: boolean;
  onClose: () => void;

  containerStyle?: StyleProp<ViewStyle>;
  modalStyle?: StyleProp<ViewStyle>;
  backgroundColor?: any;
  height?: number | string | any;
  width?: number | string | any;
  borderRadius?: number | any;
  paddingHorizontal?: number;
  paddingVertical?: number;

  animationType?: 'none' | 'slide' | 'fade';
  transparent?: boolean;
  statusBarTranslucent?: boolean;

  children: React.ReactNode;
}

const DEFAULTS = {
  backgroundColor: '#FFFFFF',
  height: 300,
  width: '80%',
  borderRadius: 20,
  paddingHorizontal: 20,
  paddingVertical: 24,
  animationType: 'fade' as const,
  transparent: true,
  statusBarTranslucent: true,
};

const CenterModal = ({
  visible,
  onClose,
  containerStyle,
  modalStyle,
  backgroundColor = DEFAULTS.backgroundColor,
  height = DEFAULTS.height,
  width = DEFAULTS.width,
  borderRadius = DEFAULTS.borderRadius,
  paddingHorizontal = DEFAULTS.paddingHorizontal,
  paddingVertical = DEFAULTS.paddingVertical,
  animationType = DEFAULTS.animationType,
  transparent = DEFAULTS.transparent,
  statusBarTranslucent = DEFAULTS.statusBarTranslucent,
  children,
}: CenterModalProps) => {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent={transparent}
      statusBarTranslucent={statusBarTranslucent}
      onRequestClose={onClose}
    >
      <Pressable style={[styles.backdrop, containerStyle]} onPress={onClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <Pressable
            onPress={() => {}}
            style={[
              styles.modal,
              modalStyle,
              {
                backgroundColor: backgroundColor,
                height: height,
                width: width,
                borderRadius: borderRadius,
                paddingHorizontal: paddingHorizontal,
                paddingVertical: paddingVertical,
              },
            ]}
          >
            {children}
          </Pressable>
        </KeyboardAvoidingView>
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
    maxWidth: '95%',
  },
});
