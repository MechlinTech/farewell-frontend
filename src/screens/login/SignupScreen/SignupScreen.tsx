import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Base from '@components/Base';
import CustomInput from '@components/CustomInput';
import CustomButton from '@components/CustomButton';
import color from '@color';

import { scale, verticalScale } from '@scale';
import Navigator from '../../../utils/Navigator';
import { fontFamily, fontSize } from '@constants';
import HeadingGroup from '@components/HeadingGroupComponent';
import UserRoleComponent from '@components/UserRoleComponent';
import images from '@images';
import CheckBox from '@components/CustomCheckbox';
import { showFlashMessage } from '@components/showFlashMessage';

const SignupScreen = ({ navigation }: any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [userRole, setUserRole] = useState<string>('customer');

  const [errors, setErrors] = useState<any>({});
  const [phone, setPhone] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* 🔴 Field validators */

  const validateFirstName = () => {
    if (!firstName)
      setErrors((p: any) => ({ ...p, firstName: 'First name is required' }));
    else if (!/^[A-Za-z\s]+$/.test(firstName))
      setErrors((p: any) => ({
        ...p,
        firstName: 'First name can contain letters only',
      }));
  };

  const validateLastName = () => {
    if (!lastName)
      setErrors((p: any) => ({ ...p, lastName: 'Last name is required' }));
    else if (!/^[A-Za-z\s]+$/.test(lastName))
      setErrors((p: any) => ({
        ...p,
        lastName: 'Last name can contain letters only',
      }));
  };
  const validatePhone = () => {
    if (!phone)
      setErrors((p: any) => ({ ...p, phone: 'Phone number is required' }));
    else if (!/^\d{10}$/.test(phone))
      setErrors((p: any) => ({
        ...p,
        phone: 'Enter a valid 10 digit phone number',
      }));
  };

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

  /* 🔴 Submit validation */

  const validateAll = () => {
    let err: any = {};
    const trimmedEmail = email.trim();

    if (!firstName) err.firstName = 'First name is required';
    else if (!/^[A-Za-z\s]+$/.test(firstName))
      err.firstName = 'First name can contain letters only';

    if (!lastName) err.lastName = 'Last name is required';
    else if (!/^[A-Za-z\s]+$/.test(lastName))
      err.lastName = 'Last name can contain letters only';

    if (!phone) err.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone))
      err.phone = 'Enter a valid 10 digit phone number';

    if (!trimmedEmail) err.email = 'Email is required';
    else if (!emailRegex.test(trimmedEmail))
      err.email = 'Enter a valid email address';

    if (!password) err.password = 'Password is required';
    else if (password.includes(' '))
      err.password = 'Password cannot contain spaces';
    else if (password.length < 8 || password.length > 16)
      err.password = 'Password must be 8–16 characters';

    if (!confirmPassword) err.confirmPassword = 'Confirm password is required';
    else if (password !== confirmPassword)
      err.confirmPassword = 'Passwords do not match';
    else if (confirmPassword.length < 8 || confirmPassword.length > 16)
      err.confirmPassword = 'Confirm Password must be 8–16 characters';

    if (!agreeToTerms) err.agreeToTerms = 'You must agree to the terms';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSignup = () => {

    //     if (!validateAll()) {
    //  showFlashMessage("Please Fill All The Fields")
    //       return;
    //     }
    Navigator.pushScreen(navigation, 'OTPVerificationScreen')
    console.log('Signup pressed', {
      firstName,
      lastName,
      phone,
      email,
      password,
      confirmPassword,
      agreeToTerms,
      userRole,
    });
  };

  const handleSignIn = () => {
    Navigator.pushScreen(navigation, 'LoginScreen');
  };

  const handleTermsPress = () => {

    Navigator.pushScreen(navigation, 'TermsAndConditionsScreen')
  };
  const handlePrivacyPress = () => {
    Navigator.pushScreen(navigation, 'PrivacyPolicyScreen')

  };


  return (
    <Base  >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : verticalScale(40)}
      >
        <ScrollView
          style={{ flexGrow: 1, }}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.signupContainer}>
            <View style={styles.signupHeaderContainer}>
              <HeadingGroup
                heading="Register your new Account!"
                subheading="Enter your information below"
                headingStyle={styles.signupTitle}
                subheadingStyle={styles.signupSubtitle}
              />
            </View>

            <View style={styles.userRoleContainer}>
              <UserRoleComponent
                imageSource={images.package}
                title="Customer"
                onPress={() => setUserRole('customer')}
                selected={userRole === 'customer'}
              />
              <UserRoleComponent
                imageSource={images.bike}
                title="Driver"
                onPress={() => setUserRole('rider')}
                selected={userRole === 'rider'}
              />
            </View>

            <View style={styles.commoncontainer}>
              <View style={styles.signupFormContainer}>
                <CustomInput
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={t => {
                    setFirstName(t);
                    setErrors((p: any) => ({ ...p, firstName: '' }));
                  }}
                  onBlur={validateFirstName}
                  error={errors.firstName}
                  containerStyle={styles.signupInputContainer}
                  fieldStyle={{ borderRadius: scale(5) }}
                />

                <CustomInput
                  placeholder="Last name"
                  value={lastName}
                  onChangeText={t => {
                    setLastName(t);
                    setErrors((p: any) => ({ ...p, lastName: '' }));
                  }}
                  onBlur={validateLastName}
                  error={errors.lastName}
                  containerStyle={styles.signupInputContainer}
                  fieldStyle={{ borderRadius: scale(5) }}
                />

                <CustomInput
                  leftIcon={
                    <Text
                      style={{
                        fontSize: fontSize.fontSize_16,
                        color: color.inputText,
                      }}
                    >
                      +1
                    </Text>
                  }
                  placeholder="Phone number"
                  value={phone}
                  onChangeText={t => {
                    setPhone(t);
                    setErrors((p: any) => ({ ...p, phone: '' }));
                  }}
                  onBlur={validatePhone}
                  error={errors.phone}
                  containerStyle={styles.signupInputContainer}
                  fieldStyle={{ borderRadius: scale(5) }}
                />

                <CustomInput
                  placeholder="Your email"
                  value={email}
                  onChangeText={t => {
                    setEmail(t);
                    setErrors((p: any) => ({ ...p, email: '' }));
                  }}
                  onBlur={validateEmail}
                  error={errors.email}
                  containerStyle={styles.signupInputContainer}
                  fieldStyle={{ borderRadius: scale(5) }}
                />

                <CustomInput
                  placeholder="Enter password"
                  value={password}
                  onChangeText={t => {
                    setPassword(t);
                    setErrors((p: any) => ({ ...p, password: '' }));
                  }}
                  onBlur={validatePassword}
                  error={errors.password}
                  containerStyle={styles.signupInputContainer}
                  fieldStyle={{ borderRadius: scale(5) }}
                />

                <CustomInput
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChangeText={t => {
                    setConfirmPassword(t);
                    setErrors((p: any) => ({ ...p, confirmPassword: '' }));
                  }}
                  onBlur={validateConfirmPassword}
                  error={errors.confirmPassword}
                  fieldStyle={{ borderRadius: scale(5) }}
                />
              </View>
              <View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    isChecked={agreeToTerms}

                    onChange={(v: boolean) => {
                      setAgreeToTerms(v);
                      setErrors((p: any) => ({ ...p, agreeToTerms: '' }));
                    }}
                  />

                  <Text style={styles.text}>
                    I agree to Farewell{' '}
                    <Text style={styles.link} onPress={handleTermsPress}>
                      Terms of Service
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={handlePrivacyPress}>
                      Privacy Policy.
                    </Text>
                  </Text>
                </View>
                {errors.agreeToTerms && (
                  <Text style={styles.errorText}>{errors.agreeToTerms}</Text>
                )}
              </View>

              <CustomButton
                title="Continue"
                onPress={handleSignup}
                pressableStyle={styles.signupButton}
                textStyle={styles.signupButtonText}
              />
            </View>

            <Text style={styles.signinText}>
              Already have account?{' '}
              <Text style={styles.signinLink} onPress={handleSignIn}>
                Sign In
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Base>
  );
};

const styles = StyleSheet.create({
  signupContainer: {

    paddingHorizontal: scale(20),
  },
  errorText: {
    color: color.error,
    fontSize: fontSize.fontSize_12,
    marginTop: verticalScale(10),
    fontFamily: fontFamily.Medium,
  },
  commoncontainer: {
    gap: verticalScale(20),
    marginTop: verticalScale(28),
  },
  signupHeaderContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: scale(4),
    marginTop: verticalScale(52),

  },
  signupTitle: {
    color: color.textMain,
    marginBottom: verticalScale(8),
    marginLeft: scale(2),
  },
  signupSubtitle: {
    color: color.textSecondary,

    marginLeft: scale(2),
  },
  userRoleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: scale(33),
    marginLeft: scale(4),
    marginTop: verticalScale(30),
  },
  signupFormContainer: {
    // marginBottom: verticalScale(20),
  },
  signupInputContainer: {
    marginBottom: verticalScale(22),
    //  marginTop: verticalScale(5),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(19),
  },

  text: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.Light,
    color: color.textSecondary,
    marginLeft: scale(12),
  },
  link: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.Light,
    color: color.textSecondary,
    textDecorationLine: 'underline',
  },

  checkbox: {
    marginRight: scale(8),
  },

  checkboxText: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
    color: color.textSecondary,

    marginRight: scale(4),
    marginLeft: scale(10),
  },

  termsText: {
    fontSize: fontSize.fontSize_12,
    color: color.textSecondary,
    textDecorationLine: 'underline',
    marginRight: scale(4),
  },

  signupButton: {
    height: verticalScale(56),
    marginTop: verticalScale(8),
  },
  signupButtonText: {
    color: color.textContrast,
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.Heavy,
  },
  signinText: {
    fontSize: fontSize.fontSize_14,
    color: color.textSecondary,
    marginLeft: scale(70),
    fontFamily: fontFamily.weight400,
    marginVertical: verticalScale(23),
  },
  signinLink: {
    fontSize: fontSize.fontSize_14,
    color: color.textAccent,
    fontFamily: fontFamily.weight800,
  },
});
export default SignupScreen;
