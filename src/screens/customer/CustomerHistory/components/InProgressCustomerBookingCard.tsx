import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import color from '@color';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import ImageComponent from '@components/ImageComponent';
import images from '@images';
import BaseLine from '@components/BaseLine';
import Navigator from '@Navigator';

interface Props {
  navigation: any;
  item: {
    bookingId: string;
    location: string;
    address?: string;
    pickedAt?: string;
  };
}

const InProgressBookingCard: React.FC<Props> = ({ item, navigation }: any) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        Navigator.pushScreen(navigation, 'CustomerDeliveryDetails', {
          id: item?.bookingId,
        });
      }}
    >
      {/* 🔹 Header */}
      <View style={styles.headerRow}>
        <View style={styles.leftContent}>
          <View style={styles.iconBox}>
            <ImageComponent
              source={images.package}
              style={styles.packageIcon}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.bookingId}>{item.bookingId}</Text>

            <View style={styles.locationRow}>
              <ImageComponent
                source={images.location}
                style={styles.locationIcon}
              />
              <Text style={styles.locationText}>{item.location}</Text>
            </View>
          </View>
        </View>

        {/* 🔹 Status */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>In Progress</Text>
        </View>
      </View>

      <BaseLine style={styles.divider} />

      {/* 🔹 Expanded Section */}
      <View style={styles.expandedBox}>
        <Text style={styles.metaText}>Package Picked at {item.pickedAt}</Text>

        <View style={styles.locationRow}>
          <ImageComponent
            source={images.location}
            style={styles.locationIcon}
          />
          <Text style={styles.locationText}>{item.address}</Text>
        </View>

        <Text style={styles.waitingText}>Waiting to deliver the package</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InProgressBookingCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: scale(1),
    borderColor: color.border,
    borderRadius: scale(12),
    paddingTop: verticalScale(19),
    paddingBottom: verticalScale(22),
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: scale(16),
    paddingRight: scale(10),
  },

  leftContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  bookingId: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight600,
    color: color.textMain,
    width: '90%',
  },

  iconBox: {
    width: scale(32),
    height: verticalScale(32),
    borderRadius: scale(6),
    backgroundColor: color.packageBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(8),
  },

  packageIcon: {
    width: scale(18),
    height: verticalScale(18),
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: verticalScale(4),
  },

  locationIcon: {
    width: scale(8),
    height: verticalScale(10),
    marginRight: scale(4),
  },

  locationText: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
    color: color.textContrast,
    width: '80%',
  },

  /* 🔹 Badge */
  badge: {
    backgroundColor: color.primaryMuted,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: scale(6),
  },

  badgeText: {
    fontSize: fontSize.fontSize_10,
    fontFamily: fontFamily.weight500,
    color: color.textContrast,
  },

  /* 🔹 Divider */
  divider: {
    marginTop: verticalScale(14),
  },

  /* 🔹 Expanded */
  expandedBox: {
    marginTop: verticalScale(12),
    paddingLeft: scale(16),
    paddingRight: scale(10),
  },

  metaText: {
    fontSize: fontSize.fontSize_10,
    fontFamily: fontFamily.weight400,
    color: color.booking.meta,
  },

  waitingText: {
    marginTop: verticalScale(26),
    fontSize: fontSize.fontSize_11,
    fontFamily: fontFamily.weight400,
    color: color.textSecondary,
    lineHeight: verticalScale(16),
  },
});
