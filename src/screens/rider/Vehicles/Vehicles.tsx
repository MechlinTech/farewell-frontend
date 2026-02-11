import BaseWrapper from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import images from '@images';
import { scale, verticalScale } from '@scale';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ImageComponent from '@components/ImageComponent';
import color from '@color';
import { fontFamily, fontSize } from '@constants';

const vehicleData = [
    {
        name: 'Toyota Corolla 2007',
        plateNumber: 'EPE 123 YT',
        type: 'car',
        isVerified: true,
    },
    {
        name: 'Toyota Corolla 2007',
        plateNumber: 'EPE 123 YT',
        type: 'truck',
        isVerified: false,
    },
    {
        name: 'Toyota Corolla 2007',
        plateNumber: 'EPE 123 YT',
        type: 'bike',
        isVerified: true,
    },
];

const VehicleItem = ({ name, plateNumber, type, isVerified }: { name: string, plateNumber: string, type: string, isVerified: boolean }) => {
    return (
        <View style={styles.vehicleCard}>
            <View style={styles.vehicleInfo}>
                <ImageComponent
                    source={type === 'car' ? images.car : type === 'truck' ? images.truck : images.bike}
                    style={styles.vehicleIcon}
                />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.plateNumber}>{plateNumber}</Text>
            </View>
            {isVerified && <ImageComponent
                source={images.greenTick}
                style={styles.tickIcon}
            />}
        </View>
    );
}

const Vehicles = ({ navigation }: any) => {
    return (
        <BaseWrapper>
            <CustomToolbar
                title="Vehicles"
                onLeftPress={() => navigation.goBack()}
                showLeftIcon
                navigation={navigation}
            />
            <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                    {vehicleData.map((item, index) => (
                        <VehicleItem key={index} name={`${item.type === 'car' ? 'Car' : item.type === 'truck' ? 'Truck' : 'Bike'} • ${item.name}`} plateNumber={item.plateNumber} type={item.type} isVerified={item.isVerified} />
                    ))}
                </View>
            </ScrollView>
        </BaseWrapper>
    );
};
export default Vehicles;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(30),
        paddingVertical: verticalScale(16),
        gap: verticalScale(14),
    },
    vehicleCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: scale(10),
        backgroundColor: color.primaryMuted,
        padding: scale(14),
        borderRadius: scale(5),
    },
    vehicleInfo: {
        gap: verticalScale(2),
    },
    tickIcon: {
        width: scale(15),
        height: verticalScale(15),
    },
    vehicleIcon: {
        width: scale(22),
        height: verticalScale(22),
    },
    name: {
        fontSize: fontSize.fontSize_11,
        fontFamily: fontFamily.weight400,
        color: color.textMuted,
    },
    plateNumber: {
        fontSize: fontSize.fontSize_16,
        fontFamily: fontFamily.weight800,
        color: color.delivery.value,
    },
});