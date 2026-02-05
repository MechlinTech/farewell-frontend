import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import CenterModal from 'components/CenterModal';
import color from '@color';

import { scale, verticalScale } from '@scale';
import Navigator from 'utils/Navigator';
import { fontSize, fontFamily } from '@constants';
import HeadingGroup from 'components/HeadingGroupComponent';
import BaseWrapper from 'components/Base';

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlesend = () => {
    // Show the modal when send is clicked
    // setShowModal(true);
    Navigator.pushScreen(navigation, 'OTPVerificationScreen');
    console.log('Send pressed', { email });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFinish = () => {
    setShowModal(false);
    // Navigate back or handle finish action
    Navigator.goBack(navigation);
  };

  //   const handleForgotPassword = () => {
  //     // TODO: Navigate to forgot password
  //     console.log('Forgot password pressed');
  //   };

  //   const handleSignUp = () => {
  //     // TODO: Navigate to sign up
  //     Navigator.pushScreen(navigation, 'SignupScreen');
  //   };

  return (
    <BaseWrapper fullScreenMode={true}>
      <ScrollView style={{ flex: 1, marginTop: verticalScale(132) }}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <HeadingGroup
            heading="Forgot Password?"
            subheading="Enter your registered email id below"
          />
        </View>
        {/* <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.subtitle}>Enter your registered email id below</Text> */}

        {/* Form */}
        <View style={styles.formContainer}>
          <View style={styles.commoncontainer}>
            <CustomInput
              placeholder={'Enter your Email id'}
              value={email}
              onChangeText={setEmail}
              containerStyle={styles.inputContainer}
              fieldStyle={{ borderRadius: scale(5) }}
            />

            <CustomInput
              placeholder="New Password"
              value={password}
              onChangeText={setPassword}
              containerStyle={styles.inputContainer}
              fieldStyle={{ borderRadius: scale(5) }}
            />
            <CustomInput
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              containerStyle={styles.inputContainer}
              fieldStyle={{ borderRadius: scale(5) }}
            />
          </View>

          {/* Login Button */}
          <CustomButton
            title="Send"
            onPress={handlesend}
            containerStyle={styles.SendButton}
            textStyle={styles.SendButtonText}
          />
        </View>
      </ScrollView>
    </BaseWrapper>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: scale(24),
  },
  formContainer: {
    marginBottom: verticalScale(30),
    marginTop: verticalScale(32),
  },
  inputContainer: {
    marginBottom: verticalScale(1),
  },
  commoncontainer: {
    gap: verticalScale(20),
    width: '90%',
    alignSelf: 'center',
  },
  SendButton: {
    marginBottom: verticalScale(20),
    height: verticalScale(55),
    marginTop: verticalScale(24),
    width: '90%',
    alignSelf: 'center',
  },
  SendButtonText: {
    color: color.textContrast,
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.Heavy,
  },
});

export default ForgotPasswordScreen;
