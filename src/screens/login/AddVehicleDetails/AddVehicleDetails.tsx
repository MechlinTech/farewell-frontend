import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Base from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import CustomInput from '@components/CustomInput';
import CustomButton from '@components/CustomButton';
import UploadDocument from '@components/UploadDocument';

import color from '@color';
import { scale, verticalScale } from '@scale';
import { showFlashMessage } from '@components/showFlashMessage';
import CenterModal from '@components/CenterModal';
import ImageComponent from '@components/ImageComponent';
import images from '@images';
import { fontFamily, fontSize } from '@constants';
import Navigator from '@Navigator';

const AddVehicleDetails = ({ navigation }: any) => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [model, setModel] = useState('');
  const [capacity, setCapacity] = useState('');
  const [licence, setLicence] = useState<any>();
  const [rc, setRc] = useState<any>();
  const [insurance, setInsurance] = useState<any>();
  const [errors, setErrors] = useState<any>({});
  const [showPendingModal, setShowPendingModal] = useState<boolean>(false);

  /* 🔴 Field Validators */

  const validateVehicleNumber = () => {
    if (!vehicleNumber)
      setErrors((p: any) => ({
        ...p,
        vehicleNumber: 'Vehicle number is required',
      }));
  };

  const validateModel = () => {
    if (!model)
      setErrors((p: any) => ({
        ...p,
        model: 'Model is required',
      }));
  };

  const validateCapacity = () => {
    if (!capacity)
      setErrors((p: any) => ({
        ...p,
        capacity: 'Capacity is required',
      }));
  };

  /* 🔴 Submit Validation */

  const validateAll = () => {
    let err: any = {};

    if (!vehicleNumber) err.vehicleNumber = 'Vehicle number is required';
    if (!model) err.model = 'Model is required';
    if (!capacity) err.capacity = 'Capacity is required';

    if (!licence) err.licence = 'Licence is required';
    if (!rc) err.rc = 'RC is required';
    if (!insurance) err.insurance = 'Insurance is required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (!validateAll()) {
      showFlashMessage('Please fill all required fields');
      return;
    }

    console.log('Submitted ✅');
  };

  const pendingModal = () => {
    return (
      <CenterModal
        visible={showPendingModal}
        onClose={() => {
          setShowPendingModal(false);
          Navigator.resetStackScreen(navigation, 'LoginStack');
        }}
      >
        <View style={{ alignItems: 'center' }}>
          {/* Icon Circle */}
          <View style={styles.iconCircle}>
            <ImageComponent
              source={images.check}
              style={{ width: scale(34), height: verticalScale(22) }}
            />
          </View>
          {/* Title */}
          <Text style={styles.title}>Account Verification Pending</Text>

          {/* Description */}
          <Text style={styles.description}>
            Your request is sent for approval to the admin and will be verified
            soon..
          </Text>

          {/* Continue Button */}
          <CustomButton
            title="Continue"
            onPress={() => {
              setShowPendingModal(false);
              Navigator.resetStackScreen(navigation, 'LoginStack');
            }}
            containerStyle={styles.modalButton}
          />
        </View>
      </CenterModal>
    );
  };

  return (
    <Base backgroundColor={color.background}>
      <CustomToolbar
        title="Add Vehicle Details"
        onLeftPress={() => navigation.goBack()}
        showLeftIcon
        navigation={navigation}
      />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Inputs */}
        <CustomInput
          placeholder="Vehicle Number"
          value={vehicleNumber}
          onChangeText={text => {
            setVehicleNumber(text);
            setErrors((p: any) => ({ ...p, vehicleNumber: '' }));
          }}
          onBlur={validateVehicleNumber}
          error={errors.vehicleNumber}
          containerStyle={styles.input}
        />

        <CustomInput
          placeholder="Model"
          value={model}
          onChangeText={text => {
            setModel(text);
            setErrors((p: any) => ({ ...p, model: '' }));
          }}
          onBlur={validateModel}
          error={errors.model}
          containerStyle={styles.input}
        />

        <CustomInput
          placeholder="Vehicle Capacity"
          value={capacity}
          onChangeText={text => {
            setCapacity(text);
            setErrors((p: any) => ({ ...p, capacity: '' }));
          }}
          onBlur={validateCapacity}
          error={errors.capacity}
          containerStyle={styles.input}
        />

        {/* Upload Docs */}

        <UploadDocument
          label="Upload Licence"
          imageData={licence}
          error={errors.licence}
          onImageSelected={img => {
            setLicence(img);
            setErrors((p: any) => ({ ...p, licence: '' }));
          }}
          mainStyle={styles.doc}
        />

        <UploadDocument
          label="Upload Vehicle RC"
          imageData={rc}
          error={errors.rc}
          onImageSelected={img => {
            setRc(img);
            setErrors((p: any) => ({ ...p, rc: '' }));
          }}
          mainStyle={styles.doc}
        />

        <UploadDocument
          label="Upload Insurance"
          imageData={insurance}
          error={errors.insurance}
          onImageSelected={img => {
            setInsurance(img);
            setErrors((p: any) => ({ ...p, insurance: '' }));
          }}
        />

        {/* Submit */}

        <CustomButton
          title="Submit for Verification"
          onPress={handleSubmit}
          containerStyle={styles.button}
        />
      </ScrollView>
      {showPendingModal && pendingModal()}
    </Base>
  );
};

export default AddVehicleDetails;

/* 🔴 Reusable Error Text */

const styles = StyleSheet.create({
  content: {
    padding: scale(20),
    paddingBottom: verticalScale(40),
  },
  input: {
    marginBottom: verticalScale(15),
  },
  button: {
    height: verticalScale(56),
    marginTop: verticalScale(25),
  },
  iconCircle: {
    width: scale(75),
    height: scale(75),
    borderRadius: scale(75),
    backgroundColor: color.logoBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.fontSize_20,
    fontFamily: fontFamily.Heavy,
    marginTop: verticalScale(30),
    color: color.text,
  },
  description: {
    color: color.text,
    marginTop: verticalScale(12),
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.Roman,
    textAlign: 'center',
    marginHorizontal: scale(24),
    lineHeight: verticalScale(22),
  },
  modalButton: {
    marginTop: verticalScale(28),
  },
  doc: { marginBottom: verticalScale(15) },
});
