import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseWrapper from '@components/Base';
import HeadingGroup from '@components/HeadingGroupComponent';
import { scale, verticalScale } from '@scale';
import { Text, type ViewStyle, Alert, Pressable } from 'react-native';
import { OTPInput, type SlotProps } from 'input-otp-native';
import type { OTPInputRef } from 'input-otp-native';
import { useRef } from 'react';
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
import { fontFamily } from '@constants';

const OTPVerificationScreen = () => {
  const ref = useRef<OTPInputRef>(null);
  const onComplete = (code: string) => {
    Alert.alert('Completed with code:', code);
    ref.current?.clear();
  };
  return (
    <BaseWrapper container_style={styles.container} fullScreenMode={true}>
      <HeadingGroup
        heading="Enter the 4-digit code"
        subheading={
          <>
            Please input the verification code sent to your email id{' '}
            <Text style={{ fontFamily: fontFamily.Black }}>
              jacobsmith123@gmail.com
            </Text>
          </>
        }
      />

      <OTPInput
        ref={ref}
        onComplete={onComplete}
        pattern={/^[0-9]*$/}
        containerStyle={styles.OTPcontainer}
        maxLength={4}
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
          onPress={() => {
            Alert.alert('Verify');
          }}
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
    fontSize: 12,
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
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: color.primaryMuted,
  },
  activeSlot: {
    borderColor: color.primary,
    borderWidth: 1,
  },
  char: {
    fontSize: 24,
    fontWeight: '500',
    color: '#2D2D2D',
  },
  /* Caret */
  fakeCaretContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fakeCaret: {
    width: 2,
    height: 28,
    backgroundColor: '#000',
    borderRadius: 1,
  },
});

export default OTPVerificationScreen;
