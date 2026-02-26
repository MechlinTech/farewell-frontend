import color from '@color';
import { scale, verticalScale } from '@scale';
import * as React from 'react';
import {
  
  View,
  
  StyleSheet,
  StyleProp,
  ViewStyle,
 
 
  Text,
  TouchableOpacity,
} from 'react-native';
import ImageComponent from '@components/ImageComponent';

import { fontFamily, fontSize } from '@constants';
import HeadingGroup from '@components/HeadingGroupComponent';
import images from '@images';
import { Utils } from '@Utils';
import Rating from '@components/Rating';
import CustomButton from '@components/CustomButton';
import BaseLine from '@components/BaseLine';

import Navigator from '@Navigator';
import { useNavigation } from '@react-navigation/native';

// state 0: start pickup rider, 1: pickup done, 2: start delivery, 3: completed delivery
interface BottomSheetProps {
  children?: React.ReactNode;
  data: any;
  setData: (data: any) => void;
  containerStyle?: StyleProp<ViewStyle>;
  backdropOpacity?: number;
  borderRadius?: number;
}

const RiderMapBottomSheetContent = ({
  data = {},
  setData,
}: BottomSheetProps) => {
  const { state, distance } = data;
  const navigation = useNavigation();
  const handleStartPickup = () => {
    setData({ ...data, state: 1 });
  };


  const handleDeliverToCourier = () => {
    setData({ ...data, state: 2 });
  };

  const handleCompleteDelivery = () => {
    setData({ ...data, state: 3 });
    Navigator.replaceScreen(navigation, 'RiderHomeStack');
  };

  return state === 0 ? (
    <View style={styles.contentContainer}>
      <HeadingGroup
        heading="Package Owner Details"
        headingStyle={styles.heading}
        subheading={`Package location is ${distance} miles away`}
        subheadingStyle={styles.subheading}
      />
      <BaseLine style={styles.dividerLine} />
      <View style={styles.ownerRow}>
        <View style={styles.avatarBox}>
          <Text style={styles.avatarText}>JS</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.ownerName}>Jacob Smith</Text>

          <Text style={styles.returnText}>24 Returns</Text>

          {/* Rating */}
          <Rating
            rating={4.1}
            count={5}
            size={scale(16)}
            containerStyle={{ marginTop: verticalScale(4) }}
          />
        </View>

        {/* Call */}
        <TouchableOpacity
          style={styles.callBox}
          onPress={() => Utils.makePhoneCall('+1234567890')}
        >
          <ImageComponent source={images.call} style={styles.callIcon} />
        </TouchableOpacity>
      </View>
      <CustomButton title="Start Pickup" onPress={handleStartPickup} />
    </View>
  ) : state === 1 ? (
    <View style={styles.contentContainer}>
      <HeadingGroup
        heading="Arrived at Pickup location"
        headingStyle={styles.heading}
        subheading="Mark pickup done when arrived at pickup location"
        subheadingStyle={styles.subheading}
      />
      <BaseLine style={styles.dividerLine} />
      <View style={styles.buttonContainer}>
        <CustomButton title="Pickup More Packages" onPress={() => {}} />
        <CustomButton
          title="Deliver to Courier"
          onPress={handleDeliverToCourier}
          gradientColors={[color.background, color.background]}
          containerStyle={styles.deliverButton}
        />
      </View>
    </View>
  ) : state === 2 ? (
    <View style={styles.contentContainer}>
      <HeadingGroup
        heading="Delivery Started"
        headingStyle={styles.heading}
        subheading={`Delivery location is ${distance} miles away`}
        subheadingStyle={styles.subheading}
      />
      <BaseLine style={styles.dividerLine} />
      <View
        style={{ flexDirection: 'row', alignItems: 'center', gap: scale(10) }}
      >
        <View
          style={{
            width: scale(55),
            height: verticalScale(55),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(28),

            // 1. ADD BACKGROUND COLOR (Crucial for iOS shadows)
            backgroundColor: color.background, // or '#FFFFFF'

            // 2. ADJUST iOS SHADOW PROPERTIES
            shadowColor: color.black,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 8,

            // 3. ANDROID SHADOW
            elevation: 4,
          }}
        >
          <ImageComponent
            source={images.dummyCompany}
            style={styles.vendorLogo}
          />
        </View>
        <Text
          style={{
            fontSize: fontSize.fontSize_14,
            fontFamily: fontFamily.weight500,
            color: color.delivery.value,
          }}
        >
          FedEx, 27 Samwell California, USA
        </Text>
      </View>
    </View>
  ) : (
    <View>
      <View style={styles.contentContainer}>
        <HeadingGroup
          heading="Arrived at Delivery Location"
          headingStyle={styles.heading}
          subheading="Mark delivery done when arrived at delivery location"
          subheadingStyle={styles.subheading}
        />
        <BaseLine style={styles.dividerLine} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: scale(10),
            marginBottom: verticalScale(24),
          }}
        >
          <View
            style={{
              width: scale(55),
              height: verticalScale(55),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: scale(28),
              backgroundColor: color.background,
              shadowColor: color.black,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4,
            }}
          >
            <ImageComponent
              source={images.dummyCompany}
              style={styles.vendorLogo}
            />
          </View>
          <Text
            style={{
              fontSize: fontSize.fontSize_14,
              fontFamily: fontFamily.weight500,
              color: color.delivery.value,
            }}
          >
            FedEx, 27 Samwell California, USA
          </Text>
        </View>
        <CustomButton title="Complete" onPress={handleCompleteDelivery} />
      </View>
    </View>
  );
};

const RiderMapBottomSheet = ({
  data = {},
  containerStyle,
  setData,
}: BottomSheetProps) => {
  return (
    <View style={[styles.sheet, containerStyle]}>
      <RiderMapBottomSheetContent data={data} setData={setData} />
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};

export default RiderMapBottomSheet;

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    backgroundColor: 'transparent',
  },
  sheet: {
    width: '100%',
    backgroundColor: color.background,
    padding: scale(16),
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
    position: 'absolute',
    bottom: 0,
  },
  contentContainer: {
    paddingHorizontal: scale(12),
  },
  dividerLine: {
    backgroundColor: color.location.dividerLine,
    marginTop: verticalScale(9),
    marginBottom: verticalScale(16),
  },
  heading: {
    fontSize: fontSize.fontSize_22,
    fontFamily: fontFamily.Heavy,
    color: color.location.heading,
  },
  subheading: {
    fontSize: fontSize.fontSize_13,
    fontFamily: fontFamily.weight400,
    color: color.location.locationText,
  },
  ownerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(24),
    gap: scale(12),
  },
  ownerName: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight500,
    color: color.text,
  },
  returnText: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight500,
    color: color.textSecondary,
    marginTop: verticalScale(4),
  },
  callBox: {
    width: scale(32),
    height: verticalScale(32),
    borderRadius: verticalScale(5),
    backgroundColor: color.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callIcon: {
    width: scale(18),
    height: scale(18),
  },
  avatarBox: {
    width: scale(56),
    height: scale(56),
    borderRadius: scale(56),
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: fontFamily.weight500,
    fontSize: fontSize.fontSize_16,
    color: color.textSecondary,
    lineHeight: verticalScale(20),
    marginTop: verticalScale(4),
  },
  buttonContainer: {
    gap: verticalScale(14),
  },
  deliverButton: {
    backgroundColor: color.background,
    borderWidth: scale(1),
    borderColor: color.textContrast,
  },
  vendorLogo: {
    width: scale(42),
    height: verticalScale(18),
    // resizeMode: 'cover',
  },
});
