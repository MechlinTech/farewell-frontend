import BaseWrapper from '@components/Base';
import CustomToolbar from '@components/CustomToolbar';
import images from '@images';
import { scale, verticalScale } from '@scale';
import * as React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import ImageComponent from '@components/ImageComponent';
import color from '@color';
import { fontFamily, fontSize } from '@constants';
import { useEffect, useState } from 'react';
import Navigator from '@Navigator';

const vehicleData = [
  {
    id: 1,
    name: 'Toyota Corolla 2007',
    plateNumber: 'EPE 123 YT',
    type: 'car',
    isVerified: true,
  },
  {
    id: 2,
    name: 'Toyota Corolla 2007',
    plateNumber: 'EPE 123 YT',
    type: 'truck',
    isVerified: false,
  },
  {
    id: 3,
    name: 'Toyota Corolla 2007',
    plateNumber: 'EPE 123 YT',
    type: 'bike',
    isVerified: true,
  },
];

const VehicleItem = ({
  name,
  plateNumber,
  type,
  isVerified,
  onPress,
}: {
  name: string;
  plateNumber: string;
  type: string;
  isVerified: boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.vehicleCard} onPress={onPress}>
      <View style={styles.vehicleInfo}>
        <ImageComponent
          source={
            type === 'car'
              ? images.car
              : type === 'truck'
                ? images.truck
                : images.bike
          }
          style={styles.vehicleIcon}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.plateNumber}>{plateNumber}</Text>
      </View>
      {isVerified ? (
        <ImageComponent source={images.greenTick} style={styles.tickIcon} />
      ) : (
        <View style={styles.exclamationContainer}>
          <ImageComponent
            source={images.exclamationWhite}
            style={styles.exclamationIcon}
          />
        </View>
      )}
    </Pressable>
  );
};

const Vehicles = ({ navigation }: any) => {
  const [vehicles, setVehicles] = useState<any>([]);
  useEffect(() => {
    setVehicles(vehicleData);
  }, []);
  const handleVehiclePress = (vehicle: any) => {
    Navigator.pushScreen(navigation, 'VehicleDetails', {
      vehicleId: vehicle.id,
    });
  };
  return (
    <BaseWrapper>
      <CustomToolbar title="Vehicles" showLeftIcon navigation={navigation}
        containerStyle={{ paddingHorizontal: scale(20) }}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          {vehicles.map((item: any, index: number) => (
            <VehicleItem
              key={index}
              name={`${item.type === 'car'
                ? 'Car'
                : item.type === 'truck'
                  ? 'Truck'
                  : 'Bike'
                } • ${item.name}`}
              plateNumber={item.plateNumber}
              type={item.type}
              isVerified={item.isVerified}
              onPress={() => handleVehiclePress(item)}
            />
          ))}
        </View>
      </ScrollView>
    </BaseWrapper>
  );
};
export default Vehicles;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(24),
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
  exclamationContainer: {
    backgroundColor: color.warning,
    borderRadius: scale(8),
    width: scale(15),
    height: verticalScale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  exclamationIcon: {
    width: scale(8),
    height: verticalScale(8),
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
