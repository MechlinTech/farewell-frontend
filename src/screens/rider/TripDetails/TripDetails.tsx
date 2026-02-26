import * as React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    
} from 'react-native';

import BaseWrapper from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import ImageComponent from '@components/ImageComponent';

import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import color from '@color';
import images from '@images';
import CustomButton from '@components/CustomButton';

const TripDetails = ({ navigation, route }: any) => {

    const { title} = route.params;
    const [contentHeight, setContentHeight] = React.useState(0);

    return (
        <BaseWrapper container_style={styles.container}>

            <CustomToolbar
                title={title}
                showLeftIcon
                navigation={navigation}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* ================= LOCATIONS ================= */}

                <View style={styles.locationRow}>
                    <LocationStepper contentHeight={contentHeight} />

                    <View
                        style={{ flex: 1, gap: verticalScale(12) }}
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
                <View style={{ marginTop: verticalScale(15), gap: verticalScale(15) }}>
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
                </View>

                {/* ================= BARCODE ================= */}

                <BarcodeBlock
                />

            </ScrollView>

            {/* ================= BOTTOM BUTTONS ================= */}

            <View style={styles.bottomRow}>

                <CustomButton
                    title="Reject"
                    onPress={() => navigation.goBack()}
                    pressableStyle={styles.acceptBtn}
                    textStyle={styles.rejectText}
                    gradientColors={[color.errorSurface, color.errorSurface]}
                    borderRadius={scale(3)}

                />

                <CustomButton
                    title="Accept"
                    onPress={() => navigation.goBack()}
                    pressableStyle={styles.acceptBtn}
                    textStyle={styles.acceptText}
                    gradientColors={[color.successBg, color.successBg]}
                    borderRadius={scale(3)}
                />

            </View>

        </BaseWrapper>
    );
};

export default TripDetails;

/* =========================
   Components
========================= */

const LocationStepper = ({ contentHeight }: any) => {

    const DOT_SPACING = verticalScale(18);

    const dotCount = Math.max(
        1,
        Math.floor(contentHeight / DOT_SPACING) - 2
    );

    const dots = Array.from({ length: dotCount });

    return (
        <View style={styles.stepperContainer}>

            <ImageComponent
                source={images.location}
                style={styles.stepperPickupIcon}
            />

            <View style={styles.stepperDotsContainer}>
                {dots.map((_, index) => (
                    <View
                        key={index}
                        style={styles.stepperDot}
                    />
                ))}
            </View>

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

const LocationBlock = ({ label, value, showVendor }: any) => {
    return (
        <View style={styles.locationBlock}>

            <View style={{ flex: 1, marginLeft: scale(14) }}>
                <Text style={styles.locationLabel}>
                    {label}
                </Text>

                <Text style={styles.locationText}>
                    {value}
                </Text>
            </View>

            {showVendor && (
                <ImageComponent
                    source={images.dummyCompany}
                    style={styles.vendorLogo}
                />
            )}

        </View>
    );
};

const InfoItem = ({ label, value }: any) => {
    return (
        <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>
                {label}
            </Text>

            <Text style={styles.infoValue}>
                {value}
            </Text>
        </View>
    );
};

const BarcodeBlock = () => {
    return (


        <ImageComponent
            source={images.dummyBarCode}
            style={styles.barcodeImg}
        />
    );
};

/* =========================
   Styles
========================= */

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(10),
        flex: 1
    },

    content: {
        paddingHorizontal: scale(20),
        paddingTop: verticalScale(18),
        paddingBottom: verticalScale(20),
    },

    /* Location */

    locationRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    locationBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    locationLabel: {
        fontSize: fontSize.fontSize_12,
        fontFamily: fontFamily.weight400,
        color: color.textMuted,
        marginBottom: verticalScale(4),
    },

    locationText: {
        flex: 1,
        fontFamily: fontFamily.weight500,
        fontSize: fontSize.fontSize_14,
        color: color.text,
    },

    vendorLogo: {
        width: scale(36),
        height: verticalScale(20),
    },

    /* Stepper */

    stepperContainer: {
        alignItems: 'center',
        width: scale(26),
    },

    stepperPickupIcon: {
        width: scale(20),
        height: scale(20),
        resizeMode: 'contain',
    },

    stepperDotsContainer: {
        gap: verticalScale(6),
        marginVertical: verticalScale(6),
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

    /* Grid */

    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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

    /* Barcode */

    barcodeTitle: {
        fontSize: fontSize.fontSize_12,
        fontFamily: fontFamily.weight400,
        color: color.textMuted,
        marginBottom: verticalScale(10),
    },

    barcodeImg: {
        width: '100%',
        height: verticalScale(110),
        resizeMode: 'contain',
        marginTop: verticalScale(24)
    },

    /* Bottom Buttons */

    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: scale(15),
    },

    rejectBtn: {
        width: '48%',
        backgroundColor: '#F5D0D0',
        paddingVertical: verticalScale(14),
        borderRadius: verticalScale(6),
        alignItems: 'center',
    },

    acceptBtn: {
        width: scale(155),

    },

    rejectText: {
        color: color.error,
        fontFamily: fontFamily.Heavy,
        fontSize: fontSize.fontSize_16,
    },

    acceptText: {
        color: color.success,
        fontFamily: fontFamily.Heavy,
        fontSize: fontSize.fontSize_16,
    },
});