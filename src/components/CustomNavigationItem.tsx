import * as React from 'react';
import { Pressable, Text, View, StyleSheet, StyleProp, TextStyle, ImageStyle } from 'react-native';
import { scale, verticalScale } from '@scale';
import ImageComponent from './ImageComponent';
import images from '@images';
import { fontFamily, fontSize } from '@constants';
import color from '@color';

interface CustomNavigationItemProps {
    title: string;
    titleStyle?: StyleProp<TextStyle>;
    icon: string;
    iconStyle?: StyleProp<ImageStyle>;
    onPress: () => void;
}

export const CustomNavigationItem = ({ title, icon, onPress, titleStyle, iconStyle }: CustomNavigationItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ImageComponent
                    source={icon}
                    style={[styles.icon, iconStyle]}
                />
                <Pressable onPress={onPress}>
                    <Text style={[styles.title, titleStyle]}>{title}</Text>
                </Pressable>
            </View>
            <ImageComponent
                source={images.forwardArrow}
                style={styles.arrowIcon}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: scale(15),
    },
    title: {
        fontSize: fontSize.fontSize_16,
        fontFamily: fontFamily.weight400,
        color: color.profile.text,
    },
    icon: {
        width: scale(20),
        height: verticalScale(20),
    },
    arrowIcon: {
        width: scale(14),
        height: verticalScale(14),
    },
});