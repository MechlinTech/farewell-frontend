import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import color from '@color';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import ImageComponent from '@components/ImageComponent';
import images from '@images';
import Navigator from '@Navigator';

interface Props {
  navigation: any;
  item: {
    bookingId: string;
    location: string;
    time: string;
    status: 'COMPLETED' | 'NOT_STARTED';
  };
}

const RiderBookingCard: React.FC<Props> = ({ item, navigation }: any) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        Navigator.pushScreen(navigation, 'CustomerDeliveryDetails', {
          id: item?.bookingId,
        });
      }}
    >
      <View style={styles.headerRow}>
        {/* 🔹 Left Content */}
        <View style={{ flex: 1 }}>
          <Text style={styles.bookingId}>{item.bookingId}</Text>

          <View style={styles.infoRow}>
            {/* Package Icon */}
            <View style={styles.iconBox}>
              <ImageComponent
                source={images.package}
                style={styles.packageIcon}
              />
            </View>

            {/* Location + Time */}
            <View style={{ flex: 1 }}>
              <View style={styles.locationRow}>
                <ImageComponent
                  source={images.location}
                  style={styles.locationIcon}
                />
                <Text style={styles.locationText}>{item.location}</Text>
              </View>

              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </View>
        </View>

        {/* 🔹 Status Badge */}
        <View
          style={[
            styles.badge,
            item.status === 'COMPLETED'
              ? styles.completedBadge
              : styles.pendingBadge,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              item.status === 'COMPLETED'
                ? styles.completedBadgeText
                : styles.pendingBadgeText,
            ]}
          >
            {item.status === 'COMPLETED' ? 'Completed' : 'Not Started'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RiderBookingCard;

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: verticalScale(1),
    borderColor: color.border,
    paddingBottom: verticalScale(16),
    paddingHorizontal: scale(8),
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  bookingId: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight600,
    color: color.textMain,
    width: '90%',
  },

  infoRow: {
    flexDirection: 'row',
    marginTop: verticalScale(12),
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
    alignItems: 'center',
  },

  locationIcon: {
    width: scale(12),
    height: verticalScale(12),
    marginRight: scale(4),
  },

  locationText: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight500,
    color: color.textContrast,
  },

  timeText: {
    fontSize: fontSize.fontSize_10,
    fontFamily: fontFamily.weight400,
    color: color.booking.meta,
    marginTop: verticalScale(4),
  },

  /* 🔹 Badge */
  badge: {
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    borderRadius: scale(6),
  },

  completedBadge: {
    backgroundColor: color.completedLinearBg,
  },

  pendingBadge: {
    backgroundColor: color.notStartedLinearBg,
  },

  completedBadgeText: {
    color: color.success,
  },

  pendingBadgeText: {
    color: color.notStartedBadgeText,
  },

  badgeText: {
    fontSize: fontSize.fontSize_10,
    fontFamily: fontFamily.weight500,
  },
});
