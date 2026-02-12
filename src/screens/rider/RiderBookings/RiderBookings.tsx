import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import color from '@color';
import BaseWrapper from '@components/Base';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';

import RiderBookingCard from './components/RiderBookingCard';
import InProgressBookingCard from './components/InProgressBookingCard';
import { useFocusEffect } from '@react-navigation/native';

const RiderBookings = () => {
  useFocusEffect(
    React.useCallback(() => {
      // /* Reset pages */
      // setInProgressPage(1);
      // setCompletedPage(1);

      // /* Reset lists */
      // setInProgressList([]);
      // setCompletedList([]);

      /* Optional → refetch API */
      // fetchInProgress();
      // fetchCompleted();

      return () => {
        // cleanup if needed
      };
    }, []),
  );

  /* ---------------- ACTIVE TAB ---------------- */

  const [activeTab, setActiveTab] = React.useState<'IN_PROGRESS' | 'COMPLETED'>(
    'IN_PROGRESS',
  );

  /* ---------------- IN PROGRESS ---------------- */

  const [inProgressPage, setInProgressPage] = React.useState(1);

  const [inProgressList, setInProgressList] = React.useState<any[]>([
    {
      id: 1,
      bookingId: 'Booking1234',
      location: 'California - FedEx',
      status: 'IN_PROGRESS',
      address: 'Abc street, California',
      pickedAt: '4:00pm',
    },
    {
      id: 2,
      bookingId: 'Booking5678',
      location: 'Texas - DHL',
      status: 'IN_PROGRESS',
      address: 'Sunset Blvd, Texas',
      pickedAt: '3:15pm',
    },
    {
      id: 3,
      bookingId: 'Booking2222',
      location: 'California - FedEx',
      time: 'Today, 2:43pm',
      status: 'NOT_STARTED',
      address: 'Abc street, California',
      pickedAt: '4:00pm',
    },
  ]);

  /* ---------------- COMPLETED ---------------- */

  const [completedPage, setCompletedPage] = React.useState(1);

  const [completedList, setCompletedList] = React.useState<any[]>([
    {
      id: 101,
      bookingId: 'Booking9001',
      location: 'New York - FedEx',
      time: '12 Jan 2026, 2:43pm',
      status: 'COMPLETED',
    },
    {
      id: 102,
      bookingId: 'Booking9002',
      location: 'Chicago - DHL',
      time: '10 Jan 2026, 11:20am',
      status: 'COMPLETED',
    },
    {
      id: 103,
      bookingId: 'Booking9003',
      location: 'Florida - UPS',
      time: '08 Jan 2026, 9:10am',
      status: 'COMPLETED',
    },
  ]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setInProgressList([]);
      setCompletedList([]);
      setInProgressPage(1);
      setCompletedPage(1);

      setRefreshing(false);
    }, 1000);
  };

  /* ---------------- PAGINATION ---------------- */

  const loadMoreInProgress = () => {
    setInProgressPage(prev => prev + 1);

    setInProgressList(prev => [
      ...prev,
      {
        id: Math.random(),
        bookingId: `BookingNEW-${inProgressPage}`,
        location: 'Arizona - DHL',
        status: 'IN_PROGRESS',
        address: 'Main street, Arizona',
        pickedAt: '5:30pm',
      },
    ]);
  };

  const loadMoreCompleted = () => {
    setCompletedPage(prev => prev + 1);

    setCompletedList(prev => [
      ...prev,
      {
        id: Math.random(),
        bookingId: `BookingDONE-${completedPage}`,
        location: 'Boston - FedEx',
        time: 'Yesterday',
        status: 'COMPLETED',
      },
    ]);
  };

  const EmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No Deliveries Found</Text>

      <Text style={styles.emptySubtitle}>
        {activeTab === 'IN_PROGRESS'
          ? 'You have no active deliveries right now.'
          : 'No deliveries completed yet.'}
      </Text>
    </View>
  );

  /* ---------------- TABS ---------------- */

  const TabSection = React.useMemo(
    () => (
      <View
        style={[
          styles.tabContainer,
          {
            marginBottom:
              activeTab === 'IN_PROGRESS'
                ? verticalScale(26)
                : verticalScale(36),
          },
        ]}
      >
        {['IN_PROGRESS', 'COMPLETED'].map(tab => {
          const isActive = activeTab === tab;

          return (
            <TouchableOpacity
              key={tab}
              style={[styles.tabBtn, isActive && styles.activeTab]}
              onPress={() => setActiveTab(tab as any)}
            >
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {tab === 'IN_PROGRESS' ? 'In Progress' : 'Completed'}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    ),
    [activeTab],
  );

  return (
    <BaseWrapper backgroundColor={color.background} fullScreenMode>
      <View style={styles.container}>
        <Text style={styles.title}>Deliveries</Text>

        {TabSection}

        <FlatList
          data={activeTab === 'IN_PROGRESS' ? inProgressList : completedList}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: verticalScale(26),
              }}
            />
          )}
          ListEmptyComponent={EmptyList}
          contentContainerStyle={{
            paddingBottom: verticalScale(40),
            flexGrow: 1, // important for center empty
          }}
          renderItem={({ item }) =>
            item.status === 'IN_PROGRESS' ? (
              <InProgressBookingCard item={item} />
            ) : (
              <RiderBookingCard item={item} />
            )
          }
          refreshing={refreshing}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </BaseWrapper>
  );
};

export default RiderBookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(26),
  },

  title: {
    fontSize: fontSize.fontSize_20,
    fontFamily: fontFamily.Heavy,
    marginTop: verticalScale(26),
    color: color.textMain,
    lineHeight: verticalScale(20),
  },

  /* Tabs */

  tabContainer: {
    flexDirection: 'row',
    backgroundColor: color.primaryMuted,
    borderRadius: scale(10),
    marginTop: verticalScale(32),
  },

  tabBtn: {
    flex: 1,
    borderRadius: scale(10),
    alignItems: 'center',
    height: verticalScale(56),
    justifyContent: 'center',
  },

  activeTab: {
    backgroundColor: color.primary,
  },

  tabText: {
    fontSize: fontSize.fontSize_16,
    color: color.deliveryInactive,
    fontFamily: fontFamily.Heavy,
  },

  activeTabText: {
    color: color.textContrast,
  },

  /* List */

  listSpacing: {
    marginTop: verticalScale(36),
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: verticalScale(80),
  },

  emptyTitle: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight600,
    color: color.textMain,
  },

  emptySubtitle: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
    color: color.textSecondary,
    marginTop: verticalScale(6),
    textAlign: 'center',
    paddingHorizontal: scale(40),
  },
});
