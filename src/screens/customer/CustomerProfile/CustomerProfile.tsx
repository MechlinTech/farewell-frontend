import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  RefreshControl,
} from 'react-native';

import Base from '../../../components/Base';
import color from '@color';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';

import { CustomNavigationItem } from '@components/CustomNavigationItem';
import images from '@images';
import BaseLine from '@components/BaseLine';
import Navigator from '@Navigator';
import LogoutModal from '@components/LogoutModal';
import RNShare from 'react-native-share';

const CustomerProfile = ({ navigation }: any) => {
  const [refreshing, setRefreshing] =
    React.useState(false);
  const [showLogout, setShowLogout] =
    React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1200);
  };

  const shareOptions = () => {
    RNShare.open({
      title: 'Farewell',
      subject: 'Farewell App',
      message: `Farewell App\n\nShare the app with your friends`,
      url: 'https://www.google.com',
    });
  };

  const profileMenus = [
    { id: 1, title: 'Payments', icon: images.credit_card, route: 'CustomerPayments' },
    { id: 5, title: 'Settings', icon: images.setting, route: 'CustomerSettings' },
    { id: 6, title: 'Support/FAQ', icon: images.faq, route: 'FAQScreen' },
    { id: 7, title: 'Invite Friends', icon: images.invitation, },
    { id: 8, title: 'Logout', icon: images.signout },
  ];

  const handleLogout = () => {
    setShowLogout(true);
  };

  return (
    <Base backgroundColor={color.background} fullScreenMode>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              JS
            </Text>
          </View>

          <Text style={styles.userName}>
            Jacob Smith
          </Text>
        </View>

        <BaseLine style={styles.divider} />

        {/* Menu List */}
        {profileMenus.map((item: any) => (
          <View
            key={item.id}
            style={styles.menuItem}
          >
            <CustomNavigationItem
              title={item.title}
              icon={item.icon}
              onPress={() =>
                item.title === 'Logout' ? handleLogout() : item.title === 'Invite Friends' ? shareOptions() : Navigator.pushScreen(navigation, item.route)
              }
            />
          </View>
        ))}
      </ScrollView>

      <LogoutModal
        visible={showLogout}
        onClose={() => setShowLogout(false)}
        onLogout={() => {
          setShowLogout(false);
          Navigator.resetStackScreen(navigation, 'LoginStack');
        }}
      />

    </Base>
  );
};

export default CustomerProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
  },

  /* Header */

  profileHeader: {
    alignItems: 'center',
    marginTop: verticalScale(16),
  },

  avatar: {
    width: scale(124),
    height: scale(124),
    borderRadius: scale(62),
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: fontSize.fontSize_34,
    fontFamily: fontFamily.weight500,
    color: color.textSecondary,
    lineHeight: verticalScale(34),
    marginTop: verticalScale(8),

  },

  userName: {
    marginTop: verticalScale(16),
    fontSize: fontSize.fontSize_18,
    fontFamily: fontFamily.weight500,
    color: color.textMain,
  },

  divider: {
    marginVertical: verticalScale(40),
    backgroundColor: color.profileBorder,
  },

  /* Menu */

  menuItem: {
    paddingVertical: verticalScale(14),
  },
});
