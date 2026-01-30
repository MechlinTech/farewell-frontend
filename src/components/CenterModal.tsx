import * as React from 'react';
import { Modal, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface CenterModalProps {
  visible: boolean;
  onClose: () => void;

  // Container styles only
  containerStyle?: StyleProp<ViewStyle>;
  modalStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;

  // Shadow props

  // Modal props
  animationType?: 'none' | 'slide' | 'fade';
  transparent?: boolean;
  statusBarTranslucent?: boolean;

  // Children
  children: React.ReactNode;
}

const DEFAULTS = {
  // Container defaults
  backgroundColor: '#FFFFFF',
  height: 300,
  width: '80%',
  borderRadius: 20,
  paddingHorizontal: 20,
  paddingVertical: 24,

  // Modal defaults
  animationType: 'fade' as const,
  transparent: true,
  statusBarTranslucent: true,
};

export const CenterModal = ({
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
      <View style={[style.view, containerStyle]}>
        <View
          style={[
            {
              backgroundColor,
              height: height as any,
              width: width as any,
              borderRadius,
              paddingHorizontal,
              paddingVertical,
            },
            modalStyle,
          ]}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default CenterModal;

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
