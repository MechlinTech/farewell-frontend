import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import CustomToolbar from '@components/CustomToolbar';
import CustomInput from '@components/CustomInput';
import CustomButton from '@components/CustomButton';
import UploadDocument from '@components/UploadDocument';
import ImageComponent from '@components/ImageComponent';
import ConfirmDetailsSheet from '@screens/components/ConfirmDetailsSheet';

import color from '@color';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import images from '@images';
import CustomImageButton from '@components/CustomImageButton';
import SelectionListBottomSheet from '@components/SelectionListBottomSheet';
import PaymentSuccessModal from '@screens/components/PaymentSuccessModal';
import BaseWrapper from '@components/Base';

const ScheduleDelivery = ({ navigation }: any) => {
  const [packageSize, setPackageSize] = useState<'Small' | 'Medium' | 'Large'>(
    'Small',
  );
  const [showConfirmSheet, setShowConfirmSheet] = useState(false);
  const [labelImage, setLabelImage] = useState<any>(null);
  const [packageQuantity, setPackageQuantity] = useState<any>('1');
  const [pickupLocation, setPickupLocation] = useState(
    '2972 Westheimer, California',
  );
  const [courierCompany, setCourierCompany] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCourierSheet, setShowCourierSheet] = useState(false);
  const [time, setTime] = useState('');
  const [showTimeSheet, setShowTimeSheet] = useState(false);

  /* ===================== DATE & TIME LOGIC ===================== */
  const [timeOptions, _setTimeOptions] = React.useState([
    { id: 1, title: '10–12' },
    { id: 2, title: '12–2' },
    { id: 3, title: '2–4' },
    { id: 4, title: '4–6' },
  ]);

  const courierdata = [
    { id: 1, title: 'FedEx' },
    { id: 2, title: 'UPS' },
    { id: 3, title: 'USPS' },
  ];
  const [date, setDate] = useState<Date | null>(null);
  // const [time, setTime] = useState<Date | null>(null);

  const [showDatePicker, setShowDatePicker] = useState(false);
  // const [showTimePicker, setShowTimePicker] = useState(false);

  const [errors, setErrors] = useState<any>({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _validatePickupLocation = () => {
    if (!pickupLocation?.trim())
      setErrors((p: any) => ({
        ...p,
        pickupLocation: 'Pickup location required',
      }));
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _validateDate = () => {
    if (!date) setErrors((p: any) => ({ ...p, date: 'Select delivery date' }));
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _validateTime = () => {
    if (!date) setErrors((p: any) => ({ ...p, date: 'Select delivery Time' }));
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _validateImage = () => {
    if (!labelImage)
      setErrors((p: any) => ({ ...p, image: 'Upload label/QR image' }));
  };
  const validateAll = () => {
    let err: any = {};

    if (!packageQuantity) err.quantity = 'Quantity required';
    else if (isNaN(packageQuantity)) err.quantity = 'Must be a number';
    else if (Number(packageQuantity) <= 0)
      err.quantity = 'Must be greater than 0';

    if (!date) err.date = 'Select delivery date';
    if (!time) err.time = 'Select delivery time';

    if (!packageSize) err.packageSize = 'Select package size';

    if (!labelImage) err.image = 'Upload label/QR image';
    if (!pickupLocation) err.pickupLocation = 'Pickup location required';
    if (!courierCompany) err.courier = 'Select courier company';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  return (
    <BaseWrapper>
      <CustomToolbar
        title="Schedule Pickup"
        showLeftIcon
        onLeftPress={() => navigation.goBack()}
        navigation={navigation}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : verticalScale(40)}
      >
        <ScrollView
          contentContainerStyle={[
            styles.content,
            { paddingBottom: verticalScale(28) },
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Pickup Location */}
          <CustomInput
            label="Pickup Location"
            value={pickupLocation}
            editable={false}
            textStyle={styles.commontextStyle}
            // editable={false}
            error={errors.pickupLocation}
            leftIcon={
              <ImageComponent
                source={images.location}
                style={styles.locationicon}
              />
            }
            onChangeText={text => setPickupLocation(text)}
            containerStyle={styles.input}
          />

          {/* Courier Company */}
          <CustomInput
            label="Courier Company"
            placeholder="Select Company"
            textStyle={styles.commontextStyle}
            value={courierCompany}
            error={errors.courier}
            leftIcon={
              <ImageComponent
                source={images.greenIndicator}
                style={styles.icon}
              />
            }
            containerStyle={styles.input}
            rightIcon={
              <ImageComponent
                source={images.downarrow}
                style={styles.righticon}
              />
            }
            onChangeText={text => {
              setCourierCompany(text);

              setErrors((p: any) => ({ ...p, courier: '' }));
            }}
            onBlur={validateCourier}
            onRightIconPress={() => setShowCourierSheet(true)}
          />

          {/* Package Quantity */}
          <CustomInput
            value={packageQuantity}
            containerStyle={styles.input}
            label="Package Quantity"
            keyboardType="numeric"
            textStyle={styles.textpackage}
            error={errors.quantity}
            onChangeText={text => {
              setPackageQuantity(text);
              setErrors((p: any) => ({ ...p, quantity: '' }));
            }}
            onBlur={validateQuantity}
          />

          {/* Date & Time */}
          <View style={styles.dateTimeRow}>
            {/* DATE */}
            <CustomInput
              label="Date"
              labelStyle={styles.commonlabel}
              editable={false}
              placeholder="MM/DD/YYYY"
              error={errors.date}
              value={date ? date.toLocaleDateString('en-US') : ''}
              textStyle={styles.commontextStyle}
              fieldStyle={styles.commonfield}
              onPress={() => {
                setShowDatePicker(true);
              }}
            />

            {/* TIME */}
            <CustomInput
              label="Time"
              labelStyle={styles.commonlabel}
              placeholder="HH:MM"
              value={time}
              error={errors.time}
              textStyle={styles.commontextStyle}
              fieldStyle={styles.commonfield}
              rightIcon={
                <ImageComponent
                  source={images.downarrow}
                  style={styles.righticon}
                />
              }
              editable={false}
              onPress={() => {
                if (!date) {
                  showFlashMessage('Please select a date first');
                  return;
                }
                setShowTimeSheet(true);
              }}
              onRightIconPress={() => {
                if (!date) {
                  showFlashMessage('Please select a date first');
                  return;
                }
                setShowTimeSheet(true);
              }}
            />
          </View>

          {/* Package Size */}
          <Text style={styles.label}>Package Size</Text>
          <View style={styles.sizeRow}>
            <CustomImageButton
              title="Small"
              containerStyle={styles.smallContainer}
              imageSource={images.small}
              selected={packageSize === 'Small'}
              onPress={() => setPackageSize('Small')}
            />

            <CustomImageButton
              title="Medium"
              imageSource={images.small}
              containerStyle={styles.mediumContainer}
              imageStyle={styles.mediumimage}
              selected={packageSize === 'Medium'}
              onPress={() => setPackageSize('Medium')}
            />

            <CustomImageButton
              title="Large"
              imageSource={images.small}
              containerStyle={styles.largeContainer}
              imageStyle={styles.largeimage}
              selected={packageSize === 'Large'}
              onPress={() => setPackageSize('Large')}
            />
          </View>

          <UploadDocument
            label="Take a picture of the Label/QR code"
            labelStyle={styles.labelimg}
            imageData={labelImage}
            centerImage={images.camera}
            centerImageStyle={styles.imgcamera}
            error={errors.image}
            centerImageView={styles.imgview}
            onImageSelected={img => setLabelImage(img)}
          />

          <CustomButton
            title="Next"
            containerStyle={styles.button}
            onPress={() => {
              if (!validateAll()) {
                return;
              }
              setShowConfirmSheet(true);
              console.log({
                date,

                packageSize,
                labelImage,
              });
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <ConfirmDetailsSheet
        visible={showConfirmSheet}
        onClose={() => setShowConfirmSheet(false)}
        onContinue={() => {
          setShowConfirmSheet(false);
          setShowSuccessModal(true);
        }}
      />

      <PaymentSuccessModal
        visible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        navigation={navigation}
      />

      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          minimumDate={new Date(new Date().setHours(0, 0, 0, 0))}
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);

            // ✅ if user pressed cancel → do nothing
            if (event.type === 'dismissed') return;

            // ✅ only update when OK pressed
            if (event.type === 'set' && selectedDate) {
              setDate(selectedDate);
              setErrors((p: any) => ({ ...p, date: '' }));
            }
          }}
        />
      )}

      <SelectionListBottomSheet
        visible={showCourierSheet}
        onDismiss={() => setShowCourierSheet(false)}
        data={courierdata}
        onPress={item => {
          setErrors((p: any) => ({ ...p, courier: '' }));
          setCourierCompany(item.title);
          setShowCourierSheet(false);
        }}
        selectedItem={courierCompany}
      />
      <SelectionListBottomSheet
        visible={showTimeSheet}
        onDismiss={() => setShowTimeSheet(false)}
        onPress={item => {
          setErrors((p: any) => ({ ...p, time: '' }));
          setTime(item.title);
          setShowTimeSheet(false);
        }}
        data={timeOptions}
        selectedItem={time}
      />
    </BaseWrapper>
  );
};

export default ScheduleDelivery;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(21),
  },

  commontextStyle: {
    fontSize: fontSize.fontSize_14,
    color: color.delivery.value,
  },
  textpackage: {
    fontSize: fontSize.fontSize_14,
    paddingLeft: scale(8),
  },
  mediumContainer: {
    paddingTop: verticalScale(18),
    gap: verticalScale(6),
    paddingBottom: verticalScale(8),
  },

  righticon: {
    width: scale(14),
    height: verticalScale(14),
    paddingRight: scale(17),
  },
  smallContainer: {
    paddingTop: verticalScale(21),
    gap: verticalScale(9),
    paddingBottom: verticalScale(8),
  },
  largeContainer: {
    paddingTop: verticalScale(12),
    gap: verticalScale(2),
    paddingBottom: verticalScale(8),
  },

  commonfield: {
    height: verticalScale(40),
    paddingVertical: 0,
    width: scale(154),
    color: color.primaryMuted,
  },

  commonlabel: {
    marginBottom: verticalScale(6),
    fontSize: fontSize.fontSize_13,
    fontFamily: fontFamily.weight400,
  },
  dateTimeRow: {
    flexDirection: 'row',

    marginBottom: verticalScale(24),
    marginTop: verticalScale(8),

    gap: scale(16),
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
    marginTop: verticalScale(25),
  },
  label: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight500,

    color: color.textSecondary,
    marginBottom: verticalScale(12),
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
    gap: scale(17),
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
