import * as React from 'react';
import {
    StatusBar,
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Base from '../../../components/Base';
import color from '@color';
import { fontFamily, fontSize } from '@constants';
import { Utils } from '@Utils';
import ImageComponent from '@components/ImageComponent';
import images from '@images';
import { scale, verticalScale } from '@scale';
import MaterialCommunityIcons from
    'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    interpolateColor,

} from 'react-native-reanimated';
import RequestCard from './components/RequestCard';


const RiderHome = ({ navigation }: any) => {
    /* ---------------- STATE ---------------- */

    const [showEarnings, setShowEarnings] =
        React.useState(false);

    const [isOnline, setIsOnline] =
        React.useState(true);

    const [requests] = React.useState([
        {
            id: 1,
            bookingId: 'Booking1234',
            location: 'California - FedEx',
            time: 'Today, 2:43pm',
        },
        {
            id: 2,
            bookingId: 'Booking5678',
            location: 'New York - DHL',
            time: 'Today, 5:10pm',
        },
    ]);

    /* ---------------- TOGGLE ANIMATION ---------------- */

    const toggleAnim = useSharedValue(1);
    const travelDistance = scale(16);

    const onToggle = () => {
        const newValue = !isOnline;
        setIsOnline(newValue);

        toggleAnim.value = withSpring(
            newValue ? 1 : 0
        );
    };

    const dotStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX:
                    toggleAnim.value * travelDistance,
            },
        ],
        backgroundColor: interpolateColor(
            toggleAnim.value,
            [0, 1],
            ['#BDBDBD', color.success]
        ),
    }));

    /* ---------------- MEMO SECTIONS ---------------- */

    /** 🔹 Header */
    const HeaderSection = React.useMemo(
        () => (
            <View style={styles.headerRow}>
                <View>
                    <Text style={styles.welcomeText}>
                        Welcome back
                    </Text>
                    <Text style={styles.userName}>
                        Adam Smith
                    </Text>
                </View>

                <View style={styles.avatarBox}>
                    <Text style={styles.avatarText}>
                        AS
                    </Text>
                </View>
            </View>
        ),
        []
    );

    /** 🔹 Rider Status */
    const StatusSection = React.useMemo(
        () => (
            <View style={styles.statusRow}>
                <Text style={styles.statusLabel}>
                    Rider Status
                </Text>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.statusToggle}
                    onPress={onToggle}
                >
                    <Text style={styles.statusLabel}>
                        {isOnline ? 'Online' : 'Offline'}
                    </Text>

                    <View style={styles.toggleSwitch}>
                        <Animated.View
                            style={[
                                styles.toggleDot,
                                dotStyle,
                            ]}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        ),
        [isOnline]
    );

    /** 🔹 Banking Card */
    const BankingSection = React.useMemo(
        () => (
            <View style={styles.bankCard}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.bankTitle}>
                        Add Banking Details
                    </Text>

                    <Text style={styles.bankDesc}>
                        Upload Banking details of your
                        Account to{'\n'}use.
                    </Text>
                </View>

                <ImageComponent
                    source={images.warning}
                    style={styles.warningIcon}
                />
            </View>
        ),
        []
    );

    /** 🔹 Earnings */
    const EarningsSection = React.useMemo(
        () => (
            <View style={styles.earningsCard}>
                <Text style={styles.earningsLabel}>
                    Earnings
                </Text>

                <View style={styles.earningsRow}>
                    <ImageComponent
                        source={images.dollar}
                        style={styles.dollarIcon}
                    />

                    <Text style={styles.earningsValue}>
                        {showEarnings ? '0' : '••••'}
                    </Text>

                    <TouchableOpacity
                        onPress={() =>
                            setShowEarnings(!showEarnings)
                        }
                        style={styles.eyeIcon}
                    >
                        <MaterialCommunityIcons
                            name={
                                showEarnings
                                    ? 'eye-outline'
                                    : 'eye-off-outline'
                            }
                            size={scale(16)}
                            color={color.darkGrey}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        ),
        [showEarnings]
    );

    /** 🔹 Requests Header */
    const RequestHeaderSection = React.useMemo(
        () => (
            <View style={styles.requestHeader}>
                <Text style={styles.requestTitle}>
                    Available Requests
                </Text>

                <TouchableOpacity>
                    <Text style={styles.viewAll}>
                        View all
                    </Text>
                </TouchableOpacity>
            </View>
        ),
        []
    );

    /** 🔹 Requests List */
    const RequestListSection = React.useMemo(
        () =>
            requests.length > 0 ? (
                <View
                    style={{
                        marginTop: verticalScale(10),
                    }}
                >
                    {requests.map(item => (
                        <RequestCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </View>
            ) : (
                <View style={styles.emptyContainer}>
                    <ImageComponent
                        source={images.bookingLogo}
                        style={{
                            width: scale(34),
                            height: verticalScale(34),
                        }}
                    />

                    <Text style={styles.emptyText}>
                        No requests available
                    </Text>
                </View>
            ),
        [requests]
    );

    /* ---------------- RENDER ---------------- */

    return (
        <Base
            backgroundColor={color.background}
            fullScreenMode
            container_style={styles.container}
        >
            <StatusBar
                barStyle="dark-content"
                backgroundColor={color.background}
            />
            {HeaderSection}

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginTop: verticalScale(8) }}
            >
                {StatusSection}
                {BankingSection}
                {EarningsSection}
                {RequestHeaderSection}
                {RequestListSection}
            </ScrollView>
        </Base>
    );
};


export default RiderHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(30),
    },

    /* Header */
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(26),
    },

    welcomeText: {
        fontSize: fontSize.fontSize_12,
        color: color.textSecondary,
        fontFamily: fontFamily.weight400,
    },

    userName: {
        fontSize: fontSize.fontSize_16,
        fontFamily: fontFamily.Heavy,
        color: color.text,
        marginTop: verticalScale(8),
    },

    avatarBox: {
        width: scale(38),
        height: verticalScale(38),
        borderRadius: scale(8),
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

    /* Banking Card */
    bankCard: {
        flexDirection: 'row',
        backgroundColor: color.errorSurface,
        padding: scale(8),
        borderRadius: scale(4),
        marginTop: verticalScale(18),
        alignItems: 'center',
    },

    bankTitle: {
        fontFamily: fontFamily.weight500,
        fontSize: fontSize.fontSize_14,
        color: color.textMain,
    },

    bankDesc: {
        fontFamily: fontFamily.weight400,
        fontSize: fontSize.fontSize_12,
        lineHeight: verticalScale(16),
        color: color.booking.meta,
        marginTop: verticalScale(2),
    },

    warningIcon: {
        width: scale(16),
        height: verticalScale(14),
        tintColor: color.error,
    },

    /* Earnings */
    earningsCard: {
        backgroundColor: color.primaryMuted,
        padding: scale(8),
        borderRadius: scale(4),
        marginTop: verticalScale(16),
    },

    earningsLabel: {
        fontSize: fontSize.fontSize_12,
        color: color.textMain,
        fontFamily: fontFamily.Roman,
        lineHeight: verticalScale(20),
    },

    earningsRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: verticalScale(6),
    },

    earningsValue: {
        fontSize: fontSize.fontSize_32,
        fontFamily: fontFamily.weight800,
        color: color.textMain,
        marginRight: scale(16),
    },

    dollarIcon: { width: scale(9), height: verticalScale(16), marginRight: scale(6) },
    eyeIcon: { marginBottom: verticalScale(5), alignSelf: 'center', },
    /* Requests */
    requestHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(22),
    },

    requestTitle: {
        fontSize: fontSize.fontSize_14,
        fontFamily: fontFamily.weight700,
        color: color.textMain,
        lineHeight: verticalScale(20),

    },

    viewAll: {
        fontSize: fontSize.fontSize_12,
        color: color.textAccent,
        fontFamily: fontFamily.weight500,
        lineHeight: verticalScale(20),
    },

    /* Empty */
    emptyContainer: {
        alignItems: 'center',
        marginTop: verticalScale(32),
    },

    emptyIconBox: {
        width: scale(40),
        height: verticalScale(40),
        borderRadius: scale(10),
        backgroundColor: color.grey,
        justifyContent: 'center',
        alignItems: 'center',
    },

    emptyText: {
        marginTop: verticalScale(8),
        fontSize: fontSize.fontSize_12,
        color: color.booking.meta,
        fontFamily: fontFamily.weight400,
        textAlign: 'center',
    },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(10),
    },

    statusLabel: {
        fontSize: fontSize.fontSize_12,
        fontFamily: fontFamily.weight400,
        color: color.textSecondary,
    },

    statusToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.primaryMuted,
        paddingLeft: scale(13),
        paddingRight: scale(5),
        height: verticalScale(25),
        borderRadius: scale(20),
    },


    toggleSwitch: {
        width: scale(32),
        height: verticalScale(16),
        borderRadius: scale(20),
        backgroundColor: color.background,
        justifyContent: 'center',
        paddingHorizontal: scale(2),
        marginLeft: scale(6),

    },

    toggleDot: {
        width: scale(12),
        height: scale(12),
        borderRadius: scale(12),
        backgroundColor: color.success,
    },

});
