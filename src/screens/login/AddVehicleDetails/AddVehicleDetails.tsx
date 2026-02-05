import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Base from 'components/Base';
import CustomToolbar from 'components/CustomToolbar';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import UploadDocument from 'components/UploadDocument';

import color from '@color';
import { scale, verticalScale } from '@scale';
import { showFlashMessage } from 'components/showFlashMessage';

const AddVehicleDetails = ({ navigation }: any) => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [model, setModel] = useState('');
    const [capacity, setCapacity] = useState('');

    const [licence, setLicence] = useState<any>();
    const [rc, setRc] = useState<any>();
    const [insurance, setInsurance] = useState<any>();

    const [errors, setErrors] = useState<any>({});

    /* 🔴 Field Validators */

    const validateVehicleNumber = () => {
        if (!vehicleNumber)
            setErrors((p: any) => ({
                ...p,
                vehicleNumber: 'Vehicle number is required',
            }));
    };

    const validateModel = () => {
        if (!model)
            setErrors((p: any) => ({
                ...p,
                model: 'Model is required',
            }));
    };

    const validateCapacity = () => {
        if (!capacity)
            setErrors((p: any) => ({
                ...p,
                capacity: 'Capacity is required',
            }));
    };

    /* 🔴 Submit Validation */

    const validateAll = () => {
        let err: any = {};

        if (!vehicleNumber) err.vehicleNumber = 'Vehicle number is required';
        if (!model) err.model = 'Model is required';
        if (!capacity) err.capacity = 'Capacity is required';

        if (!licence) err.licence = 'Licence is required';
        if (!rc) err.rc = 'RC is required';
        if (!insurance) err.insurance = 'Insurance is required';

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = () => {
        if (!validateAll()) {
            showFlashMessage('Please fill all required fields');
            return;
        }

        console.log('Submitted ✅');
    };

    return (
        <Base backgroundColor={color.background}>
            <CustomToolbar
                title="Add Vehicle Details"
                onLeftPress={() => navigation.goBack()}
                showLeftIcon
                navigation={navigation}
            />

            <ScrollView contentContainerStyle={styles.content}>
                {/* Inputs */}
                <CustomInput
                    placeholder="Vehicle Number"
                    value={vehicleNumber}
                    onChangeText={text => {
                        setVehicleNumber(text);
                        setErrors((p: any) => ({ ...p, vehicleNumber: '' }));
                    }}
                    onBlur={validateVehicleNumber}
                    error={errors.vehicleNumber}
                    containerStyle={styles.input}
                />

                <CustomInput
                    placeholder="Model"
                    value={model}
                    onChangeText={text => {
                        setModel(text);
                        setErrors((p: any) => ({ ...p, model: '' }));
                    }}
                    onBlur={validateModel}
                    error={errors.model}
                    containerStyle={styles.input}
                />

                <CustomInput
                    placeholder="Vehicle Capacity"
                    value={capacity}
                    onChangeText={text => {
                        setCapacity(text);
                        setErrors((p: any) => ({ ...p, capacity: '' }));
                    }}
                    onBlur={validateCapacity}
                    error={errors.capacity}
                    containerStyle={styles.input}
                />


                {/* Upload Docs */}

                <UploadDocument
                    label="Upload Licence"
                    imageData={licence}
                    onImageSelected={(img) => {
                        setLicence(img);
                        setErrors((p: any) => ({ ...p, licence: '' }));
                    }}
                />

                {errors.licence && (
                    <ErrorText message={errors.licence} />
                )}

                <UploadDocument
                    label="Upload Vehicle RC"
                    imageData={rc}
                    onImageSelected={(img) => {
                        setRc(img);
                        setErrors((p: any) => ({ ...p, rc: '' }));
                    }}
                />

                {errors.rc && (
                    <ErrorText message={errors.rc} />
                )}

                <UploadDocument
                    label="Upload Insurance"
                    imageData={insurance}
                    onImageSelected={(img) => {
                        setInsurance(img);
                        setErrors((p: any) => ({ ...p, insurance: '' }));
                    }}
                />

                {errors.insurance && (
                    <ErrorText message={errors.insurance} />
                )}

                {/* Submit */}

                <CustomButton
                    title="Submit for Verification"
                    onPress={handleSubmit}
                    containerStyle={styles.button}
                />
            </ScrollView>
        </Base>
    );
};

export default AddVehicleDetails;

/* 🔴 Reusable Error Text */
const ErrorText = ({ message }: any) => (
    <Text style={styles.errorText}>
        {message}
    </Text>
);

const styles = StyleSheet.create({
    content: {
        padding: scale(20),
        paddingBottom: verticalScale(40),
    },
    input: {
        marginBottom: verticalScale(15),
    },
    button: {
        height: verticalScale(56),
        marginTop: verticalScale(10),
    },
    errorText: {
        color: color.error,
        fontSize: 12,
        marginTop: -10,
        marginBottom: verticalScale(10),
    },
});
