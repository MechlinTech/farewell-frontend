import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import Base from '../../../components/Base';
import color from '@color';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';

import ImageComponent from '@components/ImageComponent';
import images from '@images';
import PackagesItem from './components/PackagesItem';
import Navigator from '@Navigator';

const CustomerHome = ({ navigation }: any) => {
  const recentPackages = [
    {
      id: 1,
      bookingId: 'ORDB1234',
      location: 'California - FedEx',
      time: '12 January 2020, 2:43pm',
      status: 'COMPLETED',
    },
    {
      id: 2,
      bookingId: 'ORDB1234',
      location: 'Maryland bustop - BlueDart',
      time: '12 January 2020, 2:43pm',
      status: 'COMPLETED',
    },
    {
      id: 3,
      bookingId: 'ORDB1234',
      location: 'California - FedEx',
      time: '12 January 2020, 2:43pm',
      status: 'COMPLETED',
    },
    {
      id: 4,
      bookingId: 'ORDB1234',
      location: 'Maryland bustop - BlueDart',
      time: '12 January 2020, 2:43pm',
      status: 'COMPLETED',
    },
  ];

  return (
    <Base backgroundColor={color.background} fullScreenMode container_style={styles.container}>
      {/* Location */}
      <View style={styles.locationRow}>
        <View style={styles.locationLeft}>
          <View style={styles.locationIconBox}>
            <ImageComponent
              source={images.location}
              style={styles.locationIcon}
            />
          </View>

          <Pressable onPress={() => {
            Navigator.pushScreen(navigation, 'SavedAddress');
          }}>
            <Text style={styles.locationLabel}>
              Your Location
            </Text>

            <Text style={styles.locationText} ellipsizeMode='tail' numberOfLines={1}>
              2972 Westheimer, California
            </Text>
          </Pressable>
        </View>

        <TouchableOpacity style={styles.avatarBox} onPress={() => {
          Navigator.switchToCustomerRootTab(navigation, 'Profile');
        }}>
          <Text style={styles.avatarText}>
            JS
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // paddingBottom: verticalScale(40), // optional bottom space
        }}
      >

        {/* Pickup Right Now */}
        <TouchableOpacity style={styles.pickupCardPrimary}
          onPress={() => {
            Navigator.pushScreen(navigation, 'InstantDelivery');
          }}
        >
          <View style={styles.pickupRow}>

            <ImageComponent
              source={images.spark}
              style={styles.pickupIcon}
            />

            <View style={styles.pickupTextBox}>
              <Text style={styles.pickupTitlePrimary}>
                Pickup Right Now
              </Text>

              <Text style={styles.pickupDescPrimary}>
                Rider takes your package and delivers instantly
              </Text>
            </View>

            <ImageComponent
              source={images.forwardArrow}
              style={styles.pickupArrowPrimary}
            />
          </View>
        </TouchableOpacity>

        {/* Schedule Pickup */}
        <TouchableOpacity
          onPress={() => {
            Navigator.pushScreen(navigation, 'ScheduleDelivery');
          }}
          style={styles.pickupCardSecondary}>
          <View style={styles.pickupRow}>

            <ImageComponent
              source={images.time}
              style={styles.pickupIconSecondary}
            />

            <View style={styles.pickupTextBox}>
              <Text style={styles.pickupTitleSecondary}>
                Schedule a Pickup
              </Text>

              <Text style={styles.pickupDescSecondary}>
                Rider comes to pick up on your specified date and time
              </Text>
            </View>

            <ImageComponent
              source={images.forwardArrow}
              style={styles.pickupArrowSecondary}
            />
          </View>
        </TouchableOpacity>

        {/* Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Recent Packages
          </Text>

          <Text style={styles.viewAll} onPress={() => {
            Navigator.switchToCustomerRootTab(navigation, 'History');
          }}>
            View all
          </Text>
        </View>

        {recentPackages.map((item: any) => (
          <PackagesItem
            key={item.id}
            navigation={navigation}
            item={item}
          />
        ))}
      </ScrollView>
    </Base>
  );
};

export default CustomerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(32),
  },

  /* Location */

  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: verticalScale(20),
    paddingBottom: verticalScale(8),
  },

  locationLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(10),
  },

  locationIconBox: {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(10),
    backgroundColor: color.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },

  locationIcon: {
    width: scale(18),
    height: scale(18),
  },

  locationLabel: {
    fontSize: fontSize.fontSize_12,
    color: color.textSecondary,
    fontFamily: fontFamily.weight400,
  },

  locationText: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.Heavy,
    color: color.text,
    marginTop: verticalScale(7),
    width: '98%',
  },

  avatarBox: {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(10),
    backgroundColor: color.primary, // same as design
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight600,
    color: color.textMain,
  },

  /* Pickup */

  /* Pickup Cards */

  pickupCardPrimary: {
    backgroundColor: color.primary,
    borderRadius: scale(14),
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(16),
    marginTop: verticalScale(34),
  },

  pickupCardSecondary: {
    backgroundColor: color.primaryMuted,
    borderRadius: scale(14),
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(16),
    marginTop: verticalScale(16),
  },

  pickupRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  pickupIcon: {
    width: scale(22),
    height: scale(26),
    marginRight: scale(22),
  },

  pickupIconSecondary: {
    width: scale(24),
    height: scale(28),
    marginRight: scale(18),
  },

  pickupTextBox: {
    flex: 1,
  },

  /* Primary Text */

  pickupTitlePrimary: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight800,
    color: color.textContrast,
  },

  pickupDescPrimary: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
    color: color.textContrast,
    opacity: 0.9,
    marginTop: verticalScale(4),
    lineHeight: verticalScale(16),
    width: '97%',

  },

  pickupArrowPrimary: {
    width: scale(14),
    height: verticalScale(14),
    tintColor: color.textContrast,
  },

  /* Secondary Text */

  pickupTitleSecondary: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight800,
    color: color.textContrast,
  },

  pickupDescSecondary: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
    color: color.textContrast,
    opacity: 0.9,
    marginTop: verticalScale(4),
    lineHeight: verticalScale(16),
    width: '97%',
  },

  pickupArrowSecondary: {
    width: scale(14),
    height: verticalScale(14),
    tintColor: color.textContrast,
  },

  /* Section */

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(15),
    marginTop: verticalScale(24),
  },

  sectionTitle: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight800,
    color: color.textMain,
  },

  viewAll: {
    fontSize: fontSize.fontSize_12,
    color: color.textAccent,
    fontFamily: fontFamily.weight500,
  },
});
