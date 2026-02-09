import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BaseWrapper from 'components/Base';
import color from '@color';
import HTMLView from 'react-native-htmlview';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import CustomToolbar from 'components/CustomToolbar';

const source = {
    lastUpdated: '01/01/2026',
    html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.</p>`,
};

const PrivacyPolicyScreen = ({ navigation }: any) => {
    return (
        <BaseWrapper>
            <CustomToolbar
                title="Privacy Policy"
                onLeftPress={() => navigation.goBack()}
                showLeftIcon
                navigation={navigation}
            />
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Last updated on {source.lastUpdated}</Text>
                <HTMLView value={source.html} stylesheet={styles} />
            </ScrollView>
        </BaseWrapper>
    );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(24),
    },
    title: {
        fontSize: fontSize.fontSize_14,
        color: color.booking.meta,
        fontFamily: fontFamily.weight400,
        textAlign: 'justify',
        marginBottom: verticalScale(13),
    },
    p: {
        fontSize: fontSize.fontSize_14,
        color: color.booking.meta,
        fontFamily: fontFamily.weight400,
        textAlign: 'justify',
        lineHeight: verticalScale(16),
    },
    ul: {
        fontSize: fontSize.fontSize_14,
        color: color.booking.meta,
        fontFamily: fontFamily.weight400,
        textAlign: 'justify',
        marginBottom: verticalScale(10),
        lineHeight: verticalScale(16),
    },
});