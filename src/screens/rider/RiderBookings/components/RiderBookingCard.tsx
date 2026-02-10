import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import color from '@color';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import ImageComponent from '@components/ImageComponent';
import images from '@images';

interface Props {
    item: {
        bookingId: string;
        location: string;
        time: string;
        status:
        | 'IN_PROGRESS'
        | 'COMPLETED'
        | 'NOT_STARTED';
        address?: string;
        pickedAt?: string;
    };
}

const RiderBookingCard: React.FC<Props> = ({
    item,
}) => {
    const isExpanded =
        item.status === 'IN_PROGRESS';

    return (
        <View
            style={[
                styles.card,
                isExpanded && styles.expandedCard,
                {
                    marginBottom: item.status === 'IN_PROGRESS' ? verticalScale(26) : verticalScale(8),
                }
            ]}
        >
            {/* 🔹 Header */}
            <View style={styles.headerRow}>
                {/* Left */}
                <View style={{ flex: 1 }}>
                    <Text style={styles.bookingId}>
                        {item.bookingId}
                    </Text>

                    <View style={styles.infoRow}>
                        <View style={styles.iconBox}>
                            <ImageComponent
                                source={images.package}
                                style={styles.packageIcon}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={styles.locationRow}>
                                <ImageComponent
                                    source={images.location}
                                    style={styles.locationIcon}
                                />
                                <Text
                                    style={styles.locationText}
                                >
                                    {item.location}
                                </Text>
                            </View>

                            <Text style={styles.timeText}>
                                {item.time}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* 🔹 Status Badge */}
                <View
                    style={[
                        styles.badge,
                        item.status ===
                        'COMPLETED' &&
                        styles.completedBadge,
                        item.status ===
                        'NOT_STARTED' &&
                        styles.pendingBadge,
                    ]}
                >
                    <Text style={[styles.badgeText, item.status === 'COMPLETED' && styles.completedBadgeText, item.status === 'NOT_STARTED' && styles.pendingBadgeText]}>
                        {item.status ===
                            'IN_PROGRESS'
                            ? 'In Progress'
                            : item.status ===
                                'COMPLETED'
                                ? 'Completed'
                                : 'Not Started'}
                    </Text>
                </View>
            </View>

            {/* 🔹 Expanded Section */}
            {isExpanded && (
                <View style={styles.expandedBox}>
                    <Text style={styles.metaText}>
                        Package Picked at{' '}
                        {item.pickedAt}
                    </Text>

                    <View style={styles.locationRow}>
                        <ImageComponent
                            source={images.location}
                            style={styles.locationIcon}
                        />
                        <Text style={styles.locationText}>
                            {item.address}
                        </Text>
                    </View>

                    <Text style={styles.waitingText}>
                        Waiting to deliver the package
                    </Text>
                </View>
            )}
        </View>
    );
};

export default RiderBookingCard;

const styles = StyleSheet.create({
    card: {
        borderBottomWidth: verticalScale(1),
        borderColor: color.border,
        paddingVertical: verticalScale(16),
        paddingHorizontal: scale(8),
    },

    expandedCard: {
        backgroundColor: '#F7F9FB',
        borderRadius: scale(12),
        borderWidth: 1,
        borderColor: color.border,
        paddingTop: verticalScale(19),
        paddingHorizontal: scale(16),
        paddingBottom: verticalScale(22),
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    bookingId: {
        fontSize: fontSize.fontSize_14,
        fontFamily: fontFamily.weight600,
        color: color.textMain,
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

    /* Badge */
    badge: {
        backgroundColor: color.primaryMuted,
        paddingHorizontal: scale(8),
        paddingVertical: 4,
        borderRadius: scale(6),
    },

    completedBadge: {
        backgroundColor: color.completedLinearBg,
    },

    pendingBadge: {
        backgroundColor: color.notStartedLinearBg,
    },

    completedBadgeText: {
        color: color.success,
    },

    pendingBadgeText: {
        color: color.notStartedBadgeText,
    },

    badgeText: {
        fontSize: fontSize.fontSize_10,
        fontFamily: fontFamily.weight500,
        color: color.textContrast,
    },

    /* Expanded */
    expandedBox: {
        borderTopWidth: 1,
        borderColor: color.border,
        marginTop: verticalScale(12),
        paddingTop: verticalScale(10),
    },

    metaText: {
        fontSize: fontSize.fontSize_11,
        fontFamily: fontFamily.weight400,
        color: color.textSecondary,
    },

    waitingText: {
        marginTop: verticalScale(6),
        fontSize: fontSize.fontSize_11,
        color: color.textSecondary,
    },
});
