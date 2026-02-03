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
import Base from '../../components/Base';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CenterModal from '../../components/CenterModal';
import color from '@color';

import { scale, verticalScale } from '@scale';
import Navigator from '../../utils/Navigator';
import { fontSize, fontFamily } from '@constants';
import HeadingGroup from 'components/HeadingGroupComponent';
import images from '@images';
import ImageComponent from 'components/ImageComponent';

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handlesend = () => {
    // Show the modal when send is clicked
    setShowModal(true);
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
    <Base backgroundColor={color.background} fullScreenMode={false}>
      <StatusBar barStyle="dark-content" backgroundColor={color.background} />

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <HeadingGroup heading='Forgot Password?' 
            subheading='Enter your registered email id below'
            subheadingStyle={styles.subtitle}
            
            headingStyle={styles.title}/>
            {/* <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.subtitle}>Enter your registered email id below</Text> */}
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <CustomInput
              placeholder={'Enter your Email id'}
              value={email}
              onChangeText={setEmail}
              containerStyle={styles.inputContainer}
              fieldStyle={{ borderRadius: scale(10) }}
            />

            <CustomInput
              placeholder="New Password"
              value={password}
              onChangeText={setPassword}
              containerStyle={styles.inputContainer}
              fieldStyle={{ borderRadius: scale(10) }}
            />
                <CustomInput
              placeholder="Confirm New Password"
              value={password}
              onChangeText={setPassword}
              containerStyle={styles.inputContainer}
              fieldStyle={{ borderRadius: scale(10) }}
            />

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
        </View>
      </ScrollView>

      {/* Check Your Email Modal */}
      <CenterModal
        visible={showModal}
        onClose={handleCloseModal}
        height={verticalScale(310)}
        width={scale(340)}
        borderRadius={scale(35)}
        paddingHorizontal={scale(24)}
        paddingVertical={verticalScale(32)}
      >
        <View style={styles.modalContent}>
          {/* Purple Circle with Envelope Icon */}
          <View style={styles.iconContainer}>
            {/* <View style={styles.circleIcon}> */}
       <ImageComponent
    source={images.frame}
    style={styles.envelopeIcon}
    resizeMode="contain"
  />
            {/* </View> */}
          </View>

          {/* Modal Text */}
          <Text style={styles.modalTitle}>Check Your Email</Text>
          
          <Text style={styles.modalMessage}
            //  numberOfLines={2}
          >
             We have sent a password recover instructions to your registered email id{' '}
  {email || 'jacomsmith@gmail.com'}
          </Text>

          {/* Finish Button */}
        <CustomButton
  title="Finish"
  onPress={handleFinish}
  containerStyle={styles.finishButton}
  textStyle={styles.finishButtonText}
/>

        </View>
      </CenterModal>
    </Base>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    // paddingTop: verticalScale(70),
    //  paddingHorizontal: scale(20),
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(40),
    marginTop: verticalScale(110),
  },
  headerContainer: {
    alignItems: 'flex-start',
    marginBottom: verticalScale(14),
    marginTop: verticalScale(12),
  },
  title: {
    // fontSize: fontSize.fontSize_22,
    fontWeight: '800',
    color: color.text,
    marginBottom: verticalScale(8),
    marginLeft: scale(-9),
  },
  subtitle: {
    // fontSize: fontSize.fontSize_14,
    color: color.textSecondary,
    textAlign: 'center',
     marginLeft: scale(-9),
  },
  formContainer: {
    marginBottom: verticalScale(30),
  },
  inputContainer: {
    marginBottom: verticalScale(1),
    borderRadius: scale(10),
  },

  SendButton: {
    marginBottom: verticalScale(20),
    height: verticalScale(55),
    marginTop: verticalScale(24),
  },
  SendButtonText: {
    color: color.textContrast,
    fontSize: fontSize.fontSize_16,
    fontWeight: '800',
  },

  // Modal Styles
  modalContent: {
     flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: verticalScale(-17),
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
    //  marginLeft: scale(-),
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
