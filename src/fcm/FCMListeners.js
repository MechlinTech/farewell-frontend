import messaging from '@react-native-firebase/messaging';
import NotificationUtil from '../utils/NotificationUtil';


let lastMessageId = null;

export function registerNotificationListener() {
  messaging().onMessage(async remoteMessage => {
    const messageId = remoteMessage?.messageId || JSON.stringify(remoteMessage); // Use messageId or fallback
    if (messageId === lastMessageId) {
      console.log('Duplicate message, skipping...');
      return; // Skip if it's a duplicate
    }

    console.log('This is new message123', remoteMessage);
    NotificationUtil.showLocalNotification(
      remoteMessage?.notification,
      remoteMessage?.data,
    );
    lastMessageId = messageId; // Store the last processed message ID
  });
}
