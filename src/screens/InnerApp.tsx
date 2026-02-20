import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Utils } from '@Utils';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';
import color from '@color';
import { AysncStorageHelper } from '@AsyncStoreHelper';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { navigationRef } from '@redux/NavigationService';
import LoginScreen from './login/LoginScreen/LoginScreen';
import SignupScreen from './login/SignupScreen/SignupScreen';
import ForgotPasswordScreen from './login/ForgotPassword/ForgotPassword';
import OTPVerificationScreen from './login/OTPVerificationScreen/OTPVerificationScreen';
import AddVehicleDetails from './login/AddVehicleDetails/AddVehicleDetails';
import PrivacyPolicyScreen from './shared/PrivacyPolicy/PrivacyPolicy';
import CurrentLocationDetails from './customer/CurrentLocationDetails/CurrentLocationDetails';
import Toast, { toastConfig } from 'components/showFlashMessage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import images from '@images';
import CustomerHome from './customer/CustomerHome/CustomerHome';
import CustomerHistory from './customer/CustomerHistory/CustomerHistory';
import CustomerProfile from './customer/CustomerProfile/CustomerProfile';
import RiderHome from './rider/RiderHome/RiderHome';
import RiderProfile from './rider/RiderProfile/RiderProfile';
import RiderBookings from './rider/RiderBookings/RiderBookings';
import { scale, verticalScale } from '@scale';
import ImageComponent from '@components/ImageComponent';
import { fontFamily, fontSize } from '@constants';
import TermsAndConditionsScreen from './shared/TermsAndConditions/TermsAndConditions';
import ChangePassword from './shared/ChangePassword/ChangePassword';
import RiderSettings from './rider/RiderSettings/RiderSettings';
import ContactUs from './shared/Contact/Contact';
import DropOffPackage from './rider/DropoffPackage/DropOffPackage';
import AddBankDetails from './shared/BankDetails/AddBankDetails';
import InstantDelivery from './customer/InstantDelivery/InstantDelivery';
import ScheduleDelivery from './customer/ScheduleDelivery/ScheduleDelivery';
import FAQScreen from './shared/FAQScreen/FAQScreen';
import Vehicles from './rider/Vehicles/Vehicles';
import NotificationSettings from './shared/NotificationSettings/NotificationSettings';
import VehicleDetails from './rider/VehicleDetails/VehicleDetails';
import RiderDeliveryDetails from './rider/RiderDeliveryDetails/RiderDeliveryDetails';
import CustomerDeliveryDetails from './customer/CustomerDeliveryDetails/CustomerDeliveryDetails';
import CustomerSettings from './customer/CustomerSettings/CustomerSettings';
import SavedAddress from './customer/SavedAddress/SavedAddress';
import CustomerCurrentLocation from './customer/CustomerCurrentLocation/CustomerCurrentLocation';
import Navigator from '@Navigator';
import RiderEarnings from './rider/RiderEarnings/RiderEarnings';

const Stack = createNativeStackNavigator();

const Tab: any = createBottomTabNavigator();

const CustomerScreenIcons: Record<string, { active: any }> = {
  CUSTOMERHOME: {
    active: images.home,
  },
  CUSTOMERHISTORY: {
    active: images.calendar,
  },
  CUSTOMERPROFILE: {
    active: images.profile,
  },
};

//Define screens & map icons explicitly
const CustomerTabs = [
  {
    key: 'CustomerHome',
    name: 'CustomerHome',
    component: CustomerHome,
    label: 'Home',
  },
  {
    key: 'CustomerHistory',
    name: 'CustomerHistory',
    component: CustomerHistory,
    label: 'History',
  },
  {
    key: 'CustomerProfile',
    name: 'CustomerProfile',
    component: CustomerProfile,
    label: 'Profile',
  },
];

function CustomerBottomTabStack() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props: any) => <CustomCustomerBottomTab {...props} />}
    >
      {CustomerTabs.map(tab => (
        <Tab.Screen key={tab.key} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}

function CustomCustomerBottomTab({ state, navigation }: any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: color.background,
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: -2 },
        shadowRadius: 5,
        paddingTop: verticalScale(21),
        paddingBottom: verticalScale(10),
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        // Get tab config
        const tabConfig = CustomerTabs.find(tab => tab.name === route.name);

        // Get icon
        const tabIcon =
          tabConfig && CustomerScreenIcons[tabConfig.name.toUpperCase()];

        const onPress = () => {
          if (!isFocused) Navigator.pushScreen(navigation, route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.7}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Icon */}
            <ImageComponent
              source={tabIcon?.active}
              resizeMode="contain"
              style={{
                width: scale(18),
                height: verticalScale(18),
              }}
              tintColor={isFocused ? color.primary : color.tabInactive}
            />

            {/* Label */}
            <Text
              style={{
                color: isFocused ? color.textContrast : color.tabInactive,
                fontSize: fontSize.fontSize_10,
                fontFamily: fontFamily.Medium,
                fontWeight: isFocused ? 'bold' : 'normal',
                marginTop: verticalScale(12),
              }}
            >
              {tabConfig?.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const RiderScreenIcons: Record<string, { active: any }> = {
  RIDERHOME: {
    active: images.home,
  },
  RIDERBOOKINGS: {
    active: images.calendar,
  },
  RIDERPROFILE: {
    active: images.profile,
  },
};

const RiderTabs = [
  {
    key: 'RiderHome',
    name: 'RiderHome',
    component: RiderHome,
    label: 'Home',
  },
  {
    key: 'RiderBookings',
    name: 'RiderBookings',
    component: RiderBookings,
    label: 'Bookings',
  },
  {
    key: 'RiderProfile',
    name: 'RiderProfile',
    component: RiderProfile,
    label: 'Profile',
  },
];

function RiderBottomTabStack() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props: any) => <CustomRiderBottomTab {...props} />}
    >
      {RiderTabs.map(tab => (
        <Tab.Screen key={tab.key} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}

function CustomRiderBottomTab({ state, navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: color.background,
        justifyContent: 'space-around',
        alignItems: 'center',

        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: -2 },
        shadowRadius: 5,
        paddingTop: verticalScale(21),
        paddingBottom: verticalScale(10),
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        // 🔹 Get tab config
        const tabConfig = RiderTabs.find(tab => tab.name === route.name);

        // 🔹 Get icon
        const tabIcon = tabConfig
          ? RiderScreenIcons[tabConfig.name.toUpperCase()]
          : null;

        const onPress = () => {
          if (!isFocused) Navigator.pushScreen(navigation, route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.7}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Icon */}
            <ImageComponent
              source={tabIcon?.active}
              resizeMode="contain"
              style={{
                width: scale(18),
                height: verticalScale(18),
              }}
              tintColor={isFocused ? color.primary : color.tabInactive}
            />

            {/* Label */}
            <Text
              style={{
                color: isFocused ? color.textContrast : color.tabInactive,
                fontSize: fontSize.fontSize_10,
                fontFamily: fontFamily.Medium,
                fontWeight: isFocused ? 'bold' : 'normal',
                marginTop: verticalScale(10),
              }}
            >
              {tabConfig?.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function LoginStack() {
  return (
    <React.Suspense>
      <Stack.Navigator id="LoginStack">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddVehicleDetails"
          component={AddVehicleDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPVerificationScreen"
          component={OTPVerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="CustomerCurrentLocation"
          component={CustomerCurrentLocation}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TermsAndConditionsScreen"
          component={TermsAndConditionsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </React.Suspense>
  );
}

function RiderHomeStack() {
  let navigation = useNavigation();

  // const handledNotificationRef: any = useRef<string | null>(null);

  // useEffect(() => {
  //   // App killed → user taps notification (only once)
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (
  //         remoteMessage &&
  //         Utils.loggedInUser?.token &&
  //         remoteMessage.messageId !== handledNotificationRef.current
  //       ) {
  //         handledNotificationRef.current = remoteMessage.messageId;
  //         Navigator.switchToRootTab(navigation, 'MESSAGES', {});
  //       }
  //     });

  //   // App in background → user taps notification
  //   const unsubscribeBackground = messaging().onNotificationOpenedApp(
  //     remoteMessage => {
  //       if (
  //         remoteMessage &&
  //         Utils.loggedInUser?.token &&
  //         remoteMessage.messageId !== handledNotificationRef.current
  //       ) {
  //         handledNotificationRef.current = remoteMessage.messageId;
  //         Navigator.switchToRootTab(navigation, 'MESSAGES', {});
  //       }
  //     },
  //   );

  //   // Foreground / background notification press using Notifee
  //   const unsubscribeForegroundEvent = notifee.onForegroundEvent(
  //     ({ type, detail }: any) => {
  //       if (
  //         type === EventType.PRESS &&
  //         Utils.loggedInUser?.token &&
  //         detail.notification?.id !== handledNotificationRef.current
  //       ) {
  //         handledNotificationRef.current = detail.notification.id;
  //         Navigator.switchToRootTab(navigation, 'MESSAGES', {});
  //       }
  //     },
  //   );

  //   const unsubscribeBackgroundEvent = notifee.onBackgroundEvent(
  //     async ({ type, detail }: any) => {
  //       if (
  //         type === EventType.PRESS &&
  //         Utils.loggedInUser?.token &&
  //         detail.notification?.id !== handledNotificationRef.current
  //       ) {
  //         handledNotificationRef.current = detail.notification.id;
  //         Navigator.switchToRootTab(navigation, 'MESSAGES', {});
  //       }
  //     },
  //   );

  //   return () => {
  //     unsubscribeBackground();
  //     unsubscribeForegroundEvent();
  //     unsubscribeBackgroundEvent;
  //     handledNotificationRef.current = null; // clear on unmount
  //   };
  // }, [navigation]);

  return (
    <React.Suspense>
      <Stack.Navigator id="RiderHomeStack">
        <Stack.Screen
          name="RiderBottomTabStack"
          component={RiderBottomTabStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TermsAndConditionsScreen"
          component={TermsAndConditionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FAQScreen"
          component={FAQScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VehicleDetails"
          component={VehicleDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RiderEarnings"
          component={RiderEarnings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationSettings"
          component={NotificationSettings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RiderDeliveryDetails"
          component={RiderDeliveryDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TermsAndConditionsScreen"
          component={TermsAndConditionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RiderSettings"
          component={RiderSettings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vehicles"
          component={Vehicles}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddBankDetails"
          component={AddBankDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DropOffPackage"
          component={DropOffPackage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </React.Suspense>
  );
}

function CustomerHomeStack() {
  let navigation = useNavigation();

  // const handledNotificationRef: any = useRef<string | null>(null);

  // useEffect(() => {
  //   // App killed → user taps notification (only once)
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (
  //         remoteMessage &&
  //         Utils.loggedInUser?.token &&
  //         remoteMessage.messageId !== handledNotificationRef.current
  //       ) {
  //         handledNotificationRef.current = remoteMessage.messageId;
  //         Navigator.switchToRootTab(navigation, 'MESSAGES', {});
  //       }
  //     });

  //   // App in background → user taps notification
  //   const unsubscribeBackground = messaging().onNotificationOpenedApp(
  //     remoteMessage => {
  //       if (
  //         remoteMessage &&
  //         Utils.loggedInUser?.token &&
  //         remoteMessage.messageId !== handledNotificationRef.current
  //       ) {
  //         handledNotificationRef.current = remoteMessage.messageId;
  //         Navigator.switchToRootTab(navigation, 'MESSAGES', {});
  //       }
  //     },
  //   );

  //   // Foreground / background notification press using Notifee
  //   const unsubscribeForegroundEvent = notifee.onForegroundEvent(
  //     ({ type, detail }: any) => {
  //       if (
  //         type === EventType.PRESS &&
  //         Utils.loggedInUser?.token &&
  //         detail.notification?.id !== handledNotificationRef.current
  //       ) {
  //         handledNotificationRef.current = detail.notification.id;
  //         Navigator.switchToRootTab(navigation, 'MESSAGES', {});
  //       }
  //     },
  //   );

  //   const unsubscribeBackgroundEvent = notifee.onBackgroundEvent(
  //     async ({ type, detail }: any) => {
  //       if (
  //         type === EventType.PRESS &&
  //         Utils.loggedInUser?.token &&
  //         detail.notification?.id !== handledNotificationRef.current
  //       ) {
  //         handledNotificationRef.current = detail.notification.id;
  //         Navigator.switchToRootTab(navigation, 'MESSAGES', {});
  //       }
  //     },
  //   );

  //   return () => {
  //     unsubscribeBackground();
  //     unsubscribeForegroundEvent();
  //     unsubscribeBackgroundEvent;
  //     handledNotificationRef.current = null; // clear on unmount
  //   };
  // }, [navigation]);

  return (
    <React.Suspense>
      <Stack.Navigator id="CustomerHomeStack">
        <Stack.Screen
          name="CustomerBottomTabStack"
          component={CustomerBottomTabStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScheduleDelivery"
          component={ScheduleDelivery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InstantDelivery"
          component={InstantDelivery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomerDeliveryDetails"
          component={CustomerDeliveryDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FAQScreen"
          component={FAQScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomerSettings"
          component={CustomerSettings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedAddress"
          component={SavedAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomerCurrentLocation"
          component={CustomerCurrentLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CurrentLocationDetails"
          component={CurrentLocationDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </React.Suspense>
  );
}

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
    } catch (error) { }
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

            <Stack.Screen
              name="CustomerHomeStack"
              component={CustomerHomeStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RiderHomeStack"
              component={RiderHomeStack}
              options={{ headerShown: false }}
            />
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
      <Toast config={toastConfig} />
    </View>
  );
};

export default InnerApp;

const styles = StyleSheet.create({});
