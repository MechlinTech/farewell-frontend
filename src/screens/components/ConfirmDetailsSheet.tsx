import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomSheetCustom from '@components/BottomSheetCustom';
import CustomButton from '@components/CustomButton';
import { scale, verticalScale } from '@scale';
import color from '@color';
import { fontFamily, fontSize } from '@constants';
import ImageComponent from '@components/ImageComponent';
import images from '@images';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const ConfirmDetailsSheet = ({ visible, onClose }: Props) => {


    const [confirmData, setConfirmData] = React.useState({
  pickupLocation: '2972 Westheimer, California',
  deliveryLocation: 'FedEx, 27 Samwell California, USA',
  packageWeight: '3KG-8KG',
  quantity: '2000',
  date: '22/02/2026',
  time: '3:30 PM',
  estimatedFee: '$160',
});
  return (
    <BottomSheetCustom visible={visible} onClose={onClose} containerStyle={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Confirm Details</Text>

        {/* PICKUP + DELIVERY BLOCK */}
        <View style={styles.locationWrapper}>

          {/* PICKUP */}
          <View style={styles.locationRow}>
            <ImageComponent
              source={images.location}
              style={styles.locationIcon}
            />

            <View style={styles.textContainer}>
              <Text style={styles.Commonlabel}>Pickup Location</Text>
              <Text style={styles.Commonvalue}>
               {confirmData.pickupLocation}
              </Text>
            </View>
          </View>

          {/* DELIVERY */}
          <View style={styles.locationRow}>
            <ImageComponent
              source={images.greenIndicator}
              style={styles.greenIndicatorIcon}
            />

            <View style={styles.deliveryRow}>
              <View>
                <Text style={styles.Commonlabel}>Delivery Location</Text>
                <Text style={styles.Commonvalue}>
                 {confirmData.deliveryLocation}
                </Text>
              </View>

              <ImageComponent
                source={images.dummyCompany}
                style={styles.fedexLogo}
              />
            </View>
          </View>
        </View>

        {/* PACKAGE DETAILS */}
        <View style={styles.row}>
          <View>
            <Text style={styles.packagelabel}>Package Weight</Text>
            <Text style={styles.packagevalue}>{confirmData.packageWeight}</Text>
          </View>

          <View>
            <Text style={styles.quanitylabel}>Quantity</Text>
            <Text style={styles.quantityvalue}>{confirmData.quantity}</Text>
          </View>
        </View>

        <View style={styles.datetimerow}>
          <View>
            <Text style={styles.datelabel}>Date</Text>
            <Text style={styles.datevalue}>{confirmData.date}</Text>
          </View>

          <View>
            <Text style={styles.timelabel}>Time</Text>
            <Text style={styles.datevalue}>{confirmData.time}</Text>
          </View>
        </View>

        <Text style={styles.estimatedlabel}>Estimated Delivery fee</Text>
        <Text style={styles.fee}>{confirmData.estimatedFee}</Text>

        <ImageComponent 
        source={images.dummyBarCode}
        style={styles.imageBox}
     
        
        />
        <Text style={styles.editDetails} onPress={onClose}>Edit Details</Text>

        <CustomButton
          title="Continue to Payment"
          onPress={() => console.log('Clicked Continue')}
          
        />
      </ScrollView>
    </BottomSheetCustom>
  );
};


export default ConfirmDetailsSheet;
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(30),
  },
  timelabel:{
    paddingRight: scale(66),
     fontSize: fontSize.fontSize_12,
    color: color.textMuted,

  },
  datetimerow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(14),
  },

  datelabel:{
    fontSize: fontSize.fontSize_12,
    color: color.textMuted,
    marginTop:verticalScale(4)
    
  },
  datevalue:{
    fontSize: fontSize.fontSize_14,
    marginTop:verticalScale(4),
    marginBottom:verticalScale(8)
  },
  packagevalue:{
    fontSize: fontSize.fontSize_14,
    marginTop:verticalScale(4)
    
  },
  packagelabel:{
    fontSize: fontSize.fontSize_12,
    color: color.textMuted,
marginTop:verticalScale(16)
  },
  container:{
    height:verticalScale(600)
  },
  estimatedlabel:{
    marginTop:verticalScale(14)
  },

  title: {
    fontSize: fontSize.fontSize_20,
    fontFamily: fontFamily.weight800,
    marginBottom: verticalScale(16),
    color: color.black,
    marginTop: verticalScale(20),
  },

  /* LOCATION SECTION */
  locationWrapper: {
    marginBottom: verticalScale(10),
  },
  editDetails:{
    textDecorationLine: 'underline',
    marginBottom:verticalScale(20),
    color: color.textContrast,
    alignSelf:'center',
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight500,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: verticalScale(12),
  },

  textContainer: {
    marginLeft: scale(10),
    flex: 1,
  },

  deliveryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: scale(10),
    paddingRight: scale(5),
    flex: 1,
  },

  locationIcon: {
    width: scale(14),
    height: scale(14),
    marginTop: scale(4),
     marginRight: scale(3)
  },

    greenIndicatorIcon: {
    width: scale(10),
    height: scale(10),
    marginTop: scale(6),
    marginRight: scale(5)
  },

  fedexLogo: {
    width: scale(40),
    height: scale(40),
    resizeMode: 'cover',
     transform: [{ translateY: verticalScale(8) },{translateX: scale(14)}],
    
    
  },

  quanitylabel: {
    fontSize: fontSize.fontSize_12,
    color: color.textMuted,
    paddingRight: scale(45),
    marginBottom:verticalScale(2),
    marginTop:verticalScale(14)
  },

  quantityvalue: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight500,
    color: color.text,
    paddingTop: verticalScale(4)
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(2),

  },

  fee: {
    fontSize: fontSize.fontSize_18,
    fontFamily: fontFamily.weight700,
    marginTop:verticalScale(8)
  },

  imageBox: {
    width:scale(320),
    height: verticalScale(150),
    marginBottom: verticalScale(5),

    alignSelf: 'center',
    // backgroundColor:'red'
    
  },
Commonvalue:{
   fontSize: fontSize.fontSize_14,
    marginTop:verticalScale(4)
},
Commonlabel:{
fontSize: fontSize.fontSize_12,
    color: color.textMuted,
},
  
});

