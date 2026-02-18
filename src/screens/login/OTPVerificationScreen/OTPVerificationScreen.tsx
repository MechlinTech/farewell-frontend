import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseWrapper from '@components/Base';
import HeadingGroup from '@components/HeadingGroupComponent';
import { scale, verticalScale } from '@scale';
import { Text, type ViewStyle, Alert, Pressable } from 'react-native';
import { OTPInput, type SlotProps } from 'input-otp-native';
import type { OTPInputRef } from 'input-otp-native';
import { useRef, useState } from 'react';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  useSharedValue,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import color from '@color';
import CustomButton from '@components/CustomButton';
import { fontFamily, fontSize } from '@constants';
import Navigator from '@Navigator';

const OTP_LENGTH = 4;

const OTPVerificationScreen = ({ navigation, route }: any) => {
  // const email = useSelector((state: any) => state.users.email);
  const [otp, setOtp] = useState('');
  const ref = useRef<OTPInputRef>(null);

  const handleVerify = (code: string) => {
    if (code.length !== OTP_LENGTH) return;
    setOtp(code);
    // TODO: Call your OTP verification API here
    Alert.alert('Completed with code:', code);
    handlesend();
  };

  const onComplete = (code: string) => {
    setOtp(code);
    handleVerify(code);
  };
  const handlesend = () => {
    if (route.params.userRole === 'rider') {
      Navigator.resetStackScreen(navigation, 'AddVehicleDetails');
    } else {
      Navigator.resetStackScreen(navigation, 'CustomerHomeStack', {
        screen: 'CustomerCurrentLocation',
      });
    }
  };
  return (
    <BaseWrapper container_style={styles.container} fullScreenMode={true}>
      <HeadingGroup
        heading="Enter the 4-digit code"
        subheading={
          <>
            Please input the verification code sent to your email{' '}
            <Text style={{ fontFamily: fontFamily.Black }}>
              jacobsmith123@gmail.com
            </Text>
          </>
        }
      />

      <OTPInput
        ref={ref}
        onComplete={onComplete}
        onChange={text => setOtp(text)}
        pattern={/^[0-9]*$/}
        containerStyle={styles.OTPcontainer}
        maxLength={OTP_LENGTH}
        render={({ slots }) => (
          <View style={styles.slotsContainer}>
            {slots.map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </View>
        )}
      />
      <View style={styles.resendCodeRow}>
        <Text style={styles.resendCodeText}>
          Didn't get any code yet?{' '}
          <Text
            style={[styles.resendCodeTextLink]}
            onPress={() => {
              Alert.alert('hello');
            }}
          >
            Resend code
          </Text>
        </Text>
      </View>
      <View style={styles.verifyButtonContainer}>
        <CustomButton
          title="Verify"
          disabled={otp.length !== OTP_LENGTH}
          onPress={() => handleVerify(otp)}
        />
      </View>
    </BaseWrapper>
  );
};

function Slot({ char, isActive, hasFakeCaret }: SlotProps) {
  return (
    <View style={[styles.slot, isActive && styles.activeSlot]}>
      {char !== null && <Text style={styles.char}>{char}</Text>}
      {hasFakeCaret && <FakeCaret />}
    </View>
  );
}

function FakeCaret({ style }: { style?: ViewStyle }) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0, { duration: 500 }),
        withTiming(1, { duration: 500 }),
      ),
      -1,
      true,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={styles.fakeCaretContainer}>
      <Animated.View style={[styles.fakeCaret, style, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(176),
    paddingHorizontal: scale(33),
  },
  userRoleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: scale(12),
  },
  OTPcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: verticalScale(30),
  },
  resendCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  resendCodeText: {
    fontSize: fontSize.fontSize_12,
    color: color.textSecondary,
  },
  verifyButtonContainer: {
    marginTop: verticalScale(46),
  },
  resendCodeTextLink: {
    color: color.textAccent,
    textDecorationLine: 'underline',
  },
  slotsContainer: {
    flexDirection: 'row',
    gap: scale(24),
  },
  slot: {
    width: scale(48),
    height: verticalScale(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(5),
    backgroundColor: color.primaryMuted,
  },
  activeSlot: {
    borderColor: color.primary,
    borderWidth: scale(1),
  },
  char: {
    fontSize: fontSize.fontSize_24,
    fontFamily: fontFamily.weight800,
    color: color.inputText,
  },
  /* Caret */
  fakeCaretContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fakeCaret: {
    width: scale(2),
    height: verticalScale(28),
    backgroundColor: color.black,
    borderRadius: scale(1),
  },
});

export default OTPVerificationScreen;
