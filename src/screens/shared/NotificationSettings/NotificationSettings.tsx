import * as React from 'react';
import BaseWrapper from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import { fontFamily, fontSize } from '@constants';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import color from '@color';
import { scale, verticalScale } from '@scale';

interface AnimatedSwitchProps {
    value: boolean;
    onValueChange: () => void;
    duration?: number;
}

const AnimatedSwitch = ({
    value,
    onValueChange,
    duration = 300,
}: AnimatedSwitchProps) => {
    const progress = useSharedValue(value ? 1 : 0);
    const height = useSharedValue(0);
    const width = useSharedValue(0);

    useEffect(() => {
        progress.value = withTiming(value ? 1 : 0, { duration });
    }, [value]);

    const trackStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            progress.value,
            [0, 1],
            [color.background, color.background]
        ),
        borderRadius: height.value / 2,
    }));

    const thumbStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: interpolate(
                    progress.value,
                    [0, 1],
                    [0, width.value - height.value]
                ),
            },
        ],
        backgroundColor: interpolateColor(
            progress.value,
            [0, 1],
            [color.background, color.success]
        ),
        borderRadius: height.value / 2,
    }));

    return (
        <Pressable onPress={onValueChange}>
            <Animated.View
                onLayout={(e) => {
                    height.value = e.nativeEvent.layout.height;
                    width.value = e.nativeEvent.layout.width;
                }}
                style={[styles.track, trackStyle]}
            >
                <Animated.View style={[styles.thumb, thumbStyle]} />
            </Animated.View>
        </Pressable>
    );
};

const NotificationSettings = ({ navigation }: any) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEmailEnabled, setIsEmailEnabled] = useState(false);
    const [isGeneralEnabled, setIsGeneralEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleEmailSwitch = () => setIsEmailEnabled(previousState => !previousState);
    const toggleGeneralSwitch = () => setIsGeneralEnabled(previousState => !previousState);
    return (
        <BaseWrapper>
            <CustomToolbar
                title="Notification Settings"
                onLeftPress={() => navigation.goBack()}
                showLeftIcon
                navigation={navigation}
            />
            <View style={styles.container}>
                <View style={styles.notificationContainer}>
                    <View style={styles.notificationRow}>
                        <Text style={styles.notificationTitle}>Enable Notifications</Text>
                        <AnimatedSwitch
                            value={isEnabled}
                            onValueChange={toggleSwitch}
                        />
                    </View>
                    <View style={styles.notificationRow}>
                        <Text style={styles.notificationTitle}>Email Notifications</Text>
                        <AnimatedSwitch
                            value={isEmailEnabled}
                            onValueChange={toggleEmailSwitch}
                        />
                    </View>
                    <View style={styles.notificationRow}>
                        <Text style={styles.notificationTitle}>General Notifications</Text>
                        <AnimatedSwitch
                            value={isGeneralEnabled}
                            onValueChange={toggleGeneralSwitch}
                        />
                    </View>
                </View>
            </View>
        </BaseWrapper>
    );
};
export default NotificationSettings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(30),
        paddingVertical: verticalScale(16),
    },
    notificationContainer: {
        gap: verticalScale(14),
    },
    notificationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    notificationTitle: {
        fontSize: fontSize.fontSize_14,
        fontFamily: fontFamily.weight800,
        color: color.black,
    },
    switchComponent: {
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: scale(1),
        shadowRadius: scale(10),
        elevation: scale(10),
    },
    track: {
        width: scale(32),
        height: verticalScale(16),
        padding: scale(2),
        justifyContent: 'center',
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: scale(6),
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    thumb: {
        height: verticalScale(12),
        width: scale(12),
        backgroundColor: color.background,
        elevation: 3,
    },
});