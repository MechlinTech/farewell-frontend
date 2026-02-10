import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import color from '@color';
import BaseWrapper from '@components/Base';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import RiderBookingCard from './components/RiderBookingCard';

const RiderBookings = ({ navigation }: any) => {
  /* ---------------- ACTIVE TAB ---------------- */

  const [activeTab, setActiveTab] =
    React.useState<'IN_PROGRESS' | 'COMPLETED'>(
      'IN_PROGRESS'
    );

  /* ---------------- IN PROGRESS STATE ---------------- */

  const [inProgressPage, setInProgressPage] =
    React.useState(1);

  const [inProgressList, setInProgressList] =
    React.useState([
      {
        id: 1,
        bookingId: 'Booking1234',
        location: 'California - FedEx',
        time: 'Today, 2:43pm',
        status: 'IN_PROGRESS',
        address: 'Abc street, California',
        pickedAt: '4:00pm',
      },
      {
        id: 2,
        bookingId: 'Booking2222',
        location: 'California - FedEx',
        time: 'Today, 2:43pm',
        status: 'NOT_STARTED',
      },
    ]);

  /* ---------------- COMPLETED STATE ---------------- */

  const [completedPage, setCompletedPage] =
    React.useState(1);

  const [completedList, setCompletedList] =
    React.useState([
      {
        id: 101,
        bookingId: 'Booking9999',
        location: 'California - FedEx',
        time: '12 Jan 2020, 2:43pm',
        status: 'COMPLETED',
      },
    ]);

  /* ---------------- PAGINATION ---------------- */

  const loadMoreInProgress = () => {
    console.log(
      'InProgress page:',
      inProgressPage
    );

    setInProgressPage(prev => prev + 1);

    setInProgressList(prev => [
      ...prev,
      {
        id: Math.random(),
        bookingId: 'BookingNEW',
        location: 'Texas - DHL',
        time: 'Tomorrow',
        status: 'IN_PROGRESS',
      },
    ]);
  };

  const loadMoreCompleted = () => {
    console.log(
      'Completed page:',
      completedPage
    );

    setCompletedPage(prev => prev + 1);

    setCompletedList(prev => [
      ...prev,
      {
        id: Math.random(),
        bookingId: 'BookingDONE',
        location: 'New York',
        time: 'Yesterday',
        status: 'COMPLETED',
      },
    ]);
  };

  /* ---------------- TABS ---------------- */

  const TabSection = () => (
    <View style={styles.tabContainer}>
      {['IN_PROGRESS', 'COMPLETED'].map(tab => {
        const isActive = activeTab === tab;

        return (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabBtn,
              isActive && styles.activeTab,
            ]}
            onPress={() =>
              setActiveTab(tab as any)
            }
          >
            <Text
              style={[
                styles.tabText,
                isActive &&
                styles.activeTabText,
              ]}
            >
              {tab === 'IN_PROGRESS'
                ? 'In Progress'
                : 'Completed'}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  /* ---------------- RENDER ---------------- */

  return (
    <BaseWrapper
      backgroundColor={color.background}
      fullScreenMode
    >
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={
          false
        }
        onScrollEndDrag={() => {
          if (activeTab === 'IN_PROGRESS') {
            loadMoreInProgress();
          } else {
            loadMoreCompleted();
          }
        }}
      >
        <Text style={styles.title}>
          Deliveries
        </Text>

        <TabSection />

        {/* 🔹 IN PROGRESS LIST */}
        {activeTab === 'IN_PROGRESS' &&
          (
            <View style={{ marginTop: verticalScale(28) }}>
              {inProgressList.map((item: any) => (
                <RiderBookingCard
                  key={item.id}
                  item={item}
                />))}
            </View>
          )}

        {/* 🔹 COMPLETED LIST */}
        {activeTab === 'COMPLETED' &&
          <View style={{ marginTop: verticalScale(36) }}>
            {completedList.map((item: any) => (
              <RiderBookingCard
                key={item.id}
                item={item}
              />))}
          </View>
        }
      </ScrollView>
    </BaseWrapper >
  )
};

export default RiderBookings

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
    lineHeight: verticalScale(20)
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

  /* Card */
  card: {
    marginTop: verticalScale(18),
    paddingBottom: verticalScale(14),
    borderBottomWidth: 1,
    borderColor: color.border,
  },

  expandedCard: {
    backgroundColor: '#F7F9FB',
    borderRadius: 12,
    padding: scale(12),
    borderWidth: 1,
    borderColor: color.border,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bookingId: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight600,
    color: color.textMain,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  icon: {
    width: scale(12),
    height: scale(12),
    marginRight: 4,
  },

  location: {
    fontSize: fontSize.fontSize_12,
    color: color.textAccent,
  },

  time: {
    fontSize: fontSize.fontSize_10,
    color: color.textSecondary,
    marginTop: 2,
  },

  badge: {
    backgroundColor: '#D6E6F5',
    paddingHorizontal: scale(8),
    paddingVertical: 4,
    borderRadius: 6,
  },

  completedBadge: {
    backgroundColor: '#DFF3E6',
  },

  pendingBadge: {
    backgroundColor: '#FFE7A3',
  },

  badgeText: {
    fontSize: fontSize.fontSize_10,
    fontFamily: fontFamily.weight500,
  },

  expandedBox: {
    borderTopWidth: 1,
    borderColor: color.border,
    marginTop: verticalScale(10),
    paddingTop: verticalScale(10),
  },

  metaText: {
    fontSize: fontSize.fontSize_11,
    color: color.textSecondary,
  },

  waitingText: {
    marginTop: verticalScale(6),
    fontSize: fontSize.fontSize_11,
    color: color.textSecondary,
  },
});
