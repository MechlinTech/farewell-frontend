import color from "@color";
import CenterModal from "@components/CenterModal";
import CustomButton from "@components/CustomButton";
import ImageComponent from "@components/ImageComponent";
import { fontFamily, fontSize } from "@constants";
import images from "@images";
import { scale, verticalScale } from "@scale";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Navigator from "@Navigator";
import LottieView from "lottie-react-native";
import lottie from '../../assets/lottiefy/confetti.json'

interface Props {
    visible: boolean;
    onClose: () => void;
    navigation: any;
}

const PaymentSuccessModal = ({ visible, onClose, navigation }: Props) => {
    const handleOk = () => {
        Navigator.switchToCustomerRootTab(navigation, 'History');
        onClose();
    };
    return (
        <CenterModal visible={visible} onClose={onClose} modalStyle={styles.modal} disableClose={true}>
            <View pointerEvents="none" style={styles.lottieWrapper}>
                <LottieView
                    source={lottie}
                    autoPlay
                    loop={false}
                    style={styles.lottiestyle}
                />
            </View>

            <View style={styles.maincontainer}>
                <View style={styles.iconContainer}>
                    <ImageComponent
                        source={images.check}
                        style={styles.image}
                    />
                </View>

                <Text style={styles.title}>Payment Successful!</Text>
                <Text style={styles.text}>Your payment is successfull. Assigning a driver for your package pickup</Text>

                <CustomButton title="Ok" onPress={handleOk} containerStyle={styles.buttoncontainer} textStyle={styles.buttontext} />
            </View>
        </CenterModal>
    );
};

export default PaymentSuccessModal;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        color: color.textContrast,
        fontSize: fontSize.fontSize_16,
        fontFamily: fontFamily.weight800,
    },
    image: {
        width: scale(35),
        height: verticalScale(35),


    },
    lottieWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 150,
        zIndex: 999,
    },
    buttoncontainer: {
        width: scale(156),
        height: verticalScale(56),


        alignSelf: 'center',
        borderRadius: scale(10),

    },
    lottiestyle: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: fontSize.fontSize_16,
        color: color.darkText,
        lineHeight: verticalScale(24),
        fontFamily: fontFamily.weight400,
        marginTop: verticalScale(11),
        marginBottom: verticalScale(28),

        textAlign: 'center',
    },
    modal: {
        width: scale(320),
        height: verticalScale(370),
        borderRadius: scale(39),


    },
    iconContainer: {
        backgroundColor: color.logoBackground,
        borderRadius: 50,
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',


    },
    title: {
        fontSize: fontSize.fontSize_20,
        fontFamily: fontFamily.Heavy,
        marginTop: verticalScale(27),
    }
})


