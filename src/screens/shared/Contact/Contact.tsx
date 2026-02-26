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

import { scale, verticalScale } from '@scale';
import ImageComponent from '@components/ImageComponent';
import images from '@images';
import SelectionListBottomSheet from '@components/SelectionListBottomSheet';

 
const nameRegex = /^[A-Za-z\s]+$/;

const ContactUs = ({ navigation }: any) => {
  const [name, setName] = useState('');

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<any>({});
    const [categories, _setCategories] = React.useState([
      { id: 1, title: 'Payment & Refund' },
      { id: 2, title: 'Delivery & Rider' },
      { id: 3, title: 'Account & Verification' },
      { id: 4, title: 'Technical Issues' },
      { id: 5, title: 'Safety, Fraud & Policy' },
    ]);
    const [category, setCategory] = useState('');
    const [showCategorySheet, setShowCategorySheet] = useState(false);

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



  const validateMessage = () => {
    if (!message.trim())
      setErrors((p: any) => ({ ...p, message: 'Message is required' }));
  };

  const validateAll = () => {
    let err: any = {};
    const trimmedName = name.trim();
    
    const trimmedMessage = message.trim();

    if (!trimmedName) err.name = 'Name is required';
    else if (!nameRegex.test(trimmedName))
      err.name = 'Name cannot contain numbers or special characters';

 

    if (!trimmedMessage) err.message = 'Message is required';
    if (!category) err.category = 'Category is required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (!validateAll()) return;

    console.log({ name, category, message });
  };

  return (
    <Base>
      <CustomToolbar
        title="Contact Us"
        showLeftIcon
        onLeftPress={() => navigation.goBack()}
        navigation={navigation}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={
          Platform.OS === 'android' ? verticalScale(40) : 0
        }
      >
        <ScrollView
          contentContainerStyle={[styles.content, { flexGrow: 1 }]}
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
              placeholder="Category"
              value={category}
                error={errors.category}
                 rightIcon={
                              <ImageComponent
                                source={images.downarrow}
                                style={styles.downarrowimg}
                              />
                            }
             
              onPress={() => {
                setShowCategorySheet(true)
              }}
              onRightIconPress={
                () => setShowCategorySheet(true)
              }
              editable={false}
              
              
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
         <SelectionListBottomSheet
              visible={showCategorySheet}
              onDismiss={() => setShowCategorySheet(false)}
              onPress={item => {
                setErrors((p: any) => ({ ...p, category: '' }));
                setCategory(item.title);
                setShowCategorySheet(false);
              }}
              data={categories}
              selectedItem={category}
            />
    </Base>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(27),
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
  downarrowimg: {
    width: scale(14),
    height: verticalScale(14),
    paddingRight: scale(17),
  },
});
