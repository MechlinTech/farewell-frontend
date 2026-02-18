import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import color from '@color';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import ImageComponent from '@components/ImageComponent';
import images from '@images';
import Navigator from '@Navigator';

interface Props {
    navigation: any;
    item: {
        bookingId: string;
        location: string;
        time: string;
    };
}

const PackagesItem: React.FC<Props> = ({ item, navigation }: any) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => {
            Navigator.pushScreen(navigation, 'CustomerDeliveryDetails', { id: item?.id });
        }}>
            <View style={styles.headerRow}>
                {/* 🔹 Left Content */}
                <View style={{ flex: 1 }}>
                    <Text style={styles.bookingId}>
                        {item.bookingId}
                    </Text>

                    <View style={styles.infoRow}>
                        {/* Package Icon */}
                        <View style={styles.iconBox}>
                            <ImageComponent
                                source={images.package}
                                style={styles.packageIcon}
                            />
                        </View>

                        {/* Location + Time */}
                        <View style={{ flex: 1 }}>
                            <View style={styles.locationRow}>
                                <ImageComponent
                                    source={images.location}
                                    style={styles.locationIcon}
                                />
                                <Text style={styles.locationText}>
                                    {item.location}
                                </Text>
                            </View>

                            <Text style={styles.timeText}>
                                {item.time}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* ✅ Completed Badge Only */}
                <View style={styles.completedBadge}>
                    <Text style={styles.completedBadgeText}>
                        Completed
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PackagesItem;

const styles = StyleSheet.create({
    card: {
        borderBottomWidth: verticalScale(1),
        borderColor: color.border,
        paddingVertical: verticalScale(16),
        paddingHorizontal: scale(16),
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    bookingId: {
        fontSize: fontSize.fontSize_14,
        fontFamily: fontFamily.weight600,
        color: color.textMain,
        width: '90%',
    },

    infoRow: {
        flexDirection: 'row',
        marginTop: verticalScale(12),
    },

    iconBox: {
        width: scale(32),
        height: verticalScale(32),
        borderRadius: scale(6),
        backgroundColor: color.packageBg,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: scale(8),
    },

    packageIcon: {
        width: scale(18),
        height: verticalScale(18),
    },

    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    locationIcon: {
        width: scale(12),
        height: verticalScale(12),
        marginRight: scale(4),
    },

    locationText: {
        fontSize: fontSize.fontSize_12,
        fontFamily: fontFamily.weight500,
        color: color.textContrast,
    },

    timeText: {
        fontSize: fontSize.fontSize_10,
        fontFamily: fontFamily.weight400,
        color: color.booking.meta,
        marginTop: verticalScale(4),
    },

    /* ✅ Completed Badge */

    completedBadge: {
        backgroundColor: color.completedLinearBg,
        width: scale(62),
        height: scale(18),
        borderRadius: scale(4),
        alignItems: 'center',
        justifyContent: 'center',
    },

    completedBadgeText: {
        fontSize: fontSize.fontSize_10,
        fontFamily: fontFamily.weight500,
        color: color.success,
        lineHeight: verticalScale(16),
        marginTop: verticalScale(2),
    },
});
