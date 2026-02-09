import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Base from '../../../components/Base';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import color from '@color';

import { scale, verticalScale } from '@scale';
import Navigator from '../../../utils/Navigator';
import { fontFamily, fontSize } from '@constants';
import HeadingGroup from 'components/HeadingGroupComponent';
import UserRoleComponent from 'components/UserRoleComponent';
import images from '@images';
import { showFlashMessage } from 'components/showFlashMessage';

const CustomerProfile = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = React.useState<string>('customer');

  const [errors, setErrors] = useState<any>({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* 🔴 Field validators */

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



  /* 🔴 Submit validation */

  const validateAll = () => {
  let err: any = {};

  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  if (!trimmedEmail) err.email = 'Email is required';
  else if (!emailRegex.test(trimmedEmail))
    err.email = 'Enter a valid email address';

 if (!password) err.password = 'Password is required';
else if (password.includes(' '))
  err.password = 'Password cannot contain spaces';
else if (password.length < 8 || password.length > 16)
  err.password = 'Password must be 8–16 characters';


  setErrors(err);
  return Object.keys(err).length === 0;
};


  const handleLogin = () => {
    if (!validateAll()) {
      // showFlashMessage('Please fill all required fields');
      return;
    }

    console.log('Login pressed', { email, password, userRole });
  };

  const handleForgotPassword = () => {
    Navigator.pushScreen(navigation, 'ForgotPasswordScreen');
  };

  const handleSignUp = () => {
    Navigator.pushScreen(navigation, 'SignupScreen');
  };

  return (
    <Base backgroundColor={color.background} fullScreenMode={true}>
      <StatusBar barStyle="dark-content" backgroundColor={color.background} />

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <HeadingGroup
              heading="Let's get you Login!"
              subheading="Enter your information below"
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
              title="Rider"
              onPress={() => setUserRole('rider')}
              selected={userRole === 'rider'}
            />
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <View style={styles.commoncontainer}>
              <CustomInput
                placeholder="Enter your Email id"
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  setErrors((p: any) => ({ ...p, email: '' }));
                }}
                onBlur={validateEmail}
                error={errors.email}
                containerStyle={styles.inputContainer}
                fieldStyle={{ borderRadius: scale(5) }}
              />

              <CustomInput
                placeholder="Password"
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  setErrors((p: any) => ({ ...p, password: '' }));
                }}
                onBlur={validatePassword}
                error={errors.password}
                containerStyle={styles.inputContainer}
                fieldStyle={{ borderRadius: scale(5) }}
              />
            </View>

            {/* Forgot Password */}
            <View style={styles.forgotPasswordContainer}>
              <Text
                style={styles.forgotPasswordText}
                onPress={handleForgotPassword}
              >
                Forgot Password?
              </Text>
            </View>

            {/* Login Button */}
            <CustomButton
              title="Get Started"
              onPress={handleLogin}
              containerStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
            />
          </View>

          {/* Sign Up */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Need an account? </Text>
            <Text style={styles.signUpLink} onPress={handleSignUp}>
              Sign up
            </Text>
          </View>
        </View>
      </ScrollView>
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
  userRoleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: scale(31),
    marginTop: verticalScale(22),
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
     
  },
  headerContainer: {
    alignItems: 'flex-start',
    marginBottom: verticalScale(6),
    marginTop: verticalScale(14),
  },
  commoncontainer: {
    gap: verticalScale(20),
    marginTop: verticalScale(31),
  },
  formContainer: {
    marginBottom: verticalScale(30),
  },
  inputContainer: {
    marginBottom: verticalScale(1),
    // paddingTop: verticalScale(10),
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: verticalScale(20),
    marginTop: verticalScale(16),
  },
  forgotPasswordText: {
    fontSize: fontSize.fontSize_14,
    color: color.text,
    fontFamily: fontFamily.Medium,
  },
  loginButton: {
    marginBottom: verticalScale(4),
    height: verticalScale(55),
    marginTop: verticalScale(10),
  },
  loginButtonText: {
    color: color.textContrast,
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.Heavy,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //  marginTop: verticalScale(1),
    marginVertical: verticalScale(1),

    // marginTop: 'auto',
    // paddingBottom: verticalScale(20),
  },
  signUpText: {
    fontSize: fontSize.fontSize_14,
    color: color.textSecondary,
    fontFamily: fontFamily.weight400,
  },
  signUpLink: {
    fontSize: fontSize.fontSize_14,
    color: color.textAccent,
    fontFamily: fontFamily.weight800,
    marginLeft: scale(4),
  },
});

export default CustomerProfile;
