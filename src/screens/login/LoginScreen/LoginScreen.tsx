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

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = React.useState<string>('customer');

  const handleLogin = () => {};

  const handleForgotPassword = () => {
    Navigator.pushScreen(navigation, 'ForgotPasswordScreen');
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
                containerStyle={[styles.inputContainer]}
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

          {/* Sign Up Link */}
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
    marginTop: verticalScale(65),
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

export default LoginScreen;
