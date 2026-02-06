import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CommonActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

import { AysncStorageHelper } from '@AsyncStoreHelper';
import { Utils } from '@Utils';

/**
 * Common navigation helper class
 */
export default class Navigator {
  static setDashboardAsRoot(
    navigation: NavigationProp<ParamListBase>,
    dashboardIndex?: number,
  ) {
    navigation.dispatch(
      CommonActions.reset({
        index: dashboardIndex ?? 0,
        routes: [{ name: 'BottomTabStack' }],
      }),
    );
  }

  static setDashboardAsRootFromAppCategory(
    navigation: NavigationProp<ParamListBase>,
    dashboardIndex: number,
    tabName: string,
  ) {
    navigation.dispatch(
      CommonActions.reset({
        index: dashboardIndex,
        routes: [
          {
            name: 'BottomTabStack',
            state: {
              routes: [{ name: tabName }],
            },
          },
        ],
      }),
    );
  }

  static showUserStack(navigation: NavigationProp<ParamListBase>) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'UserHomeStack' }],
      }),
    );
  }

  static replaceScreen(
    navigation: any,
    routeName: string,
    params?: object,
  ) {
    navigation.replace(routeName as never, params as never);
  }

  static goToTab(
    navigation: any,
    tabName: string,
    routeName?: string,
    params?: object,
  ) {
    navigation.navigate(tabName as never, {
      screen: routeName,
      params,
    } as never);
  }

  static goBack(navigation: NavigationProp<ParamListBase>) {
    navigation.goBack();
  }

  static pushScreen(
    navigation: any,
    routeName: string,
    params?: object,
  ) {
    navigation.navigate(routeName as never, params as never);
  }

  /**
   * Go back N screens in stack
   */
  static goBackToScreen(
    navigation: any,
    howManyScreenBack: number,
  ) {
    navigation.pop(howManyScreenBack);
  }

  static goToTopInStack(navigation: any) {
    navigation.popToTop();
  }

  static
    (
      navigation: NavigationProp<ParamListBase>,
      routeName: string,
      params?: object,
    ) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routeName, params }],
      }),
    );
  }

  static showModal(
    navigation: any,
    routeName: string,
    params?: object,
  ) {
    navigation.navigate(routeName as never, params as never);
  }

  static showMessage(
    message: string,
    navigation: any,
    onViewed?: () => void,
    subMessage?: string,
  ) {
    let viewed = false;

    const data = {
      message,
      subMessage,
      onViewed: async () => {
        if (viewed) {
          return;
        }
        viewed = true;

        onViewed ? onViewed() : navigation.goBack();

        if (Utils.loggedInUser?.logout) {
          if (Utils.loggedInUser?.isRemember) {
            const userData = { email: Utils.loggedInUser?.email };
            Utils.loggedInUser = undefined;
            await AsyncStorage.clear();
            AysncStorageHelper.setUserData(userData);
          } else {
            await AsyncStorage.clear();
            Utils.loggedInUser = undefined;
          }

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'LoginStack' }],
            }),
          );
        }
      },
    };

    navigation.navigate('MessageSheet' as never, { data } as never);
  }

  static dismissModal(navigation: NavigationProp<ParamListBase>) {
    navigation.goBack();
  }

  static showDrawer(navigation: any) {
    navigation.openDrawer();
  }

  static hideDrawer(navigation: any) {
    navigation.closeDrawer();
  }

  static switchToRootTab(
    navigation: any,
    screenName: string,
    params?: object,
  ) {
    navigation.navigate(
      'BottomTabStack' as never,
      { screen: screenName, params } as never,
    );
  }
  static resetStackScreen(
    navigation: any,
    routeName: string,
    params?: object,
  ) {
    navigation.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: routeName, params }] }),
    );
  }
}
