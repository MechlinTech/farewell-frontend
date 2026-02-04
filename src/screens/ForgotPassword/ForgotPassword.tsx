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
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CenterModal from '../../components/CenterModal';
import color from '@color';

import { scale, verticalScale } from '@scale';
import Navigator from '../../utils/Navigator';
import { fontSize, fontFamily } from '@constants';
import HeadingGroup from 'components/HeadingGroupComponent';
import BaseWrapper from '../../components/Base';

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

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
        <HeadingGroup heading='Forgot Password?'
          subheading='Enter your registered email id below'
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
            value={password}
            onChangeText={setPassword}
            containerStyle={styles.inputContainer}
            fieldStyle={{ borderRadius: scale(5) }}
          />
          </View>

          {/* Forgot Password */}
          {/* <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View> */}

          {/* Login Button */}
          <CustomButton
            title="Send"
            onPress={handlesend}
            containerStyle={styles.SendButton}
            textStyle={styles.SendButtonText}
          />
        </View>

        {/* Sign Up Link */}
        {/* <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Need an account? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
          </View> */}
      </ScrollView>


    </BaseWrapper >
  );
};
const styles = StyleSheet.create({

headerContainer: {

 marginLeft: scale(24),
},

  formContainer: {
    marginBottom: verticalScale(30),
  },
  inputContainer: {
    marginBottom: verticalScale(1),
  },
  commoncontainer: {
    gap: verticalScale(20),
    width: '90%',
    alignSelf: 'center',
    // marginHorizontal: scale(33),
    // marginTop: verticalScale(33),
  },

  SendButton: {
    marginBottom: verticalScale(20),
    height: verticalScale(55),
    marginTop: verticalScale(24),
    width:'90%',
    alignSelf:'center'
  },
  SendButtonText: {
    color: color.textContrast,
    fontSize: fontSize.fontSize_16,
    fontFamily:fontFamily.Heavy,
  },

  // Modal Styles
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(6),
  },

  envelopeIcon: {
    width: scale(100),
    height: scale(100),
    backgroundColor: 'transparent', // 👈 force transparency
  },
  modalTitle: {
    fontSize: fontSize.fontSize_24,
    fontFamily: fontFamily.Bold,
    color: color.textMain,
    textAlign: 'center',
    marginBottom: verticalScale(12),
    fontWeight: '700',
  },
  modalMessage: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.Regular,
    color: color.textSecondary,
    textAlign: 'center',
    lineHeight: verticalScale(16),
    width: '92%',
    // maxWidth: scale(240), 
    paddingHorizontal: scale(8),
    marginBottom: verticalScale(24),
  },
  finishButton: {
    backgroundColor: color.primaryMuted, // Light blue color
    borderRadius: scale(10),
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(40),


    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: verticalScale(30),
  },
  finishButtonText: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.SemiBold,
    color: color.textContrast,
    fontWeight: '800',
  },


});

export default ForgotPasswordScreen;
