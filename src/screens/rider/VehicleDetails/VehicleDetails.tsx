import BaseWrapper from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import * as React from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';
import color from '@color';
import ImageComponent from '@components/ImageComponent';

const vehicleDetailsData = [
    {
        title: 'Vehicle Number',
        value: '1234567890',
    },
    {
        title: 'Vehicle Model',
        value: 'Toyota Corolla',
    },
    {
        title: 'Vehicle Capacity',
        value: '5',
    },
];

const documentsData = [
    {
        id: '1',
        title: 'Licence',
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80',
    },
    {
        id: '2',
        title: 'RC',
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80',
    },
    {
        id: '3',
        title: 'Insurance',
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80',
    },
];
const VehicleDetailsItem = ({ title, value }: { title: string, value: string }) => {
    return (
        <View style={styles.vehicleDetailsItem}>
            <Text style={styles.vehicleDetailsItemTitle}>{title}</Text>
            <Text style={styles.vehicleDetailsItemValue}>{value}</Text>
        </View>
    );
};
const VehicleDetails = ({ navigation }: any) => {
    return (
        <BaseWrapper>
            <CustomToolbar
                title="Vehicle Details"
                onLeftPress={() => navigation.goBack()}
                showLeftIcon
                navigation={navigation}
            />
            <ScrollView style={styles.container}>
                <View style={styles.vehicleDetailsContainer}>
                    {vehicleDetailsData.map((item, index) => (
                        <VehicleDetailsItem key={index} title={item.title} value={item.value} />
                    ))}
                </View>
                <View style={styles.documentsContainer}>
                    <Text style={styles.documentsTitle}>Documents</Text>
                    <FlatList
                        data={documentsData}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        scrollEnabled={false}
                        columnWrapperStyle={styles.documentRow}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.documentImageContainer}>
                                    <ImageComponent
                                        source={{ uri: item.image }}
                                        style={styles.documentImage}
                                    />
                                    <Text style={styles.documentLabel}>{item.title}</Text>
                                </View>
                            );
                        }}
                    />

                </View>
            </ScrollView>
        </BaseWrapper>
    );
};
export default VehicleDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: scale(30),
        paddingVertical: verticalScale(16),
    },
    vehicleDetailsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    vehicleDetailsItem: {
        width: '50%',
        paddingRight: scale(12),
        marginBottom: verticalScale(16),
        flexDirection: 'column',
        gap: verticalScale(2),
    },
    vehicleDetailsItemTitle: {
        fontSize: fontSize.fontSize_12,
        fontFamily: fontFamily.weight400,
        color: color.delivery.label,
    },
    vehicleDetailsItemValue: {
        fontSize: fontSize.fontSize_14,
        fontFamily: fontFamily.weight500,
        color: color.textMain,
    },
    documentsTitle: {
        fontSize: fontSize.fontSize_14,
        fontFamily: fontFamily.weight800,
        color: color.textMain,
    },
    documentRow: {
        justifyContent: 'flex-start',
        marginBottom: verticalScale(16),
    },
    documentsContainer: {
        // gap: verticalScale(16),
    },
    documentImageContainer: {
        width: '46%',
        marginHorizontal: '2%',
        marginTop: verticalScale(15),
    },

    documentImage: {
        width: '100%',
        height: verticalScale(100),
        borderRadius: scale(10),
    },

    documentLabel: {
        marginTop: verticalScale(6),
        textAlign: 'center',
        fontSize: fontSize.fontSize_12,
        fontFamily: fontFamily.weight500,
        color: color.textMain,
    },


});