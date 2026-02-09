import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

import Base from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import CustomInput from '@components/CustomInput';
import CustomButton from '@components/CustomButton';
import UploadDocument from '@components/UploadDocument';
import ImageComponent from '@components/ImageComponent';

import color from '@color';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import images from '@images';
import CustomImageButton from '@components/CustomImageButton';

const InstantDelivery = ({ navigation }: any) => {
  const [packageSize, setPackageSize] = useState<'Small' | 'Medium' | 'Large'>(
    'Small',
  );
  const [labelImage, setLabelImage] = useState<any>(null);

  return (
    <Base backgroundColor={color.background}>
      <CustomToolbar
        title="Instant Delivery"
        showLeftIcon
        onLeftPress={() => navigation.goBack()}
        navigation={navigation}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Pickup Location */}
        
        <CustomInput
        label='Pickup Location'
          value="2972 Westheimer, California"
          textStyle={styles.pickupLocationTextStyle}
          editable={false}
          leftIcon={
            <ImageComponent source={images.location} style={styles.locationicon} />
          }
          containerStyle={styles.input}
        />

        {/* Courier Company */}
      
        <CustomInput
        label="Courier Company"
       textStyle={styles.couriertextStyle}
          value="FedEx, 27 Samwell California, USA"
          editable={false}
          leftIcon={
            <ImageComponent source={images.ellipse} style={styles.icon} />
          }
          containerStyle={styles.input}
          rightIcon={
            <ImageComponent source={images.downarrow} style={styles.icon} />
          }
        />
     

        {/* Package Quantity */}
       
        <CustomInput value="1" containerStyle={styles.input} label='Package Quantity'/>

        {/* Package Size */}
        <Text style={styles.label}>Package Size</Text>
       <View style={styles.sizeRow}>
  <CustomImageButton
    title="Small"
    imageSource={images.small}   // svg / image
    selected={packageSize === 'Small'}
    onPress={() => setPackageSize('Small')}
  />

  <CustomImageButton
    title="Medium"
    imageSource={images.small}
    imageStyle={styles.mediumimage}
    selected={packageSize === 'Medium'}
    onPress={() => setPackageSize('Medium')}
  />

  <CustomImageButton
    title="Large"
    imageSource={images.small}
    imageStyle={styles.largeimage}
    selected={packageSize === 'Large'}
    onPress={() => setPackageSize('Large')}
  />
</View>
         
     
    
        <UploadDocument
    
          label='Take a picture of the Label/QR code'
          labelStyle={styles.labelimg}
          imageData={labelImage}
          centerImage={images.camera}
          centerImageStyle={styles.imgcamera}
          centerImageView={styles.imgview}
          onImageSelected={img => setLabelImage(img)}
         
        />

        {/* Button */}
        <CustomButton
          title="Next"
          containerStyle={styles.button}
          onPress={() => {
            console.log({
              packageSize,
              labelImage,
            });
          }}
        />
      </ScrollView>
    </Base>
  );
};

export default InstantDelivery;
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(29),
    paddingBottom: verticalScale(40),
  },
  couriertextStyle:{


fontSize:fontSize.fontSize_14,
color:color.value,

  },

  pickupLocationTextStyle:{
    fontSize:fontSize.fontSize_14,
    
    color:color.value,
    
  },
imgview:{
    width: scale(32),
    height: scale(32),
    borderRadius: scale(32),
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
},
mediumimage:{
width: scale(30),
height: verticalScale(30),
},
largeimage:{
width: scale(40),
height: verticalScale(40),
},
locationicon:{
    width: scale(12),
    height: verticalScale(12),
    paddingLeft:scale(16),
    paddingRight:scale(5),
},
labelimg:{
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight500,
    
    color: color.textSecondary,
    marginBottom: verticalScale(13),
    marginTop: verticalScale(33),
},
  label: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight500,
  
    color: color.textSecondary,
    marginBottom: verticalScale(10),
    marginTop: verticalScale(8),
  },

  input: {
    marginBottom: verticalScale(16),
    
  },
  imgcamera:{
    width: scale(16),
    height: scale(16),
  },

  icon: {
    width: scale(10),
    height: verticalScale(10),
    borderRadius: scale(2),
    paddingLeft:scale(16),
    paddingRight:scale(5),

    // paddingLeft: scale(16),
    
  },

  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(6),
  },

  sizeBox: {
    width: '30%',
    paddingVertical: verticalScale(16),
    borderRadius: scale(6),
    backgroundColor: color.primaryMuted,
    alignItems: 'center',
  },

  sizeBoxActive: {
    borderWidth: 1,
    borderColor: color.primary,
  
  },

  sizeText: {
    fontSize: fontSize.fontSize_12,
    color: color.textSecondary,
  },

  sizeTextActive: {
    
    fontFamily: fontFamily.Medium,
  },

  button: {
    marginTop: verticalScale(105),
  },
});
