import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';
import BottomSheet from '@components/BottomSheetCustom';
import { fontFamily, fontSize } from '@constants';
import color from '@color';
import BaseLine from '@components/BaseLine';
import { scale, verticalScale } from '@scale';
import CustomButton from '@components/CustomButton';
import images from '@images';
import { useState } from 'react';
import LocationBottomSheet from './components/LocationBottomSheet';
import CustomToolbar from '@components/CustomToolbar';
import Navigator from '@Navigator';
import BaseWrapper from '@components/Base';

const customButtonUsage = (
  title: string,
  icon: any,
  onPress: () => void,
  selected: boolean,
) => {
  return (
    <CustomButton
      title={title}
      onPress={onPress}
      icon={icon}
      iconPosition="left"
      height={verticalScale(40)}
      width={scale(100)}
      iconStyle={styles.icon}
      fontSize={fontSize.fontSize_12}
      fontFamily={fontFamily.weight400}
      borderRadius={scale(5)}
      textStyle={{ color: color.overlayText }}
      pressableStyle={styles.buttonPressableStyle}
      containerStyle={
        selected
          ? styles.buttonContainerStyleSelected
          : styles.buttonContainerStyle
      }
      gradientColors={[color.primaryMuted, color.primaryMuted]}
    />
  );
};
export default function CustomerCurrentLocation({ navigation }: any) {
  const [selected, setSelected] = useState('Home');
  return (
    <BaseWrapper backgroundColor="transparent">
      <View style={styles.container}>
        {/* <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          zoomEnabled={true}
          zoomTapEnabled={true}
          zoomControlEnabled={true}
        ></MapView> */}
        <LocationBottomSheet
          // visible={true}
          // onClose={() => {}}
          backdropOpacity={0}
          containerStyle={{
            paddingHorizontal: scale(18),
            paddingVertical: verticalScale(30),
          }}
        >
          <View style={{ marginLeft: scale(10) }}>
            <View style={styles.locationContainer}>
              <Text style={styles.heading}>Current Location</Text>
              <Text style={styles.locationText}>
                2972 Westheimer Rd, California
              </Text>
              <BaseLine style={styles.dividerLine} />
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.addressHeading}>Save As</Text>
              <View style={styles.buttonContainer}>
                {customButtonUsage(
                  'Home',
                  images.homeOutlined,
                  () => {
                    setSelected('Home');
                  },
                  selected === 'Home',
                )}
                {customButtonUsage(
                  'Office',
                  images.briefcaseOutlined,
                  () => {
                    setSelected('Office');
                  },
                  selected === 'Office',
                )}
                {customButtonUsage(
                  'Other',
                  images.locationOutlined,
                  () => {
                    setSelected('Other');
                  },
                  selected === 'Other',
                )}
              </View>
            </View>
            <CustomButton
              title="Continue"
              onPress={() => { }}
              containerStyle={{ marginBottom: verticalScale(22) }}
            />
          </View>
        </LocationBottomSheet>
      </View>
    </BaseWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
  },
  locationContainer: {
    // paddingTop: scale(16),
    paddingBottom: verticalScale(20),
    // paddingHorizontal: scale(13),
    // gap: verticalScale(10),
  },
  heading: {
    fontSize: fontSize.fontSize_22,
    fontFamily: fontFamily.Heavy,
    color: color.location.heading,
    marginBottom: verticalScale(10),
  },
  locationText: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
    color: color.location.locationText,
    marginBottom: verticalScale(6),
  },
  dividerLine: {
    backgroundColor: color.location.dividerLine,
  },
  addressContainer: {
    paddingBottom: verticalScale(22),
    gap: verticalScale(8),
  },
  addressHeading: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
    color: color.location.subHeading,
    // marginLeft: scale(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: scale(13),
    justifyContent: 'space-between',
    // justifyContent: 'space-between',
    // gap: scale(10),
  },
  icon: {
    // width: scale(40),
    // height: verticalScale(40),
  },
  buttonPressableStyle: {
    borderColor: 'red',
    // paddingHorizontal: scale(10),
    // paddingVertical: verticalScale(10),
  },
  buttonContainerStyle: {},
  buttonContainerStyleSelected: {
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: scale(5),
  },
});
