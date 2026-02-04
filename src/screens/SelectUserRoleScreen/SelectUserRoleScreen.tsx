import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseWrapper from 'components/Base';
import HeadingGroup from 'components/HeadingGroupComponent';
import UserRoleComponent from 'components/UserRoleComponent';
import { scale, verticalScale } from '@scale';
import images from '@images';
import Navigator from '@Navigator';

const SelectUserRoleScreen = ({ navigation }: any) => {
    const [userRole, setUserRole] = React.useState<string>('');
    return (
        <BaseWrapper
            container_style={styles.container}
            fullScreenMode={true}
        >
            <HeadingGroup
                heading="Welcome to Farewell"
                subheading="Please select to user type to create your account"
            />
            <View style={styles.userRoleContainer}>
                <UserRoleComponent
                    imageSource={images.package}
                    title="Customer"
                    onPress={() => {setUserRole('customer'),
                        Navigator.pushScreen(navigation, 'SignupScreen', { userRole: 'customer' });}
                    }
                    selected={userRole === 'customer'}
                />
                <UserRoleComponent
                    imageSource={images.bike}
                    title="Rider"
                    onPress={() => {setUserRole('rider'),
                        Navigator.pushScreen(navigation, 'SignupScreen', { userRole: 'rider' });}
                    }
                    selected={userRole === 'rider'}
                />
            </View>
        </BaseWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: verticalScale(176),
        paddingHorizontal: scale(43),
    },
    userRoleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: scale(12),
    },
});

export default SelectUserRoleScreen;