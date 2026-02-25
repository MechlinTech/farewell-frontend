import * as React from 'react';
import { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomInput from '@components/CustomInput';
import CustomButton from '@components/CustomButton';
import color from '@color';

import { scale, verticalScale } from '@scale';
import Navigator from 'utils/Navigator';
import { fontSize, fontFamily } from '@constants';
import HeadingGroup from '@components/HeadingGroupComponent';
import BaseWrapper from '@components/Base';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  /* 🔴 Validators */

  const validateEmail = () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail)
      setErrors((p: any) => ({ ...p, email: 'Email is required' }));
    else if (!emailRegex.test(trimmedEmail))
      setErrors((p: any) => ({
        ...p,
        email: 'Enter a valid email address',
      }));
  };


  const validatePassword = () => {
    if (!password)
      setErrors((p: any) => ({ ...p, password: 'Password is required' }));
    else if (password.includes(' '))
      setErrors((p: any) => ({
        ...p,
        password: 'Password cannot contain spaces',
      }));
    else if (password.length < 8 || password.length > 16)
      setErrors((p: any) => ({
        ...p,
        password: 'Password must be 8–16 characters',
      }));
    else if (!strongPasswordRegex.test(password))
      setErrors((p: any) => ({
        ...p,
        password:
          'Weak password',
      }));
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword)
      setErrors((p: any) => ({
        ...p,
        confirmPassword: 'Confirm password is required',
      }));
    else if (password !== confirmPassword)
      setErrors((p: any) => ({
        ...p,
        confirmPassword: 'Passwords do not match',
      }));

  };

  const validateAll = () => {
    let err: any = {};
    const trimmedEmail = email.trim();

    if (!trimmedEmail) err.email = 'Email is required';
    else if (!emailRegex.test(trimmedEmail))
      err.email = 'Enter a valid email address';

    if (!password) err.password = 'Password is required';
    else if (password.includes(' '))
      err.password = 'Password cannot contain spaces';
    else if (password.length < 8 || password.length > 16)
      err.password = 'Password must be 8–16 characters';
    else if (!strongPasswordRegex.test(password))
      err.password =
        'Weak password — use uppercase, lowercase, number & special character';

    if (!confirmPassword) err.confirmPassword = 'Confirm password is required';
    else if (password !== confirmPassword)
      err.confirmPassword = 'Passwords do not match';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handlesend = () => {
    if (!validateAll()) {
      // showFlashMessage('Please fill all required fields');
      return;
    }

    Navigator.pushScreen(navigation, 'OTPVerificationScreen');
    console.log('Send pressed', { email });
  };

  return (
    <BaseWrapper fullScreenMode={true}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : verticalScale(20)}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: verticalScale(150) }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.headerContainer}>
            <HeadingGroup
              heading="Forgot Password?"
              subheading="Enter your registered email id below"
            />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.commoncontainer}>
              <CustomInput
                placeholder={'Enter your Email id'}
                value={email}
                onChangeText={t => {
                  setEmail(t);
                  setErrors((p: any) => ({ ...p, email: '' }));
                }}
                onBlur={validateEmail}
                error={errors.email}
                containerStyle={styles.inputContainer}
                fieldStyle={{ borderRadius: scale(5) }}
              />

              <CustomInput
                placeholder="New Password"
                value={password}
                onChangeText={t => {
                  setPassword(t);
                  setErrors((p: any) => ({ ...p, password: '' }));
                }}
                onBlur={validatePassword}
                error={errors.password}
                containerStyle={styles.inputContainer}
                fieldStyle={{ borderRadius: scale(5) }}
              />

              <CustomInput
                placeholder="Confirm New Password"
                value={confirmPassword}
                // secureTextEntry={true}
                onChangeText={t => {
                  setConfirmPassword(t);
                  setErrors((p: any) => ({ ...p, confirmPassword: '' }));
                }}
                onBlur={validateConfirmPassword}
                error={errors.confirmPassword}
                containerStyle={styles.inputContainer}
                fieldStyle={{ borderRadius: scale(5) }}
              />
            </View>

            <CustomButton
              title="Send"
              onPress={handlesend}
              containerStyle={styles.SendButton}
              textStyle={styles.SendButtonText}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    height: verticalScale(56),
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
