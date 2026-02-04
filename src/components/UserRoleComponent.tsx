import {
    StyleProp,
    StyleSheet,
    Text,
    View,
    TextStyle,
    ViewStyle,
    Pressable,
    ImageStyle
} from 'react-native';
import * as React from 'react';
import ImageComponent from './ImageComponent';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import color from '@color';

interface UserRoleComponentProps {
    imageSource: string;
    imageStyle?: StyleProp<ImageStyle>;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    selected?: boolean;
    selectedStyle?: StyleProp<ViewStyle>;
    unselectedStyle?: StyleProp<ViewStyle>;
    onPress: () => void;
}

const UserRoleComponent = ({
    title,
    onPress,
    imageSource,
    selected,
    selectedStyle,
    imageStyle,
    titleStyle,
}: UserRoleComponentProps) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={[styles.pressable, selected && styles.selectedStyle]}
            >
                <ImageComponent
                    source={imageSource}
                    style={[styles.image, imageStyle]}
                />
            </Pressable>
            <Text style={[styles.title, titleStyle]}>
                {title}
            </Text>
        </View>
    );
};

export default UserRoleComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale(14),
    },
    pressable: {
        width: scale(140),
        height: verticalScale(106),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(5),
        backgroundColor: color.primaryMuted,
        alignSelf: 'flex-start'
    },
    image: {
        width: scale(62),
        height: scale(62),
    },
    title: {
        fontSize: fontSize.fontSize_16,
        fontFamily: fontFamily.weight800,
        color: color.textContrast
    },
    selectedStyle: {
        backgroundColor: color.primary,
    }
});