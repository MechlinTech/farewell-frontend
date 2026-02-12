import color from '@color';
import Base from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ImageComponent from '@components/ImageComponent';
import images from '@images';
import { scale } from '@scale';
import { verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import { useEffect, useState } from 'react';

const data = {
  todayDate: '12/02/2026',
  balanceAmount: '$400',
  earningsData: [
    {
      id: 1,
      date: '12/02/2026',
      bookingId: 'Booking1234',
      time: '2:43pm',
      location: 'California - FedEx',
      amount: '100',
    },
    {
      id: 2,
      date: '08/02/2026',
      bookingId: 'Booking5678',
      time: '2:43pm',
      location: 'Texas - DHL',
      amount: '50',
    },
    {
      id: 3,
      date: '18/02/2026',
      bookingId: 'Booking91011',
      time: '2:43pm',
      location: 'California - FedEx',
      amount: '100',
    },
    {
      id: 4,
      date: '10/02/2026',
      bookingId: 'Booking121314',
      time: '2:43pm',
      location: 'Texas - DHL',
      amount: '50',
    },
    {
      id: 5,
      date: '10/02/2026',
      bookingId: 'Booking121314',
      time: '2:43pm',
      location: 'Texas - DHL',
      amount: '50',
    },
    {
      id: 6,
      date: '10/02/2026',
      bookingId: 'Booking121314',
      time: '2:43pm',
      location: 'Texas - DHL',
      amount: '50',
    },
    {
      id: 7,
      date: '10/02/2026',
      bookingId: 'Booking121314',
      time: '2:43pm',
      location: 'Texas - DHL',
      amount: '50',
    },
    {
      id: 8,
      date: '10/02/2026',
      bookingId: 'Booking121314',
      time: '2:43pm',
      location: 'Texas - DHL',
      amount: '50',
    },
    {
      id: 9,
      date: '10/02/2026',
      bookingId: 'Booking121314',
      time: '2:43pm',
      location: 'Texas - DHL',
      amount: '50',
    },
  ],
};

const RiderEarnings = ({ navigation }: any) => {
  const [showBalance, setShowBalance] = useState(false);
  const balanceAmount = showBalance ? `${data.balanceAmount}` : '';
  const [earningsData, setEarningsData] = useState<any>([]);

  useEffect(() => {
    setEarningsData(data.earningsData);
  }, []);

  return (
    <Base backgroundColor={color.background} fullScreenMode>
      <CustomToolbar
        title="Earnings"
        showLeftIcon
        navigation={navigation}
        rightIcon={images.filter}
        onRightPress={() => {}}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceDataContainer}>
            <Text style={styles.balanceData}>Current Balance</Text>
            <Text style={styles.balanceData}>As of {data.todayDate}</Text>
          </View>
          <View style={styles.balanceAmountContainer}>
            <Text style={styles.balanceAmount}>{balanceAmount}</Text>
            <ImageComponent
              source={showBalance ? images.hide : images.unhide}
              style={styles.hideIcon}
              onClickImage={() => setShowBalance(!showBalance)}
            />
          </View>
        </View>
        <ScrollView
          style={styles.earningsDataContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
        >
          {earningsData.map((item: any, index: number) => (
            <View style={styles.earningsDataItem}>
              <View style={styles.earningsBookingIdContainer}>
                <Text style={styles.earningsBookingId}>{item.bookingId}</Text>
                <View style={styles.earningsLocationContainer}>
                  <View style={styles.packageIconContainer}>
                    <ImageComponent
                      source={images.package}
                      style={styles.packageIcon}
                    />
                  </View>
                  <View style={styles.earningsLocationDataContainer}>
                    <View style={styles.earningsLocationRow}>
                      <ImageComponent
                        source={images.location}
                        style={styles.locationIcon}
                      />
                      <Text style={styles.earningsLocation}>
                        {item.location}
                      </Text>
                    </View>
                    <Text style={styles.earningsTime}>
                      Delivered, {item.time}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.earningsAmountContainer}>
                <ImageComponent
                  source={images.earningsDollar}
                  style={styles.earningsDollar}
                />
                <Text style={styles.earningsAmount}>{item.amount}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Base>
  );
};

export default RiderEarnings;

const styles = StyleSheet.create({
  filterIcon: {
    width: scale(30),
    height: verticalScale(30),
  },
  balanceContainer: {
    marginHorizontal: scale(28),
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.primaryMuted,
    borderRadius: scale(5),
  },
  balanceDataContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: verticalScale(4),
  },
  balanceData: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
    color: color.textMain,
  },
  balanceAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(16),
    marginRight: scale(8),
  },
  balanceAmount: {
    fontSize: fontSize.fontSize_32,
    fontFamily: fontFamily.weight800,
    color: color.textMain,
  },
  hideIcon: {
    width: scale(20),
    height: verticalScale(20),
  },
  earningsBookingIdContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  earningsDataContainer: {
    flex: 1,
    marginHorizontal: scale(28),
    marginTop: verticalScale(4),
    marginBottom: verticalScale(14),
  },
  earningsBookingId: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight500,
    color: color.booking.title,
    marginBottom: verticalScale(11),
  },
  earningsDataItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: scale(1),
    borderBottomColor: color.border,
    paddingVertical: verticalScale(16),
  },
  earningsLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: verticalScale(4),
  },
  earningsLocationDataContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: verticalScale(4),
  },
  packageIconContainer: {
    width: scale(32),
    height: verticalScale(32),
    borderRadius: scale(5),
    backgroundColor: color.packageBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  packageIcon: {
    width: scale(19),
    height: verticalScale(19),
  },
  earningsLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
  },
  locationIcon: {
    width: scale(11),
    height: verticalScale(11),
  },
  earningsLocation: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
    color: color.textContrast,
  },
  earningsTime: {
    fontSize: fontSize.fontSize_10,
    fontFamily: fontFamily.weight400,
    color: color.booking.meta,
  },
  earningsDollar: {
    width: scale(16),
    height: verticalScale(16),
  },
  earningsAmount: {
    fontSize: fontSize.fontSize_18,
    fontFamily: fontFamily.weight900,
    color: color.booking.title,
  },
  earningsAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(8),
    backgroundColor: color.primaryMuted,
    borderRadius: scale(5),
    // gap: scale(16),
  },
});
