// import I18n from 'react-native-i18n';
import { Keyboard, Linking, Platform, View } from 'react-native';
import LoadingView from './loadingView';
import messaging from '@react-native-firebase/messaging';
import Navigator from './Navigator';
import { EventType } from '@notifee/react-native';
import notifee from '@notifee/react-native';
import { showFlashMessage } from '@components/showFlashMessage';

export class Utils {
  static isLive = false;
  static loggedInUser;
  static notification_count = 0;
  static currentCourse = undefined;

  static dismissKeyword() {
    Keyboard.dismiss();
  }

  static showLoading(isLoading) {
    return isLoading ? (
      <LoadingView style={{}} isLoading={isLoading} />
    ) : (
      <View />
    );
  }

  static pushNotification = navigation => {
    notifee.onForegroundEvent(({ type, detail }) => {
      const data = detail?.notification?.data;
      console.log('fore4311331213', data, type, detail);

      if (
        data?.id &&
        data?.notificationType === 'enquiry' &&
        type === EventType?.PRESS
      ) {
        Navigator.pushScreen(navigation, 'EnquiryDetail', {
          id: data?.id,
        });
      }
    });
    notifee.onBackgroundEvent(async ({ type, detail }) => {
      console.log('detail412342143423', type, detail);

      if (detail?.notification?.data) {
        const pressAction = detail.notification.data;
        if (
          pressAction?.id &&
          pressAction?.notificationType === 'enquiry' &&
          type === EventType.PRESS
        ) {
          // Navigate to the EnquiryDetail screen
          // Ensure that navigation is called in a way that is compatible with your navigation setup
          Navigator.pushScreen(navigation, 'EnquiryDetail', {
            id: pressAction?.id,
          });
        }
      }
    });
  };

  static getNotificationToken = async () => {
    let token;
    await messaging().registerDeviceForRemoteMessages();
    await messaging()
      .getToken()
      .then(i => {
        console.log('pushNotificationToken', i);
        token = i;
      });
    console.log('pushNotificationToken token', token);
  };

  static makePhoneCall = phoneNumber => {
    if (!phoneNumber) {
      console.log('Phone number missing');
      return;
    }

    const url =
      Platform.OS === 'ios' ? `telprompt:${phoneNumber}` : `tel:${phoneNumber}`;

    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          showFlashMessage('Unable to open dialer');
        }
      })
      .catch(err => console.log('Call error:', err));
  };
}
