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
import SelectionListBottomSheet from '@components/SelectionListBottomSheet';

const BankDetails = ({ navigation }: any) => {
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bank, setBank] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [accountType, setAccountType] = useState('');
  const [document, setDocument] = useState<any>(null);
const[showbanksheet,setshowbanksheet]=useState(false);
const[showaccountsheet,setshowaccountsheet]=useState(false);
  const [errors, setErrors] = useState<any>({});
  const nameRegex = /^[A-Za-z\s]+$/;
  const accountNumberRegex = /^[0-9]{8,17}$/;
  const branchCodeRegex = /^[0-9]{4,6}$/;
const [banks, setBanks] = React.useState([
  { id: 1, title: 'HDFC Bank' },
  { id: 2, title: 'ICICI Bank' },
  { id: 3, title: 'Axis Bank' },
  { id: 4, title: 'SBI Bank' },
]);

const [accountTypes, setAccountTypes] = React.useState([
  { id: 1, title: 'Savings' },
  { id: 2, title: 'Current' },
]);
const validateAccountHolderName = () => {
  const trimmedName = accountHolderName.trim();

  if (!trimmedName) {
    setErrors((p: any) => ({
      ...p,
      accountHolderName: 'Account holder name is required',
    }));
  } else if (!nameRegex.test(trimmedName)) {
    setErrors((p: any) => ({
      ...p,
      accountHolderName:
        'Name cannot contain numbers or special characters',
    }));
  }
};
const validateAccountNumber = () => {
  const trimmedNumber = accountNumber.trim();

  if (!trimmedNumber) {
    setErrors((p: any) => ({
      ...p,
      accountNumber: 'Account number is required',
    }));
  } else if (!accountNumberRegex.test(trimmedNumber)) {
    setErrors((p: any) => ({
      ...p,
      accountNumber: 'Enter a valid account number',
    }));
  }
};
const validateBranchCode = () => {
  const trimmedCode = branchCode.trim();

  if (!trimmedCode) {
    setErrors((p: any) => ({
      ...p,
      branchCode: 'Branch code is required',
    }));
  } else if (!branchCodeRegex.test(trimmedCode)) {
    setErrors((p: any) => ({
      ...p,
      branchCode: 'Branch code must be 4 to 6 digits',
    }));
  }
};
  /* 🔴 Minimal validation only */
const validateAll = () => {
  let err: any = {};

  const trimmedName = accountHolderName.trim();
  const trimmedAccountNumber = accountNumber.trim();
  const trimmedBranchCode = branchCode.trim();

  // 🔹 Account Holder Name
  if (!trimmedName) {
    err.accountHolderName = 'Account holder name is required';
  } else if (!nameRegex.test(trimmedName)) {
    err.accountHolderName =
      'Name cannot contain numbers or special characters';
  }

  // 🔹 Account Number
  if (!trimmedAccountNumber) {
    err.accountNumber = 'Account number is required';
  } else if (!accountNumberRegex.test(trimmedAccountNumber)) {
    err.accountNumber = 'Account number must be 8 to 17 digits';
  }

  // 🔹 Bank
  if (!bank) {
    err.bank = 'Please select a bank';
  }

  // 🔹 Branch Code
  if (!trimmedBranchCode) {
    err.branchCode = 'Branch code is required';
  } else if (!branchCodeRegex.test(trimmedBranchCode)) {
    err.branchCode = 'Branch code must be 4 to 6 digits';
  }

  // 🔹 Account Type
  if (!accountType) {
    err.accountType = 'Please select account type';
  }

  // 🔹 Document
  if (!document) {
    err.document = 'Please upload a document';
  }

  setErrors(err);

  return Object.keys(err).length === 0;
};

  const handleDone = () => {
    if (!validateAll()){
        // showFlashMessage('Please fill all the fields');
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
          onBlur={validateAccountHolderName}
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
          onBlur={validateAccountNumber}
          containerStyle={styles.input}
        />

        <CustomInput
          placeholder="Select Bank"
          value={bank}
          editable={false}
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
            setshowbanksheet(true);
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
          onBlur={validateBranchCode}
        />

        <CustomInput
          placeholder="Type of Account"
          editable={false}
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
            setshowaccountsheet(true);
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



      
      </ScrollView>
        <CustomButton
          title="Save"
          onPress={handleDone}
          containerStyle={styles.button}
        />
          <SelectionListBottomSheet
          visible={showbanksheet}
          onDismiss={() => setshowbanksheet(false)}
          onPress={(item) => {
            setErrors((p: any) => ({ ...p, bank: '' }));
            setBank(item.title);
            setshowbanksheet(false);
          }}
          
          data={banks}
          selectedItem={bank}
        
        />
             <SelectionListBottomSheet
          visible={showaccountsheet}
          onDismiss={() => setshowaccountsheet(false)}
          onPress={(item) => {
            setErrors((p: any) => ({ ...p, accountType: '' }));
            setAccountType(item.title);
            setshowaccountsheet(false);
          }}
          
          data={accountTypes}
          selectedItem={accountType}
        
        />
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
      marginBottom: verticalScale(20),
      marginHorizontal: scale(24),
    },
});
