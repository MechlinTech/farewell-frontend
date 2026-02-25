import BaseWrapper from 'components/Base';
import * as React from 'react';
import CustomToolbar from 'components/CustomToolbar';
import { scale, verticalScale } from '@scale';
import { StyleSheet, View } from 'react-native';
import images from '@images';
import { CustomNavigationItem } from 'components/CustomNavigationItem';
import Navigator from '@Navigator';

const CustomerSettings = ({ navigation }: any) => {
  return (
    <BaseWrapper>
      <CustomToolbar
        title="Settings"
        onLeftPress={() => navigation.goBack()}
        showLeftIcon
        navigation={navigation}
      />
      <View style={styles.container}>
        <CustomNavigationItem
          title="Change Password"
          icon={images.lockOpen}
          onPress={() => Navigator.pushScreen(navigation, 'ChangePassword')}
        />
        <CustomNavigationItem
          title="Saved Address"
          icon={images.setting}
          onPress={() => Navigator.pushScreen(navigation, 'SavedAddress')}
        />
      </View>
    </BaseWrapper>
  );
};

export default CustomerSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(30),
    gap: verticalScale(20),
  },
});
