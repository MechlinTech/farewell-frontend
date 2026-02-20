import * as React from 'react';
import BaseWrapper from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import { StyleSheet, ScrollView, View } from 'react-native';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import CustomInput from '@components/CustomInput';
import CustomButton from '@components/CustomButton';
import color from '@color';
import { useState } from 'react';
import images from '@images';
import ImageComponent from '@components/ImageComponent';
import SelectionListBottomSheet from '@components/SelectionListBottomSheet';
import Navigator from '@Navigator';
const CurrentLocationDetails = ({ navigation }: any) => {
  const [locationData, setLocationData] = useState({
    addressId: '',
    addressType: '',
    latitude: 0,
    longitude: 0,
    addressLine1: '',
    addressLine2: '',
    city: 'California',
    state: 'California',
    country: 'United States',
    postalCode: '90001',
  });
  const [errors, setErrors] = useState<any>({
    addressLine1: '',
    addressType: '',
  });

  // Validation (individual fields)
  const validateField = (key: string) => {
    let err: any = { ...errors };

    if (key === 'addressLine1' && !locationData.addressLine1.trim()) {
      err.addressLine1 = 'Address Line 1 is required';
    }

    if (key === 'addressType' && !locationData.addressType.trim()) {
      err.addressType = 'Address Type is required';
    }

    setErrors(err);
  };

  // Validate all fields
  const validateAll = () => {
    let err: any = {};
    if (!locationData.addressLine1.trim()) {
      err.addressLine1 = 'Address Line 1 is required';
    }

    if (!locationData.addressType.trim()) {
      err.addressType = 'Address Type is required';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (key: string, value: any) => {
    setLocationData(prev => ({ ...prev, [key]: value }));
  };
  const handleSave = () => {
    console.log(locationData);
    // Call API to save location data
    Navigator.pushScreen(navigation, 'CustomerHomeStack', {
      screen: 'CustomerBottomTabStack',
      params: {
        screen: 'CustomerHome',
      },
    });
  };
  const [showAddressTypeSheet, setShowAddressTypeSheet] = useState(false);

  return (
    <BaseWrapper>
      <CustomToolbar
        title="Current Location Details"
        showLeftIcon
        navigation={navigation}
      />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <CustomInput
            label="Address Line 1"
            placeholder="Enter Address Line 1"
            error={errors.addressLine1}
            value={locationData.addressLine1}
            textStyle={styles.inputText}
            onChangeText={text => handleChange('addressLine1', text)}
            onBlur={() => validateField('addressLine1')}
          />
          <CustomInput
            label="Address Line 2"
            placeholder="Enter Address Line 2 (Optional)"
            value={locationData.addressLine2}
            textStyle={styles.inputText}
            onChangeText={text => handleChange('addressLine2', text)}
          />
          <CustomInput
            label="City"
            value={locationData.city}
            placeholder="Enter City"
            editable={false}
            textStyle={styles.inputText}
            onChangeText={text => handleChange('city', text)}
          />
          <CustomInput
            label="State"
            value={locationData.state}
            placeholder="Enter State"
            editable={false}
            textStyle={styles.inputText}
            onChangeText={text => handleChange('state', text)}
          />
          <CustomInput
            label="Country"
            value={locationData.country}
            placeholder="Enter Country"
            editable={false}
            textStyle={styles.inputText}
            onChangeText={text => handleChange('country', text)}
          />
          <CustomInput
            label="Postal Code"
            value={locationData.postalCode}
            placeholder="Enter Postal Code"
            editable={false}
            textStyle={styles.inputText}
            onChangeText={text => handleChange('postalCode', text)}
          />
          <CustomInput
            label="Save this address as"
            value={locationData.addressType}
            placeholder="Select Address Type"
            error={errors.addressType}
            editable={false}
            textStyle={styles.inputText}
            rightIcon={
              <ImageComponent
                source={images.downarrow}
                style={{ height: verticalScale(14), width: scale(14) }}
              />
            }
            onRightIconPress={() => {
              console.log('address type clicked');
              setShowAddressTypeSheet(true);
            }}
            onBlur={() => validateField('addressType')}
          />
        </ScrollView>
        <CustomButton
          title="Save"
          onPress={() => {
            if (!validateAll()) {
              return;
            }
            handleSave();
          }}
        />
        <SelectionListBottomSheet
          visible={showAddressTypeSheet}
          onDismiss={() => setShowAddressTypeSheet(false)}
          data={[
            { id: 1, title: 'Home' },
            { id: 2, title: 'Office' },
            { id: 3, title: 'Others' },
          ]}
          onPress={item => {
            handleChange('addressType', item.title);
          }}
          selectedItem={locationData.addressType}
        />
      </View>
    </BaseWrapper>
  );
};

export default CurrentLocationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
  },
  title: {
    fontSize: fontSize.fontSize_22,
    fontFamily: fontFamily.Heavy,
    color: color.textMain,
  },
  scrollViewContent: {
    gap: verticalScale(18),
    paddingVertical: verticalScale(16),
  },
  addressTypeTitle: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.Heavy,
    color: color.text,
  },
  addressTypeText: {
    fontFamily: fontFamily.weight400,
    fontSize: fontSize.fontSize_14,
    color: color.black,
    textAlign: 'center',
  },
  inputText: {
    fontSize: fontSize.fontSize_14,
    color: color.delivery.value,
  },
});
