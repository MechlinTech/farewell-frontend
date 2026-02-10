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

interface Props {
    item: any;
    onAccept?: () => void;
    onReject?: () => void;
}

const RequestCard: React.FC<Props> = ({
    item,
    onAccept,
    onReject,
}) => {
    return (
        <View style={styles.card}>
            {/* Left */}
            <View style={{ flex: 1 }}>
                <Text style={styles.bookingId}>
                    {item.bookingId}
                </Text>
                <View style={styles.packageContainer}>
                    <View style={styles.packageView}>
                        <ImageComponent
                            source={images.package}
                            style={styles.packageIcon}
                        />
                    </View>
                    <View>
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

            {/* Right Buttons */}
            <View style={styles.actionColumn}>
                <TouchableOpacity
                    style={styles.acceptBtn}
                    onPress={onAccept}
                >
                    <Text style={styles.acceptText}>
                        Accept
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.rejectBtn}
                    onPress={onReject}
                >
                    <Text style={styles.rejectText}>
                        Reject
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RequestCard;


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        paddingVertical: verticalScale(16),
        borderBottomWidth: 1,
        borderColor: color.border,
        alignItems: 'flex-start',
        marginBottom: verticalScale(8),
    },

    bookingId: {
        fontSize: fontSize.fontSize_14,
        fontFamily: fontFamily.weight500,
        color: color.booking.title,
    },

    locationRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    locationIcon: {
        width: scale(12),
        height: verticalScale(12),
        marginRight: scale(2),
        marginTop: verticalScale(1),
    },

    locationText: {
        fontSize: fontSize.fontSize_12,
        color: color.textContrast,
        fontFamily: fontFamily.weight500,
        lineHeight: verticalScale(16),

    },

    timeText: {
        fontSize: fontSize.fontSize_10,
        color: color.booking.meta,
        fontFamily: fontFamily.weight400,
        marginTop: verticalScale(4),
        // lineHeight: verticalScale(16),
    },

    actionColumn: {
        justifyContent: 'space-between',
    },

    acceptBtn: {
        backgroundColor: color.successBg,
        paddingHorizontal: scale(14),
        height: verticalScale(26),
        borderRadius: scale(4),
        alignItems: 'center',
        justifyContent: 'center',
    },

    acceptText: {
        color: color.success,
        fontSize: fontSize.fontSize_10,
        fontFamily: fontFamily.weight500,
    },

    rejectBtn: {
        backgroundColor: color.errorBg,
        paddingHorizontal: scale(14),
        height: verticalScale(26),
        borderRadius: scale(4),
        marginTop: verticalScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },

    rejectText: {
        color: color.error,
        fontSize: fontSize.fontSize_10,
        fontFamily: fontFamily.weight500,
    },
    packageIcon: {
        width: scale(19),
        height: verticalScale(19),

    },
    packageView: {
        width: scale(32),
        height: verticalScale(32),
        borderRadius: scale(5),
        backgroundColor: color.packageBg,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: scale(8),
    },
    packageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(12),
    },
});
