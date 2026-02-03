import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Utils } from '@Utils';
import Navigator from '@Navigator';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';

import color from '@color';
import { AysncStorageHelper } from '@AsyncStoreHelper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import notifee, {
  EventType, // Import EventType if available
} from '@notifee/react-native';
import { navigationRef } from '@redux/NavigationService';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import SignupScreen from './SignupScreen/SignupScreen';
import SelectUserRoleScreen from './SelectUserRoleScreen/SelectUserRoleScreen';

const Stack = createNativeStackNavigator();

// const screenIcons: Record<string, { active: any }> = {
//   HOME: {
//     active: require('@images/Home.webp'),
//   },
//   LEARN: {
//     active: require('@images/Learn.webp'),
//   },
//   ACCOUNT: {
//     active: require('@images/Account.webp'),
//   },
//   MESSAGES: {
//     active: require('@images/Messages.webp'),
//   },
// };

// Define screens & map icons explicitly
// const TABS = [
//   { key: 'home', name: 'HOME', component: Home },
//   { key: 'learn', name: 'LEARN', component: DashboardStack },
//   { key: 'account', name: 'ACCOUNT', component: AccountSettings },
//   { key: 'messages', name: 'MESSAGES', component: Messages },
// ];

// const Tab: any = createBottomTabNavigator();

// function BottomTabStack() {
//   return (
//     <Tab.Navigator
//       screenOptions={{ headerShown: false }}
//       tabBar={(props: any) => <CustomBottomTab {...props} />}
//     >
//       {TABS.map(tab => (
//         <Tab.Screen key={tab.key} name={tab.name} component={tab.component} />
//       ))}
//     </Tab.Navigator>
//   );
// }

// function CustomBottomTab({ state, descriptors, navigation }: any) {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         backgroundColor: color.themeWhite,
//         height:
//           Platform.OS == 'android'
//             ? verticalScale(64)
//             : verticalScale(80),
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         // paddingBottom: verticalScale(10),
//         elevation: 5,
//         shadowColor: '#000',
//         shadowOpacity: 0.05,
//         shadowOffset: { width: 0, height: -2 },
//         shadowRadius: 5,
//         paddingHorizontal: scale(5),
//       }}
//     >
//       {state.routes.map((route: any, index: number) => {
//         const isFocused = state.index === index;

//         // Map the route name to the icon using the TABS array
//         const tabConfig = TABS.find(tab => tab.name === route.name);
//         const tabIcon: any = tabConfig ? screenIcons[tabConfig.name] : null;

//         const onPress = () => {
//           if (!isFocused) navigation.navigate(route.name);
//         };

//         console.log('data3132231', Utils.notification_count);
//         return (
//           <TouchableOpacity
//             key={route.key}
//             onPress={onPress}
//             style={{ justifyContent: 'center', alignItems: 'center' }}
//             activeOpacity={0.7}
//           >
//             {index == 3 && Utils.notification_count > 0 && (
//               <View
//                 style={{
//                   minHeight: scale(14),
//                   minWidth: scale(14),
//                   borderRadius: scale(30),
//                   backgroundColor: color.green,
//                   position: 'absolute',
//                   top: -verticalScale(5),
//                   left: scale(34),
//                   zIndex: 10,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   paddingHorizontal: scale(3),
//                   paddingVertical: scale(1),
//                   flexDirection: 'row',
//                 }}
//               >
//                 {Utils.notification_count > 100 ? (
//                   <>
//                     <Text
//                       style={{
//                         fontSize: fontSize.fontSize_8,
//                         fontFamily: fontFamily.Medium,
//                         color: color.themeWhite,
//                       }}
//                     >
//                       100
//                     </Text>
//                     <Icon
//                       name="plus"
//                       size={scale(6)}
//                       color={color.themeWhite}
//                     />
//                   </>
//                 ) : (
//                   <Text
//                     style={{
//                       fontSize: fontSize.fontSize_8,
//                       fontFamily: fontFamily.Medium,
//                       color: color.themeWhite,
//                     }}
//                   >
//                     {Utils.notification_count}
//                   </Text>
//                 )}
//               </View>
//             )}

//             <ImageComponent
//               source={tabIcon.active}
//               resizeMode="contain"
//               style={{
//                 width: scale(24),
//                 height: scale(24),
//               }}
//               tintColor={isFocused ? color.blue : color.greyPremium}
//             />
//             <Text
//               style={{
//                 color: isFocused ? color.blue : color.greyPremium,
//                 fontSize: fontSize.fontSize_12,
//                 fontFamily: fontFamily.Medium,
//                 fontWeight: isFocused ? 'bold' : 'normal',
//                 marginTop: 3,
//               }}
//             >
//               {route.name}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

function LoginStack() {
  return (
    <React.Suspense>
      <Stack.Navigator id="LoginStack">
        {/* <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="SelectUserRoleScreen"
          component={SelectUserRoleScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </React.Suspense>
  );
}

// function UserHomeStack() {
//   let navigation = useNavigation();

//   const handledNotificationRef: any = useRef<string | null>(null);

//   useEffect(() => {
//     // App killed → user taps notification (only once)
//     messaging()
//       .getInitialNotification()
//       .then(remoteMessage => {
//         if (
//           remoteMessage &&
//           Utils.loggedInUser?.token &&
//           remoteMessage.messageId !== handledNotificationRef.current
//         ) {
//           handledNotificationRef.current = remoteMessage.messageId;
//           Navigator.switchToRootTab(navigation, 'MESSAGES', {});
//         }
//       });

//     // App in background → user taps notification
//     const unsubscribeBackground = messaging().onNotificationOpenedApp(
//       remoteMessage => {
//         if (
//           remoteMessage &&
//           Utils.loggedInUser?.token &&
//           remoteMessage.messageId !== handledNotificationRef.current
//         ) {
//           handledNotificationRef.current = remoteMessage.messageId;
//           Navigator.switchToRootTab(navigation, 'MESSAGES', {});
//         }
//       },
//     );

//     // Foreground / background notification press using Notifee
//     const unsubscribeForegroundEvent = notifee.onForegroundEvent(
//       ({ type, detail }: any) => {
//         if (
//           type === EventType.PRESS &&
//           Utils.loggedInUser?.token &&
//           detail.notification?.id !== handledNotificationRef.current
//         ) {
//           handledNotificationRef.current = detail.notification.id;
//           Navigator.switchToRootTab(navigation, 'MESSAGES', {});
//         }
//       },
//     );

//     const unsubscribeBackgroundEvent = notifee.onBackgroundEvent(
//       async ({ type, detail }: any) => {
//         if (
//           type === EventType.PRESS &&
//           Utils.loggedInUser?.token &&
//           detail.notification?.id !== handledNotificationRef.current
//         ) {
//           handledNotificationRef.current = detail.notification.id;
//           Navigator.switchToRootTab(navigation, 'MESSAGES', {});
//         }
//       },
//     );

//     return () => {
//       unsubscribeBackground();
//       unsubscribeForegroundEvent();
//       unsubscribeBackgroundEvent;
//       handledNotificationRef.current = null; // clear on unmount
//     };
//   }, [navigation]);

//   return (
//     <React.Suspense>
//       <Stack.Navigator id="UserHomeStack">
//         <Stack.Screen
//           name="BottomTabStack"
//           component={BottomTabStack}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </React.Suspense>
//   );
// }

export const checkApplicationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      if (Platform.OS === 'android') {
        if (Platform.Version >= 33) {
          const granted = await PermissionsAndroid.request(
            'android.permission.POST_NOTIFICATIONS',
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Notification permission granted on Android.');
            return true;
          } else {
            return false;
          }
        }
      }
    } catch (error) {}
  } else {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Notification permission granted on iOS:', authStatus);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error requesting iOS notification permission:', error);
    }
  }
};

const MainComp = () => {
  // useEffect(() => {
  //   registerNotificationListener();
  //   checkApplicationPermission();
  // }, []);

  // useEffect(() => {
  //   const handleDeepLink = (event: { url: string }) => {
  //     console.log('Deep link received:', event.url);

  //     if (!navigationRef.isReady()) {
  //       console.log('Navigation not ready yet');
  //       return;
  //     }

  //     if (event.url.includes('/app') && !Utils.loggedInUser) {
  //       navigationRef.reset({
  //         index: 0,
  //         routes: [{ name: 'LoginStack' }],
  //       });
  //     }
  //   };

  //   Linking.getInitialURL().then(url => {
  //     if (url) handleDeepLink({ url });
  //   });

  //   const sub = Linking.addEventListener('url', handleDeepLink);

  //   return () => sub.remove();
  // }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }} edges={['left', 'right', 'bottom']}>
          <Stack.Navigator
            id="RootStack"
            initialRouteName={
              Utils.loggedInUser ? 'UserHomeStack' : 'LoginStack'
            }
          >
            <Stack.Screen
              name="LoginStack"
              component={LoginStack}
              options={{ headerShown: false }}
            />

            {/* <Stack.Screen
              name="UserHomeStack"
              component={UserHomeStack}
              options={{ headerShown: false }}
            /> */}
          </Stack.Navigator>
        </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

const InnerApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isRequesting = useSelector(
    (state: RootState) => state.users.isRequesting,
  );

  useEffect(() => {
    console.log('isRequesting3123', isRequesting);
  }, [isRequesting]);

  useEffect(() => {
    AysncStorageHelper.UserData()
      .then((res: any) => {
        console.log('res341313', res);
        Utils.loggedInUser = res;
        setTimeout(() => SplashScreen.hide(), 1000);
        setIsLoading(false);
      })
      .catch(() => {
        setTimeout(() => SplashScreen.hide(), 1000);
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={color.background} barStyle="dark-content" />
      {!isLoading && <MainComp />}
      {Utils.showLoading(isRequesting ? isRequesting : isLoading)}
    </View>
  );
};

export default InnerApp;

const styles = StyleSheet.create({});
