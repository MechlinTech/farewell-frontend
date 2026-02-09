import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Base from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import CustomButton from '@components/CustomButton';
import UploadDocument from '@components/UploadDocument';

import color from '@color';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import images from '@images';
import { showFlashMessage } from '@components/showFlashMessage';

const DropOffPackage = ({ navigation }: any) => {
  const [receiptImage, setReceiptImage] = useState<any>(null);
  const [errors, setErrors] = useState<any>({});

  /* 🔴 Field Validator */
  const validateReceipt = () => {
    if (!receiptImage) {
      setErrors((p: any) => ({
        ...p,
        receipt: 'Receipt image is required',
      }));
    }
  };

  /* 🔴 Submit Validation */
  const validateAll = () => {
    let err: any = {};

    if (!receiptImage) err.receipt = 'Receipt image is required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleDone = () => {
    if (!validateAll()) {
    //   showFlashMessage('Please upload receipt image');
      return;
    }

    console.log('Receipt uploaded:', receiptImage);
  };

  return (
    <Base backgroundColor={color.background}>
      {/* Toolbar */}
      <CustomToolbar
        title="Drop off Package"
        showLeftIcon
        onLeftPress={() => navigation.goBack()}
        navigation={navigation}
      />

      {/* Content */}
      <View style={styles.content}>
       

        <UploadDocument
        label='Upload Receipt'
        labelStyle={styles.label}
          imageData={receiptImage}
          error={errors.receipt}
          centerImage={images.camera}
          centerImageStyle={styles.cameraIcon}
          centerImageView={styles.cameraWrapper}
          onImageSelected={img => {
            setReceiptImage(img);
            setErrors((p: any) => ({ ...p, receipt: '' }));
          }}
        />

        <CustomButton
          title="Done"
          onPress={handleDone}
          containerStyle={styles.button}
        />
      </View>
    </Base>
  );
};

export default DropOffPackage;


const styles = StyleSheet.create({
  content: {
    paddingHorizontal: scale(25),
    paddingTop: verticalScale(24),
  },
  label: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight500,
    color: color.textSecondary,
    marginBottom: verticalScale(12),
  },
  button: {
    marginTop: verticalScale(15),
    
  },
    cameraWrapper: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(32), 
    borderWidth: scale(1),
    borderColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
  },

  /* 📷 Camera icon size */
  cameraIcon: {
    width: scale(13.25),
    height: scale(12),
  },
});
