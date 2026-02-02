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
      agreeToTerms 
    });
  };

  const handleSignIn = () => {
    // TODO: Navigate to sign in
    console.log('Sign in pressed');
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
    <Base
      backgroundColor={color.background}
      fullScreenMode={false}
      linearGrad={false}
    >
      <StatusBar barStyle="dark-content" backgroundColor={color.background} />
      
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.signupContainer}>
        {/* Header */}
        <View style={styles.signupHeaderContainer}>
          <Text style={styles.signupTitle}>Register your new Account!</Text>
          <Text style={styles.signupSubtitle}>Enter your information below</Text>
        </View>

        {/* Form */}
        <View style={styles.signupFormContainer}>
          <CustomInput
            label=""
            placeholder="Jacob"
            value={firstName}
            onChangeText={setFirstName}
            containerStyle={styles.signupInputContainer}
            fieldStyle={{ borderRadius: scale(10) }} 
          />

          <CustomInput
            label=""
            placeholder="Last name"
            value={lastName}
            onChangeText={setLastName}
            containerStyle={styles.signupInputContainer}
            fieldStyle={{ borderRadius: scale(10) }} 
          />

          <CustomInput
            label=""
            placeholder="Your email"
            value={email}
            onChangeText={setEmail}
            containerStyle={styles.signupInputContainer}
            fieldStyle={{ borderRadius: scale(10) }} 
          />

          <CustomInput
            label=""
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            containerStyle={styles.signupInputContainer}
            fieldStyle={{ borderRadius: scale(10) }} 
          />

          <CustomInput
            label=""
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            containerStyle={styles.signupInputContainer}
            fieldStyle={{ borderRadius: scale(10) }} 
          />

          {/* Terms Checkbox */}
          <View style={styles.checkboxContainer}>
            <TouchableOpacity 
              style={styles.checkbox} 
              onPress={() => setAgreeToTerms(!agreeToTerms)}
            >
              <View style={[styles.checkboxInner, agreeToTerms && styles.checkboxChecked]}>
                {agreeToTerms && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </TouchableOpacity>
            <View style={styles.termsContainer}>
              <Text style={styles.checkboxText}>I agree to Farewell </Text>
              <TouchableOpacity onPress={handleTermsPress}>
                <Text style={styles.termsText}>Terms of Service</Text>
              </TouchableOpacity>
              <Text style={styles.checkboxText}> and </Text>
              <TouchableOpacity onPress={handlePrivacyPress}>
                <Text style={styles.privacyText}>Privacy Policy.</Text>
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
        <View style={styles.signinContainer}>
          <Text style={styles.signinText}>Already have account? </Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signinLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
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
    marginTop:verticalScale(10)
  },
  signupHeaderContainer: {
    alignItems: 'flex-start',
    marginBottom: verticalScale(10),
    marginTop: verticalScale(12)
  },
  signupTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: color.text,
    marginBottom: verticalScale(8),
  },
  signupSubtitle: {
    fontSize: 16,
    color: '#4f4f4f',
    fontWeight: '400',
  },
  signupFormContainer: {
    marginBottom: verticalScale(20),
  },
  signupInputContainer: {
    marginBottom: verticalScale(-2),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: verticalScale(20),
    marginTop: verticalScale(12),
  },
  checkbox: {
    marginRight: scale(8),
    marginTop: verticalScale(12),
  },
  checkboxInner: {
    width: scale(18),
    height: scale(18),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: scale(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  termsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: verticalScale(12),
  },
  checkboxText: {
    fontSize: 14,
    color: '#666',
  },
  termsText: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  privacyText: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  signupButton: {
    marginBottom: verticalScale(20),
    height: verticalScale(55),
    marginTop: verticalScale(14),
  },
  signupButtonText: {
    color: '#024F76',
    fontSize: 18,
    fontWeight: '800',
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 'auto',
    // paddingBottom: verticalScale(18),
    marginTop: verticalScale(-8),
  },
  signinText: {
    fontSize: 14,
    color: '#666',
  },
  signinLink: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
});



export default SignupScreen;
