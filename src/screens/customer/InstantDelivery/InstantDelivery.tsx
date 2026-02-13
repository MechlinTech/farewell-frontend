import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

import Base from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import CustomInput from '@components/CustomInput';
import CustomButton from '@components/CustomButton';
import UploadDocument from '@components/UploadDocument';
import ImageComponent from '@components/ImageComponent';

import color from '@color';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import images from '@images';
import CustomImageButton from '@components/CustomImageButton';
import { showFlashMessage } from '@components/showFlashMessage';
import SelectionListBottomSheet from '@components/SelectionListBottomSheet';

const InstantDelivery = ({ navigation }: any) => {

  const courierdata=[
    { id: 1, title: 'FedEx' },
    { id: 2, title: 'UPS' },
    { id: 3, title: 'DHL' },
  ];
  const [packageSize, setPackageSize] = useState<'Small' | 'Medium' | 'Large'>(
    'Small',
  );
  const [labelImage, setLabelImage] = useState<any>(null);
  const [packageQuantity, setPackageQuantity] = useState<any>('1');
  const[pickupLocation, setPickupLocation] = useState<any>('2972 Westheimer, California');
  const[courierCompany, setCourierCompany] = useState<any>('FedEx, 27 Samwell California, USA');
  const [showCourierSheet, setShowCourierSheet] = useState(false);

  const [errors, setErrors] = useState<any>({});
  const validatePickupLocation = () => {
  if (!pickupLocation?.trim())
    setErrors((p: any) => ({ ...p, pickupLocation: 'Pickup location required' }));
};
const validateCourier = () => {
  if (!courierCompany?.trim())
    setErrors((p: any) => ({ ...p, courier: 'Select courier company' }));
};
const validateQuantity = () => {
  if (!packageQuantity)
    setErrors((p: any) => ({ ...p, quantity: 'Quantity required' }));
  else if (isNaN(packageQuantity))
    setErrors((p: any) => ({ ...p, quantity: 'Must be a number' }));
  else if (Number(packageQuantity) <= 0)
    setErrors((p: any) => ({ ...p, quantity: 'Must be greater than 0' }));
};
const validateImage = () => {
  if (!labelImage)
    setErrors((p: any) => ({ ...p, image: 'Upload label/QR image' }));
};
const validateAll = () => {
  let err: any = {};

  if (!packageQuantity) err.quantity = 'Quantity required';
  else if (isNaN(packageQuantity)) err.quantity = 'Must be a number';
  else if (Number(packageQuantity) <= 0) err.quantity = 'Must be greater than 0';



  if (!packageSize) err.packageSize = 'Select package size';

  if (!labelImage) err.image = 'Upload label/QR image';
  if(!pickupLocation) err.pickupLocation = 'Pickup location required';
  if(!courierCompany) err.courier = 'Select courier company';

  setErrors(err);
  return Object.keys(err).length === 0;
};


  return (
    <Base backgroundColor={color.background}>
      <CustomToolbar
        title="Instant Delivery"
        showLeftIcon
        onLeftPress={() => navigation.goBack()}

        navigation={navigation}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Pickup Location */}

        <CustomInput
          label='Pickup Location'
          value={pickupLocation}
          error={errors.pickupLocation}
          textStyle={styles.pickupLocationTextStyle}
          onChangeText={(text)=>setPickupLocation(text)}
          editable={false}
          leftIcon={
            <ImageComponent source={images.location} style={styles.locationicon} />
          }
          containerStyle={styles.input}
        />

        {/* Courier Company */}

        <CustomInput
          label="Courier Company"
          textStyle={styles.couriertextStyle}
          value={courierCompany}

error={errors.courier}
          // editable={false}
          onChangeText={text=>setCourierCompany(text)}
          leftIcon={
            <ImageComponent source={images.  greenIndicator} style={styles.icon} />
          }
          containerStyle={styles.input}
          rightIcon={
            <ImageComponent source={images.downarrow} style={styles.righticon} />
          }
          onRightIconPress={() => {
           setShowCourierSheet(true);
          }}
        />


        {/* Package Quantity */}

        <CustomInput value={packageQuantity} containerStyle={styles.input} label='Package Quantity'

          onChangeText={(text) => setPackageQuantity(text)}
          error={errors.quantity}
          keyboardType="numeric"
        />

        {/* Package Size */}
        <Text style={styles.label}>Package Size</Text>
        <View style={styles.sizeRow}>
          <CustomImageButton
            title="Small"
            imageSource={images.small}   // svg / image
            selected={packageSize === 'Small'}
            onPress={() => setPackageSize('Small')}
          />

          <CustomImageButton
            title="Medium"
            imageSource={images.small}
            imageStyle={styles.mediumimage}
            selected={packageSize === 'Medium'}
            onPress={() => setPackageSize('Medium')}
          />

          <CustomImageButton
            title="Large"
            imageSource={images.small}
            imageStyle={styles.largeimage}
            selected={packageSize === 'Large'}
            onPress={() => setPackageSize('Large')}
          />
        </View>



        <UploadDocument

          label='Take a picture of the Label/QR code'
          labelStyle={styles.labelimg}
          imageData={labelImage}
          error={errors.image}
          centerImage={images.camera}
          centerImageStyle={styles.imgcamera}
          centerImageView={styles.imgview}
          onImageSelected={img => setLabelImage(img)}

        />

        {/* Button */}
        <CustomButton
          title="Next"
          containerStyle={styles.button}
          onPress={() => {
            if(!validateAll()){
              return;
            }

            console.log({
              packageSize,
              labelImage,
            });
          }}
        />
      </ScrollView>
      <SelectionListBottomSheet

      visible={showCourierSheet}
      onDismiss={() => setShowCourierSheet(false)}
     
      data={courierdata}
       onPress={(item) => {
        setCourierCompany(item.title);
        setShowCourierSheet(false);
      }}
      selectedItem={courierCompany}
    />
    </Base>
  );
};

export default InstantDelivery;
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(29),
    paddingBottom: verticalScale(40),
  },
  couriertextStyle: {


    fontSize: fontSize.fontSize_14,
    color: color.delivery.value,



  },
  righticon: {
    width: scale(14),
    height: verticalScale(14),
    paddingRight: scale(17),
  },
  pickupLocationTextStyle: {
    fontSize: fontSize.fontSize_14,

    color: color.delivery.value,

  },
  imgview: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(32),
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediumimage: {
    width: scale(30),
    height: verticalScale(30),
  },
  largeimage: {
    width: scale(40),
    height: verticalScale(40),
  },
  locationicon: {
    width: scale(14),
    height: verticalScale(14),
    paddingLeft: scale(16),
    paddingRight: scale(5),
  },
  labelimg: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight500,

    color: color.textSecondary,
    marginBottom: verticalScale(11),
    marginTop: verticalScale(33),
  },
  label: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight500,

    color: color.textSecondary,
    marginBottom: verticalScale(13),
    marginTop: verticalScale(8),
  },

  input: {
    marginBottom: verticalScale(16),

  },
  imgcamera: {
    width: scale(16),
    height: scale(16),
  },

  icon: {
    width: scale(10),
    height: verticalScale(10),
    borderRadius: scale(2),
    paddingLeft: scale(16),
    paddingRight: scale(5),
  },

  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(6),
  },

  sizeBox: {
    width: '30%',
    paddingVertical: verticalScale(16),
    borderRadius: scale(6),
    backgroundColor: color.primaryMuted,
    alignItems: 'center',
  },

  sizeBoxActive: {
    borderWidth: 1,
    borderColor: color.primary,

  },

  sizeText: {
    fontSize: fontSize.fontSize_12,
    color: color.textSecondary,
  },

  sizeTextActive: {

    fontFamily: fontFamily.Medium,
  },

  button: {
    marginTop: verticalScale(15),
  },
});
