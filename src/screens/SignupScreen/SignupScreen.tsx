import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Base from '../../components/Base';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import color from '@color';

import { scale, verticalScale } from '@scale';
import Navigator from '../../utils/Navigator';
import { fontFamily, fontSize } from '@constants';
import HeadingGroup from 'components/HeadingGroupComponent';

const SignupScreen = ({ navigation }: any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignup = () => {
    // TODO: Implement signup logic
    console.log('Signup pressed', {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      agreeToTerms,
    });
  };

  const handleSignIn = () => {
    // TODO: Navigate to sign in
    Navigator.pushScreen(navigation, 'LoginScreen');
  };

  const handleTermsPress = () => {
    // TODO: Navigate to terms of service
    console.log('Terms of service pressed');
  };

  const handlePrivacyPress = () => {
    // TODO: Navigate to privacy policy
    console.log('Privacy policy pressed');
  };

  return (
    <Base backgroundColor={color.background} fullScreenMode={false}>
      <StatusBar barStyle="dark-content" backgroundColor={color.background} />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.signupContainer}>
          {/* Header */}
          <View style={styles.signupHeaderContainer}>
            <HeadingGroup
              heading='Register your new Account!'
              subheading='Enter your information below'
              headingStyle={styles.signupTitle}
              subheadingStyle={styles.signupSubtitle}
            />

            {/* <Text style={styles.signupSubtitle}>
              Enter your information below
            </Text> */}
          </View>

          {/* Form */}
          <View style={styles.signupFormContainer}>
            <CustomInput
              placeholder="Jacob"
              value={firstName}
              onChangeText={setFirstName}
              containerStyle={styles.signupInputContainer}
              fieldStyle={{ borderRadius: scale(5) }}
            />

            <CustomInput
              placeholder="Last name"
              value={lastName}
              onChangeText={setLastName}
              containerStyle={styles.signupInputContainer}
              fieldStyle={{ borderRadius: scale(5) }}
            />

            <CustomInput
              placeholder="Your email"
              value={email}
              onChangeText={setEmail}
              containerStyle={styles.signupInputContainer}
              fieldStyle={{ borderRadius: scale(10) }}
            />

            <CustomInput
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              containerStyle={styles.signupInputContainer}
              fieldStyle={{ borderRadius: scale(10) }}
            />

            <CustomInput
              placeholder="Confirm password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              fieldStyle={{ borderRadius: scale(10) }}
            />

            {/* Terms Checkbox */}
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setAgreeToTerms(!agreeToTerms)}
              >

              </TouchableOpacity>
              <View style={styles.termsContainer}>
                <Text style={styles.checkboxText}>I agree to Farewell </Text>
                <TouchableOpacity onPress={handleTermsPress}>
                  <Text style={styles.termsText}>Terms of Service</Text>
                </TouchableOpacity>
                <Text style={styles.checkboxText}> and </Text>
                <TouchableOpacity onPress={handlePrivacyPress}>
                  <Text style={styles.termsText}>Privacy Policy.</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Signup Button */}
            <CustomButton
              title="Continue to Verification"
              onPress={handleSignup}
              containerStyle={styles.signupButton}
              textStyle={styles.signupButtonText}
            />
          </View>

          {/* Sign In Link */}
          <Text style={styles.signinText}>Already have account?  <Text style={styles.signinLink}>Sign In</Text>
          </Text>

        </View>
      </ScrollView>
    </Base>
  );
};
const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    backgroundColor: color.background,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(50),
    marginTop: verticalScale(10),
  },
  signupHeaderContainer: {
    alignItems: 'flex-start',
    marginBottom: verticalScale(6),
    marginTop: verticalScale(12),
  },
  signupTitle: {

    fontWeight: '800',
    color: color.textMain,
    marginBottom: verticalScale(8),
    marginLeft: scale(-9),
  },
  signupSubtitle: {
    color: color.textSecondary,
    fontWeight: '400',
    marginLeft: scale(-7),
  },
  signupFormContainer: {
    marginBottom: verticalScale(20),
  },
  signupInputContainer: {
    marginBottom: verticalScale(15),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(12),
    borderRadius: scale(8),
  },
  checkbox: {
    marginRight: scale(8),
  },

  termsContainer: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.Light,
    color: color.textSecondary,
  },
  termsText: {
    textDecorationLine: 'underline',
    color: color.textSecondary,
  },

  signupButton: {
    marginBottom: verticalScale(20),
    height: verticalScale(55),
    marginTop: verticalScale(34),
  },
  signupButtonText: {
    color: color.textContrast,
    fontSize: fontSize.fontSize_16,
    fontWeight: '800',

  },

  signinText: {
    fontSize: fontSize.fontSize_14,
    color: color.textSecondary,
  },
  signinLink: {
    fontSize: fontSize.fontSize_15,
    color: color.textContrast,
    fontWeight: '600',
  },
});

export default SignupScreen;
