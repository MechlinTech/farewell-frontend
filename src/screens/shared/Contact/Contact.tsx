import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Base from 'components/Base';
import CustomToolbar from 'components/CustomToolbar';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';

import color from '@color';
import { scale, verticalScale } from '@scale';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-z\s]+$/;

const ContactUs = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<any>({});

  /* 🔴 Validators */

  const validateName = () => {
    const trimmedName = name.trim();
    if (!trimmedName)
      setErrors((p: any) => ({ ...p, name: 'Name is required' }));
    else if (!nameRegex.test(trimmedName))
      setErrors((p: any) => ({
        ...p,
        name: 'Name cannot contain numbers or special characters',
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

  const validateMessage = () => {
    if (!message.trim())
      setErrors((p: any) => ({ ...p, message: 'Message is required' }));
  };

  const validateAll = () => {
    let err: any = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) err.name = 'Name is required';
    else if (!nameRegex.test(trimmedName))
      err.name = 'Name cannot contain numbers or special characters';

    if (!trimmedEmail) err.email = 'Email is required';
    else if (!emailRegex.test(trimmedEmail))
      err.email = 'Enter a valid email address';

    if (!trimmedMessage) err.message = 'Message is required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (!validateAll()) return;

    console.log({ name, email, message });
  };

  return (
    <Base >
      <CustomToolbar
        title="Contact Us"
        showLeftIcon
        onLeftPress={() => navigation.goBack()}
        navigation={navigation}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : "height"}
        keyboardVerticalOffset={Platform.OS === 'android' ? verticalScale(40) : 0}

      >
        <ScrollView
          contentContainerStyle={[
            styles.content,
            { flexGrow: 1 }
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ flex: 1 }}>
            <CustomInput
              placeholder="Name"
              value={name}
              onChangeText={t => {
                setName(t);
                setErrors((p: any) => ({ ...p, name: '' }));
              }}
              onBlur={validateName}
              error={errors.name}
              containerStyle={styles.input}
            />

            <CustomInput
              placeholder="Email ID"
              value={email}
              onChangeText={t => {
                setEmail(t);
                setErrors((p: any) => ({ ...p, email: '' }));
              }}
              onBlur={validateEmail}
              error={errors.email}
              containerStyle={styles.input}
            />

            <CustomInput
              placeholder="Message"
              value={message}
              onChangeText={t => {
                setMessage(t);
                setErrors((p: any) => ({ ...p, message: '' }));
              }}
              onBlur={validateMessage}
              error={errors.message}
              multiline={true}
              containerStyle={styles.messageInput}
              fieldStyle={styles.messageField}
            />
          </View>
          <CustomButton
            title="Send Message"
            onPress={handleSubmit}
            pressableStyle={styles.buttonContainer}
          />
        </ScrollView>

      </KeyboardAvoidingView>


    </Base>

  );
};

export default ContactUs;




const styles = StyleSheet.create({
  content: {

    paddingHorizontal: scale(24),
    paddingTop: verticalScale(34),
  },
  input: {
    marginBottom: verticalScale(14),
  },
  messageInput: {

  },
  messageField: {
    minHeight: verticalScale(203), // fixed textarea height
    textAlignVertical: 'top',      // pushes text + placeholder to top
    paddingTop: verticalScale(12.64), // spacing from top like figma

  },
  buttonContainer: {
    marginVertical: verticalScale(20),
    height: verticalScale(56)
  },
});
