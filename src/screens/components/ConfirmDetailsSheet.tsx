import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, KeyboardAvoidingView, Platform} from 'react-native';
import BottomSheetCustom from '@components/BottomSheetCustom';
import CustomButton from '@components/CustomButton';
import { scale, verticalScale } from '@scale';
import color from '@color';
import { fontFamily, fontSize } from '@constants';
import ImageComponent from '@components/ImageComponent';
import images from '@images';
import CustomInput from '@components/CustomInput';
import { Keyboard } from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const ConfirmDetailsSheet = ({ visible, onClose, onContinue }: Props) => {
  const [contentHeight, setContentHeight] = React.useState(0);
  const [tipAmount, setTipAmount] = React.useState('0');
  const [selectedTip, setSelectedTip] = React.useState<string | null>(null);
const [error, setError] = React.useState('');
const [boxValues, setBoxValues] = React.useState([
    '$3',
  '$5',
  '$7',
  '$9',
]);
const handlePresetTip = (value: string) => {
  const numeric = value.replace('$', '');

  setTipAmount(Number(numeric).toFixed(2)); // always formatted
  setSelectedTip(value);
  setError('');
Keyboard.dismiss();
};
const handleTipChange = (text: string) => {
  let value = text.replace(/[^0-9.]/g, ''); // allow numbers + dot

  // ❌ block more than one dot
  const dotCount = (value.match(/\./g) || []).length;
  if (dotCount > 1) return;

  // ❌ remove leading zeros (but allow 0.x)
  if (value.length > 1 && value.startsWith('0') && value[1] !== '.') {
    value = value.replace(/^0+/, '');
  }

  const parts = value.split('.');

  // allow only 2 decimal places
  if (parts.length === 2) {
    value = parts[0] + '.' + parts[1].slice(0, 2);
  }

  // ❌ block decimal if 1000
  if (parts[0] === '1000' && parts.length === 2) return;

  // ❌ block values > 1000
  const numericValue = Number(value);
  if (!isNaN(numericValue) && numericValue > 1000) {
    setError('Tip cannot exceed $1000');
    return;
  }

  setTipAmount(value);
  setSelectedTip(null); // typing removes preset selection
  setError('');
};
const numericTip = Number(tipAmount) || 0;



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
    <BottomSheetCustom visible={visible}  containerStyle={styles.container} onClose={onClose}>
    
                <Text style={styles.sectionLabel}>
                   Confirm Details
                </Text>
                   <KeyboardAvoidingView
                         style={{ flex: 1 }}
                         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                         keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : verticalScale(20)}
                       >


 
      <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                  keyboardShouldPersistTaps="handled"
            >

               

            

                

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                    }}
                >
                    <LocationStepper contentHeight={contentHeight} />

                    <View
                        style={{ flex: 1 }}
                        onLayout={(e) => {
                            setContentHeight(
                                e.nativeEvent.layout.height
                            );
                        }}
                    >
                        <LocationBlock
                            label="Pickup Location"
                            value="2972 Westheimer, California"
                        />

                        <LocationBlock
                            label="Delivery Location"
                            value="FedEx, 27 Samwell California, USA"
                            showVendor
                        />
                    </View>
                </View>


                {/* ================= GRID ================= */}

                <View style={styles.gridRow}>
                    <InfoItem
                        label="Package Weight"
                        value="3KG-8KG"
                    />
                    <InfoItem
                        label="Quantity"
                        value="1"
                    />
                </View>

                <View style={styles.gridRow}>
                    <InfoItem
                        label="Date"
                        value="22/02/2026"
                    />
                    <InfoItem
                        label="Time"
                        value="3:30 PM"
                    />
                </View>

                <InfoItem
                    label="Estimated Delivery fee:"
                    value="$160"
                    full
                    valueStyle={styles.estimatedDeliveryFee}
                    labelStyle={styles.infodelivery}
                />
                <CustomInput   label='Add Tip'  value ={tipAmount}  onChangeText={handleTipChange}
                editable
                keyboardType="numeric"
                labelStyle={styles.addtip} fieldStyle ={styles.addtipcont}
                leftIcon={<ImageComponent source={images.dollar} style={styles.dollarsymbol}/>}
                />
        <View style={styles.mainbelowcont}>
          
{boxValues.map((value, index) => (
  <Pressable
    key={index}
    onPress={() => {
          handlePresetTip(value);
      
  
    }}
    style={styles.belowcont}
  >
    <Text style={styles.boxText}>{value}</Text>
  </Pressable>
))}
</View>
                <BarcodeBlock/>

                     <Text style={styles.editDetails} onPress={onClose}>Edit Details</Text>

                        <CustomButton
          title="Continue to Payment"
          onPress={onContinue}

        />
                    

                {/* ================= QR ================= */}
         

            </ScrollView>
</KeyboardAvoidingView>
            {/* Bottom Button */}
         
        </BottomSheetCustom>
    );
};

interface StepperProps {
    contentHeight: number;
}

const LocationStepper: React.FC<StepperProps> = ({
    contentHeight,
}) => {
    /* Dot spacing height */
    const DOT_SPACING = verticalScale(18);

    /* Calculate dots */
    const dotCount = Math.max(
        1,
        Math.floor(contentHeight / DOT_SPACING) - 2
    );

    const dots = Array.from({
        length: dotCount,
    });

    return (
        <View style={styles.stepperContainer}>
            {/* Pickup Icon */}
            <ImageComponent
                source={images.location}
                style={styles.stepperPickupIcon}
            />

            {/* Dynamic Dots */}
            <View style={{
                gap: verticalScale(6), marginVertical: verticalScale(5),
            }}>
                {dots.map((_, index) => (
                    <View
                        key={index}
                        style={styles.stepperDot}
                    />
                ))}
            </View>

            {/* Delivery Circle */}
            {dots.length > 0 && (
                <View style={styles.stepDeliveryCircleContainer}>
                    <ImageComponent
                        source={images.greenIndicator}
                        style={styles.stepperDeliveryCircle}
                    />
                </View>
            )}
        </View>
    );
};
const LocationBlock = ({
    label,
    value,
    showVendor,
    
}: any) => {
    return (
        <View style={styles.locationBlock}>

            {/* LEFT STEPPER */}

            {/* TEXT */}
            <View style={{ flex: 1, marginLeft: scale(14) }}>
                <Text style={styles.locationLabel}>
                    {label}
                </Text>

                <Text style={styles.locationText}>
                    {value}
                </Text>
            </View>

            {/* Vendor Logo */}
            {showVendor && (
                <ImageComponent
                    source={images.dummyCompany}
                    style={styles.vendorLogo}
                />
            )}
        </View>
   );
};
const InfoItem = ({
    label,
    value,
    full,
    valueStyle,
    labelStyle
}: any) => {
    return (
        <View
            style={[
                styles.infoItem,
                full && { width: '100%' },
            ]}
        >
            <Text style={[styles.infoLabel, labelStyle]}>
                {label}
            </Text>

            <Text style={[styles.infoValue, valueStyle]}>
                {value}
            </Text>
        </View>
    );
};
const BarcodeBlock = ({ title }: any) => {
    return (
        <View style={styles.barcodeBlock}>

            <Text style={styles.barcodeTitle}>
                {title}
            </Text>

            <ImageComponent
                source={images.dummyBarCode}
                style={styles.barcodeImg}
            />
        </View>
    );
};

export default ConfirmDetailsSheet;
const styles = StyleSheet.create({
 container: {
        paddingHorizontal: scale(10),
       height:verticalScale(650)
    },
    mainbelowcont:{
flexDirection:'row',
gap:scale(11),
marginLeft:scale(2)
    },
    belowcont:{
      width:scale(45),
      height:verticalScale(40),
      borderRadius:scale(5),
      borderColor:color.primary,
      borderWidth:scale(1),
      alignItems:'center',
      justifyContent:'center',  
     
    },
    dollarsymbol:{
height:scale(14),
width:scale(14),
paddingRight:scale(2),

    },
    infodelivery:{
color:color.textMuted,
    },
    content: {
        paddingHorizontal: scale(20),
        paddingTop: verticalScale(18),
        paddingBottom: verticalScale(28),
    },
      editDetails: {
    textDecorationLine: 'underline',
    marginBottom: verticalScale(20),
    color: color.textContrast,
    alignSelf: 'center',
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight500,
  },
  boxText:{
fontSize:fontSize.fontSize_12,
fontFamily:fontFamily.weight400,
color:color.textMuted,
  },
  

    button: {
        margin: verticalScale(20),
    },
    addtip:{
marginTop:verticalScale(20),
color:color.error,
fontSize:fontSize.fontSize_13,
fontFamily:fontFamily.weight400,

    },
    addtipcont:{
height:verticalScale(40),
marginBottom:verticalScale(20),
paddingVertical:0,
color:color.delivery.value,
paddingLeft:scale(16)


    },

    /* Owner */

    sectionLabel: {
        fontSize: fontSize.fontSize_20,
        fontFamily: fontFamily.weight800,
        color: color.textMain,
        marginBottom: verticalScale(16),
       marginTop:verticalScale(10),
       marginLeft:scale(26)
    },
  

    ownerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(24),
        gap: scale(12)
    },

    ownerName: {
        fontSize: fontSize.fontSize_16,
        fontFamily: fontFamily.weight500,
        color: color.text,
    },

    returnText: {
        fontSize: fontSize.fontSize_12,
        fontFamily: fontFamily.weight500,
        color: color.textMain,
        marginTop: verticalScale(4),
        
    },

    callBox: {
        width: scale(32),
        height: verticalScale(32),
        borderRadius: verticalScale(5),
        backgroundColor: color.surfaceSecondary,
        alignItems: 'center',
        justifyContent: 'center',
    },

    callIcon: {
        width: scale(18),
        height: scale(18),
    },

    /* Location */

    locationBlock: {
        marginBottom: verticalScale(18),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

    locationLabel: {
        fontSize: fontSize.fontSize_12,
        fontFamily: fontFamily.weight400,
        color: color.textMuted,
        marginBottom: verticalScale(4),
    },

    locationRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    locationIcon: {
        width: scale(12),
        height: verticalScale(12),
    },

    locationText: {
        flex: 1,
        fontFamily: fontFamily.weight500,
        fontSize: fontSize.fontSize_14,
        color: color.text,
    },

    vendorLogo: {
        width: scale(42),
        height: verticalScale(18),
        resizeMode: 'contain',
        
    },

    greenIndicatorIcon: {
        width: scale(10),
        height: verticalScale(10),

    },

    /* Grid */

    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: verticalScale(14),
        gap:scale(48),
       
    },

    infoItem: {
        width: '48%',
    },

    infoLabel: {
        fontSize: fontSize.fontSize_12,
        fontFamily: fontFamily.weight400,
        color: color.textMuted,
        
    },

    infoValue: {
        fontSize: fontSize.fontSize_14,
        fontFamily: fontFamily.weight500,
        color: color.textMain,
        marginTop: verticalScale(2),
    },

    estimatedDeliveryFee: {
        color: color.delivery.price,
        fontSize: fontSize.fontSize_16,
        fontFamily: fontFamily.weight800,
        marginTop: verticalScale(2),
      
        
    },

    /* Barcode */

    barcodeBlock: {
    },

    barcodeTitle: {
        fontSize: fontSize.fontSize_12,
        fontFamily: fontFamily.weight400,
        color: color.textMuted,
        marginBottom: verticalScale(10),
    },

    barcodeImg: {
        width: '100%',
        height: verticalScale(102),
        resizeMode: 'contain',
        marginBottom: verticalScale(18),
        
    },
    avatarBox: {
        width: scale(56),
        height: scale(56),
        borderRadius: scale(56),
        backgroundColor: color.primary,
        alignItems: 'center',
        justifyContent: 'center',

    },

    avatarText: {
        fontFamily: fontFamily.weight500,
        fontSize: fontSize.fontSize_16,
        color: color.textSecondary,
        lineHeight: verticalScale(20),
        marginTop: verticalScale(4),
    },
    locationIconContainer: {
        width: scale(12),
        height: verticalScale(12),
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepperDotsContainer: {
        gap: verticalScale(6),
        marginVertical: verticalScale(4),
    },
    /* =========================
   Location Stepper
   ========================= */


    stepperContainer: {
        alignItems: 'center',
        width: scale(26),
    },

    stepperPickupIcon: {
        width: scale(20),
        height: scale(20),
        resizeMode: 'contain',
    },

    stepperDot: {
        width: scale(4),
        height: scale(4),
        borderRadius: scale(4),
        backgroundColor: color.locationStepperDot,
    },


    stepperDeliveryCircle: {
        width: scale(10),
        height: scale(10),
    },


    stepDeliveryCircleContainer: {
        width: scale(12),
        height: scale(12),
        alignItems: 'center',
        justifyContent: 'center',

    },

});

