import * as React from 'react';
import { useState } from 'react';
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

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log('Login pressed', { email, password });
  };

  const handleForgotPassword = () => {
    // TODO: Navigate to forgot password
    Navigator.pushScreen(navigation, 'ForgotPasswordScreen');
    console.log('Forgot password pressed');
  };

  const handleSignUp = () => {
    // TODO: Navigate to sign up
    Navigator.pushScreen(navigation, 'SignupScreen');
  };

  return (
    <Base backgroundColor={color.background} fullScreenMode={true}>
      <StatusBar barStyle="dark-content" backgroundColor={color.background} />

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <HeadingGroup heading="Let's get you Login!" 
            
            subheading='Enter your information below' 
            subheadingStyle={styles.subtitle}
            headingStyle={styles.title} />
            {/* <Text style={styles.subtitle}>Enter your information below</Text> */}
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <CustomInput
              placeholder={'Enter your Email id'}
              value={email}
              onChangeText={setEmail}
              containerStyle={styles.inputContainer}
              fieldStyle={{ borderRadius: scale(5) }}
            />

            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              containerStyle={styles.inputContainer}
              fieldStyle={{ borderRadius: scale(5) }}
            />

            {/* Forgot Password */}
            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <CustomButton
              title="Get Started"
              onPress={handleLogin}
              containerStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
            />
          </View>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Need an account? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
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
  content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(40),
    marginTop: verticalScale(110),
  },
  headerContainer: {
    alignItems: 'flex-start',
    marginBottom: verticalScale(6),
    marginTop: verticalScale(14),
    
  },
  title: {
    // fontSize: fontSize.fontSize_20,
    fontWeight: '800',
    color: color.text,
    marginBottom: verticalScale(8),
    marginLeft: scale(-7),
  },
  subtitle: {
    // fontSize: fontSize.fontSize_12,
    color: color.textSecondary,
    textAlign: 'center',
    marginLeft: scale(-6),
  },
  formContainer: {
    marginBottom: verticalScale(30),
  },
  inputContainer: {
    marginBottom: verticalScale(1),
    
    
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: verticalScale(20),
    marginTop: verticalScale(16),
  },
  forgotPasswordText: {
    fontSize: fontSize.fontSize_14,
    color: color.text,
    fontWeight: '500',
  },
  loginButton: {
    marginBottom: verticalScale(20),
    height: verticalScale(55),
    marginTop: verticalScale(10),
  },
  loginButtonText: {
    color: color.textContrast,
    fontSize: fontSize.fontSize_15,
    fontWeight: '800',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(-20),

    // marginTop: 'auto',
    // paddingBottom: verticalScale(20),
  },
  signUpText: {
    fontSize: fontSize.fontSize_15,
    color: color.textSecondary,
    fontWeight: '600',
  },
  signUpLink: {
    fontSize: fontSize.fontSize_15,
    color: color.textContrast,
    fontWeight: '600',
  },
});

export default LoginScreen;
