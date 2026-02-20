import {
  CommonActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';


/**
 * Common navigation helper class
 */
export default class Navigator {
  static setCustomerDashboardAsRoot(
    navigation: NavigationProp<ParamListBase>,
    dashboardIndex?: number,
  ) {
    navigation.dispatch(
      CommonActions.reset({
        index: dashboardIndex ?? 0,
        routes: [{ name: 'CustomerBottomTabStack' }],
      }),
    );
  }

  static setRiderDashboardAsRoot(
    navigation: NavigationProp<ParamListBase>,
    dashboardIndex?: number,
  ) {
    navigation.dispatch(
      CommonActions.reset({
        index: dashboardIndex ?? 0,
        routes: [{ name: 'RiderBottomTabStack' }],
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
    navigation.navigate(tabName, {
      screen: routeName,
      params: params,
    });
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

  static goBackToScreen(
    navigation: any,
    howManyScreenBack: number,
  ) {
    navigation.pop(howManyScreenBack);
  }

  static goToTopInStack(navigation: any) {
    navigation.popToTop();
  }

  static showModal(
    navigation: any,
    routeName: string,
    params?: object,
  ) {
    navigation.navigate(routeName as never, params as never);
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

  static switchToCustomerRootTab(
    navigation: any,
    screenName: string,
    params?: object,
  ) {
    navigation.navigate(
      'CustomerBottomTabStack' as never,
      { screen: screenName, params } as never,
    );
  }

  static switchToRiderRootTab(
    navigation: any,
    screenName: string,
    params?: object,
  ) {
    navigation.navigate(
      'RiderBottomTabStack' as never,
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
