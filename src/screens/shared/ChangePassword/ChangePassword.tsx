import BaseWrapper from 'components/Base';
import CustomToolbar from 'components/CustomToolbar';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import { scale, verticalScale } from '@scale';
import { showFlashMessage } from 'components/showFlashMessage';

const ChangePassword = ({ navigation }: any) => {
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [errors, setErrors] = React.useState<any>({});

    /* Field Validators */

    const validateOldPassword = () => {
        if (!oldPassword) {
            setErrors((p: any) => ({
                ...p,
                oldPassword: 'Old password is required',
            }));
        }
    };

    const validateNewPassword = () => {
        if (!newPassword) {
            setErrors((p: any) => ({
                ...p,
                newPassword: 'New password is required',
            }));
        } else if (newPassword.length < 8 || newPassword.length > 16) {
            setErrors((p: any) => ({
                ...p,
                newPassword: 'Password must be 8-16 characters long',
            }));
        }
    };

    const validateConfirmPassword = () => {
        if (!confirmPassword) {
            setErrors((p: any) => ({
                ...p,
                confirmPassword: 'Confirm password is required',
            }));
        } else if (confirmPassword !== newPassword) {
            setErrors((p: any) => ({
                ...p,
                confirmPassword: 'Passwords do not match',
            }));
        }
    };

    /* Submit Validation */

    const validateAll = () => {
        let err: any = {};

        if (!oldPassword) err.oldPassword = 'Old password is required';

        if (!newPassword)
            err.newPassword = 'New password is required';
        else if (newPassword.length < 8 || newPassword.length > 16)
            err.newPassword = 'Password must be 8-16 characters long';

        if (!confirmPassword)
            err.confirmPassword = 'Confirm password is required';
        else if (confirmPassword !== newPassword)
            err.confirmPassword = 'Passwords do not match';

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = () => {
        if (!validateAll()) {
            showFlashMessage('Please fill all required fields');
            return;
        }

        console.log('Password changed ✅');
        // API call here
    };

    return (
        <BaseWrapper>
            <CustomToolbar
                title="Change Password"
                onLeftPress={() => navigation.goBack()}
                showLeftIcon
                navigation={navigation}
            />
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <CustomInput
                        placeholder="Old Password"
                        value={oldPassword}
                        onChangeText={(text) => {
                            setOldPassword(text);
                            setErrors((p: any) => ({ ...p, oldPassword: '' }));
                        }}
                        onBlur={validateOldPassword}
                        error={errors.oldPassword}
                    />

                    <CustomInput
                        placeholder="New Password"
                        value={newPassword}
                        onChangeText={(text) => {
                            setNewPassword(text);
                            setErrors((p: any) => ({ ...p, newPassword: '' }));
                        }}
                        onBlur={validateNewPassword}
                        error={errors.newPassword}
                    />

                    <CustomInput
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={(text) => {
                            setConfirmPassword(text);
                            setErrors((p: any) => ({ ...p, confirmPassword: '' }));
                        }}
                        onBlur={validateConfirmPassword}
                        error={errors.confirmPassword}
                    />
                </View>
                <View>
                    <CustomButton
                        title="Save"
                        onPress={handleSubmit}
                    />
                </View>
            </View>
        </BaseWrapper>
    );
};

export default ChangePassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: scale(24),
        justifyContent: 'space-between',
    },
    inputContainer: {
        gap: verticalScale(14),
    },
});