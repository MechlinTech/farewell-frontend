import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
import { showFlashMessage } from '@components/showFlashMessage';

const BankDetails = ({ navigation }: any) => {
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bank, setBank] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [accountType, setAccountType] = useState('');
  const [document, setDocument] = useState<any>(null);

  const [errors, setErrors] = useState<any>({});

  /* 🔴 Minimal validation only */
  const validate = () => {
    let err: any = {};

    if (!accountHolderName) err.accountHolderName = 'Required';
    if (!accountNumber) err.accountNumber = 'Required';
    if (!bank) err.bank = 'Required';
    if (!branchCode) err.branchCode = 'Required';
    if (!accountType) err.accountType = 'Required';
    if (!document) err.document = 'Required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };
  const handleDone = () => {
    if (!validate()){
        showFlashMessage('Please fill all the fields');
        return;
    } 
    console.log('Basic validation passed ✅');
  };

  return (
    <Base backgroundColor={color.background}>
      <CustomToolbar
        title="Bank Details"
        showLeftIcon
        onLeftPress={() => navigation.goBack()}
        navigation={navigation}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <CustomInput
          placeholder="Account Holder Name"
          value={accountHolderName}
          onChangeText={text => {
            setAccountHolderName(text);
            setErrors((p: any) => ({ ...p, accountHolderName: '' }));
          }}
          error={errors.accountHolderName}
          containerStyle={styles.input}
        />

        <CustomInput
          placeholder="Account Number"
          value={accountNumber}
          onChangeText={text => {
            setAccountNumber(text);
            setErrors((p: any) => ({ ...p, accountNumber: '' }));
          }}
          error={errors.accountNumber}
          containerStyle={styles.input}
        />

        <CustomInput
          placeholder="Select Bank"
          value={bank}
          onChangeText={text => {
            setBank(text);
            setErrors((p: any) => ({ ...p, bank: '' }));
          }}
          rightIcon={
            <ImageComponent
              source={images.downarrow}
              style={styles.downarrowimg}
            />
          }
          onRightIconPress={() => {
            console.log('bank dropdown clicked');
          }}
          error={errors.bank}
          containerStyle={styles.input}
        />

        <CustomInput
          placeholder="Branch Code"
          value={branchCode}
          onChangeText={text => {
            setBranchCode(text);
            setErrors((p: any) => ({ ...p, branchCode: '' }));
          }}
          error={errors.branchCode}
          containerStyle={styles.input}
        />

        <CustomInput
          placeholder="Type of Account"
          value={accountType}
          onChangeText={text => {
            setAccountType(text);
            setErrors((p: any) => ({ ...p, accountType: '' }));
          }}
          rightIcon={
            <ImageComponent
              source={images.downarrow}
              style={styles.downarrowimg}
            />
          }
          onRightIconPress={() => {
            console.log('account type clicked');
          }}
          error={errors.accountType}
          containerStyle={styles.input}
        />


        <UploadDocument
        label='Upload Document'
        labelStyle={styles.uploadLabel}
          imageData={document}
          error={errors.document}
          onImageSelected={img => {
            setDocument(img);
            setErrors((p: any) => ({ ...p, document: '' }));
          }}
        />

      

        <CustomButton
          title="Save"
          onPress={handleDone}
          containerStyle={styles.button}
        />
      </ScrollView>
    </Base>
  );
};

export default BankDetails;
const styles = StyleSheet.create({
    content: {
        paddingHorizontal: scale(24),
        paddingTop: verticalScale(40),
        paddingBottom: verticalScale(40),
    },

    input: {
        marginBottom: verticalScale(14),


    },
    downarrowimg: {
        width: scale(14),
        height: verticalScale(14),
        paddingRight: scale(17),
    },


    uploadLabel: {
        marginTop: verticalScale(15),
        marginBottom: verticalScale(18),
        
        
        color: color.textSecondary,
        fontSize: fontSize.fontSize_15,
        fontFamily: fontFamily.weight300,
    },



    button: {
        marginTop: verticalScale(155),


    },
});
