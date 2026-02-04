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
import CheckBox from 'components/CustomCheckbox';
import { KeyboardAvoidingView, Platform } from 'react-native';
import UserRoleComponent from 'components/UserRoleComponent';
import images from '@images';

const SignupScreen = ({ navigation }: any) => {
  const [firstName, setFirstName] = useState('');
const [userRole, setUserRole] = React.useState<string>('');
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
<KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
   keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : verticalScale(20)}
>
      <ScrollView style={{ flex: 1}} showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
           automaticallyAdjustKeyboardInsets>
        <View style={styles.signupContainer}>
          {/* Header */}
          <View style={styles.signupHeaderContainer}>
            <HeadingGroup
              heading='Register your new Account!'
              subheading='Enter your information below'
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
                    title="Rider"
                    onPress={() => setUserRole('rider')}
                    selected={userRole === 'rider'}
                />
            </View>

            {/* <Text style={styles.signupSubtitle}>
              Enter your information below
            </Text> */}
          

          {/* Form */}
          <View style={styles.commoncontainer}>
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
              fieldStyle={{ borderRadius: scale(5) }}
            />

            <CustomInput
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              containerStyle={styles.signupInputContainer}
              fieldStyle={{ borderRadius: scale(5) }}
            />

            <CustomInput
              placeholder="Confirm password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              fieldStyle={{ borderRadius: scale(5) }}
            />
          </View>

            {/* Terms Checkbox */}
   <View style={styles.termsContainer}>
    <View style={styles.checkboxContainer}>
  <CheckBox isChecked={agreeToTerms} onChange={setAgreeToTerms}/>
  <Text style={styles.text}>I agree to Farewell</Text>

  <Text style={styles.link} onPress={handleTermsPress}>
    Terms of Service
  </Text>

  <Text style={[styles.text, { marginLeft: scale(2) }]}>and</Text>

  <Text style={styles.link} onPress={handlePrivacyPress}>
    Privacy Policy.
  </Text>
  </View>
  </View>



            {/* Signup Button */}
            <CustomButton
              title="Continue"
              onPress={handleSignup}
              containerStyle={styles.signupButton}
              textStyle={styles.signupButtonText}
            />
          </View>

          {/* Sign In Link */}
         <View style={styles.textsignin}>
          <Text style={styles.signinText}>Already have account?  <Text style={styles.signinLink} onPress={handleSignIn}>Sign In</Text>
          </Text>
          </View>

        </View>
      </ScrollView>
      </KeyboardAvoidingView>
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
  commoncontainer: {
  
    gap:20,
    marginTop:verticalScale(20)
  },
  signupHeaderContainer: {
    alignItems: 'flex-start',
    marginBottom: verticalScale(1),
    marginTop: verticalScale(5),
  },
  signupTitle: {

   
    color: color.textMain,
    marginBottom: verticalScale(8),
    marginLeft: scale(2),
  },
  signupSubtitle: {
    color: color.textSecondary,
   
    marginLeft: scale(4),
  },
      container: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: verticalScale(176),
        paddingHorizontal: scale(43),
    },
    userRoleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: scale(33),
        marginLeft: scale(4),
        
    },
  signupFormContainer: {
    // marginBottom: verticalScale(20),
  },
  signupInputContainer: {
     marginBottom: verticalScale(15),
    //  marginTop: verticalScale(5),
  },
checkboxContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: verticalScale(25),

},


text: {
  fontSize: fontSize.fontSize_12,
  fontFamily: fontFamily.Light,
  color: color.textSecondary,
  marginRight: scale(5),
  marginLeft:scale(12),
  marginBottom: verticalScale(6), // 👈 SAME GAP
},
link: {
  fontSize: fontSize.fontSize_12,
  fontFamily: fontFamily.Light,
  color: color.textSecondary,
  textDecorationLine: 'underline',
  marginRight: scale(4),
  marginBottom: verticalScale(5), // 👈 SAME GAP
},

  checkbox: {
    marginRight: scale(8),
   
  },

termsContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',  
  marginTop: verticalScale(10),
  marginBottom: verticalScale(5),   // 👈 allows proper wrapping
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
textsignin:{

  marginBottom: verticalScale(40),
  marginTop: verticalScale(27),

},


  signupButton: {
    marginBottom: verticalScale(15),
    height: verticalScale(55),
    // marginTop: verticalScale(20),
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
    fontFamily:fontFamily.weight400,
    // marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  signinLink: {
    fontSize: fontSize.fontSize_14,
    color: color.textAccent,
    fontFamily: fontFamily.weight800,
  },
});

export default SignupScreen;
