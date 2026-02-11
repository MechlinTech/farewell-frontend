import BaseWrapper from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import * as React from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';
import color from '@color';
import ImageComponent from '@components/ImageComponent';
import { useEffect, useState } from 'react';
import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';

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
    image:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80',
  },
  {
    id: '2',
    title: 'RC',
    image:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80',
  },
  {
    id: '3',
    title: 'Insurance',
    image:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80',
  },
];
const VehicleDetails = ({ navigation }: any) => {
  const [vehicleDetails, setVehicleDetails] = useState<any>([]);
  const [documents, setDocuments] = useState<any>([]);
  const isRequesting = useSelector(
    (state: RootState) => state.users.isRequesting,
  );

  useEffect(() => {
    setVehicleDetails(vehicleDetailsData);
    setDocuments(documentsData);
  }, []);

  const VehicleDetailsItem = ({
    title,
    value,
  }: {
    title: string;
    value: string;
  }) => {
    return (
      <View style={styles.vehicleDetailsItem}>
        <Text style={styles.vehicleDetailsItemTitle}>{title}</Text>
        <Text style={styles.vehicleDetailsItemValue}>{value}</Text>
      </View>
    );
  };

  return (
    <BaseWrapper>
      <CustomToolbar
        title="Vehicle Details"
        showLeftIcon
        navigation={navigation}
      />
      {vehicleDetails.length > 0 ? (
        <ScrollView style={styles.container}>
          <View style={styles.vehicleDetailsContainer}>
            {vehicleDetails.length > 0 &&
              vehicleDetails.map((item: any, index: number) => (
                <VehicleDetailsItem
                  key={index}
                  title={item.title}
                  value={item.value}
                />
              ))}
          </View>
          {documents.length > 0 && (
            <View>
              <Text style={styles.documentsTitle}>Documents</Text>
              <FlatList
                data={documentsData}
                keyExtractor={item => item.id}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={styles.documentRow}
                renderItem={({ item }) => {
                  return (
                    // <View style={styles.documentImageContainer}>
                    <ImageComponent
                      source={{ uri: item.image }}
                      style={styles.documentImage}
                      resizeMode={'cover'}
                    />
                    /* <Text style={styles.documentLabel}>{item.title}</Text> */
                    // </View>
                  );
                }}
              />
            </View>
          )}
        </ScrollView>
      ) : (
        !isRequesting && (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>No vehicle details found</Text>
          </View>
        )
      )}
    </BaseWrapper>
  );
};
export default VehicleDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
    paddingVertical: verticalScale(16),
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'space-between',
  },
  documentImage: {
    width: scale(157),
    height: verticalScale(93),
    marginTop: verticalScale(16),
    borderRadius: scale(10),
  },
  noDataText: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight700,
    color: color.textMain,
    marginBottom: verticalScale(60),
  },
});
