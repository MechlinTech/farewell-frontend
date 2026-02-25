import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import BaseWrapper from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import CustomButton from '@components/CustomButton';
import ImageComponent from '@components/ImageComponent';

import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import color from '@color';
import images from '@images';
import Rating from '@components/Rating';

const CustomerDeliveryDetails = ({ navigation }: any) => {
  const [contentHeight, setContentHeight] = React.useState(0);

  return (
    <BaseWrapper container_style={styles.container}>
      <CustomToolbar
        title="Delivery Details"
        showLeftIcon
        navigation={navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* ================= OWNER ================= */}

        <Text style={styles.sectionLabel}>Rider Detail</Text>

        <View style={styles.ownerRow}>
          <View style={styles.avatarBox}>
            <Text style={styles.avatarText}>JS</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.ownerName}>Jacob Smith</Text>

            <Text style={styles.returnText}>24 Returns</Text>

            {/* Rating */}
            <Rating
              rating={4.1}
              count={5}
              size={scale(16)}
              containerStyle={{ marginTop: verticalScale(4) }}
            />
          </View>
        </View>

        {/* ================= LOCATIONS ================= */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <LocationStepper contentHeight={contentHeight} />

          <View
            style={{ flex: 1 }}
            onLayout={e => {
              setContentHeight(e.nativeEvent.layout.height);
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
          <InfoItem label="Package Weight" value="3KG-8KG" />
          <InfoItem label="Quantity" value="1" />
        </View>

        <View style={styles.gridRow}>
          <InfoItem label="Date" value="22/02/2026" />
          <InfoItem label="Time" value="3:30 PM" />
        </View>

        <InfoItem
          label="Estimated Delivery fee:"
          value="$160"
          full
          valueStyle={styles.estimatedDeliveryFee}
        />

        {/* ================= QR ================= */}
        <View
          style={{
            gap: verticalScale(22),
            marginTop: verticalScale(22),
          }}
        >
          <BarcodeBlock title="Pickup Package Qr/Label Detail" />

          <BarcodeBlock title="Delivered Package Qr/Label Detail" />
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <CustomButton
        title="Cancel Delivery"
        containerStyle={styles.button}
        gradientColors={[color.surfaceSecondary, color.surfaceSecondary]}
        onPress={() => navigation.goBack()}
      />
    </BaseWrapper>
  );
};

interface StepperProps {
  contentHeight: number;
}

const LocationStepper: React.FC<StepperProps> = ({ contentHeight }) => {
  /* Dot spacing height */
  const DOT_SPACING = verticalScale(18);

  /* Calculate dots */
  const dotCount = Math.max(1, Math.floor(contentHeight / DOT_SPACING) - 2);

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
      <View
        style={{
          gap: verticalScale(6),
          marginVertical: verticalScale(5),
        }}
      >
        {dots.map((_, index) => (
          <View key={index} style={styles.stepperDot} />
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

const LocationBlock = ({ label, value, showVendor }: any) => {
  return (
    <View style={styles.locationBlock}>
      {/* LEFT STEPPER */}

      {/* TEXT */}
      <View style={{ flex: 1, marginLeft: scale(14) }}>
        <Text style={styles.locationLabel}>{label}</Text>

        <Text style={styles.locationText}>{value}</Text>
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

const InfoItem = ({ label, value, full, valueStyle }: any) => {
  return (
    <View style={[styles.infoItem, full && { width: '100%' }]}>
      <Text style={styles.infoLabel}>{label}</Text>

      <Text style={[styles.infoValue, valueStyle]}>{value}</Text>
    </View>
  );
};

const BarcodeBlock = ({ title }: any) => {
  return (
    <View style={styles.barcodeBlock}>
      <Text style={styles.barcodeTitle}>{title}</Text>

      <ImageComponent source={images.dummyBarCode} style={styles.barcodeImg} />
    </View>
  );
};

export default CustomerDeliveryDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(10),
    flex: 1,
  },
  content: {
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(18),
    paddingBottom: verticalScale(54),
  },

  button: {
    margin: verticalScale(20),
  },

  /* Owner */

  sectionLabel: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight400,
    color: color.textSecondary,
    marginBottom: verticalScale(16),
  },

  ownerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(24),
    gap: scale(12),
  },

  ownerName: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight500,
    color: color.text,
  },

  returnText: {
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.weight500,
    color: color.textSecondary,
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

  barcodeBlock: {},

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
