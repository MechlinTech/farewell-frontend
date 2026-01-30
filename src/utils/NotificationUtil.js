import { Platform } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';

async function createChannel() {
  {
    await notifee.createChannel({
      id: 'Farewell',
      name: 'Farewell',
      lights: false,
      vibration: true,
      importance: AndroidImportance.HIGH,
    });
    console.log(`Notification channel Farewell created successfully.`);
  }
}

class NotificationUtil {
  static instance = null;

  constructor() {
    if (NotificationUtil.instance) {
      return NotificationUtil.instance;
    }
    NotificationUtil.instance = this;
  }

  static showLocalNotification = async (body, custom_data) => {
    if (Platform.OS === 'android') {
      await createChannel();
      console.log('Notification data:', body, custom_data);

      await notifee.displayNotification({
        title: body?.title,
        body: body?.body,
        android: {
          channelId: 'farewell',
          pressAction: {
            id: 'default',
          },
        },
        data: custom_data,
      });
    } else if (Platform.OS === 'ios') {
      // Request permissions (required for iOS)
      await notifee.requestPermission({
        alert: true,
        badge: true,
        sound: true, // <-- make sure sound permission is requested
      });

      // Display a notification
      await notifee.displayNotification({
        title: body?.title,
        body: body?.body,
        ios: {
          sound: 'default', // <-- important! plays default iOS sound
        },
        data: custom_data,
      });
    }
  };
}

export default NotificationUtil;
