import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import CenterModal from '@components/CenterModal';
import ImageComponent from '@components/ImageComponent';

import color from '@color';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import images from '@images';

interface Props {
  visible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutModal: React.FC<Props> = ({ visible, onClose, onLogout }) => {
  return (
    <CenterModal
      visible={visible}
      onClose={onClose}
      disableClose={false}
      modalStyle={{
        width: scale(328),
      }}
    >
      <View style={styles.container}>
        {/* 🔹 Icon Circle */}
        <View style={styles.iconCircle}>
          <ImageComponent source={images.logout} style={styles.icon} />
        </View>

        {/* 🔹 Title */}
        <Text style={styles.title}>Logout?</Text>

        {/* 🔹 Subtitle */}
        <Text style={styles.subtitle}>
          Are you sure you want to logout now?
        </Text>

        {/* 🔹 Actions */}
        <View style={styles.actionsRow}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.cancelBtn}
            activeOpacity={0.8}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onLogout}
            style={styles.logoutBtn}
            activeOpacity={0.8}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CenterModal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  /* Icon */

  iconCircle: {
    width: scale(74),
    height: scale(74),
    borderRadius: scale(37),
    backgroundColor: color.logoBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(30),
  },

  icon: {
    width: scale(34),
    height: scale(26),
  },
  /* Text */

  title: {
    fontSize: fontSize.fontSize_20,
    fontFamily: fontFamily.Heavy,
    color: color.textMain,
  },

  subtitle: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.Roman,
    color: color.darkText,
    textAlign: 'center',
    marginTop: verticalScale(10),
    lineHeight: verticalScale(20),
    marginHorizontal: scale(40),
  },

  /* Actions */

  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(28),
  },

  cancelBtn: {
    width: verticalScale(139),
    height: scale(56),
    marginRight: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelText: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight600,
    color: color.textContrast,
  },

  logoutBtn: {
    backgroundColor: color.primary,
    width: verticalScale(139),
    height: scale(56),
    borderRadius: scale(12),
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoutText: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight700,
    color: color.textContrast,
  },
});
