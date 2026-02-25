import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

import Base from '@components/Base';
import color from '@color';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import CustomToolbar from '@components/CustomToolbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigator from '@Navigator';

const SavedAddress = ({ navigation }: any) => {
  const [addressList, _setAddressList] = useState([
    {
      id: '1',
      type: 'Home',
      name: 'Madhav Kakkar',
      address: '123, Shastri Nagar, Near City Mall, Jaipur, Rajasthan - 302016',
    },
    {
      id: '2',
      type: 'Office',
      name: 'Workplace',
      address: '4th Floor, Business Tower, MI Road, Jaipur, Rajasthan - 302001',
    },
  ]);

  // ➕ Add Address Click
  const onAddAddress = () => {
    Navigator.pushScreen(navigation, 'CustomerCurrentLocation');
  };

  // 📋 Address Card
  const renderAddressItem = ({ item }: any) => {
    return (
      <Pressable
        style={styles.card}
        onPress={() => {
          Navigator.goBack(navigation);
        }}
      >
        {/* Address Type */}
        <View style={styles.cardHeader}>
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>{item.type}</Text>
          </View>
          <Text
            style={styles.editText}
            onPress={() => {
              Navigator.pushScreen(navigation, 'CustomerCurrentLocation');
            }}
          >
            Edit
          </Text>
        </View>

        {/* Name */}
        <Text style={styles.nameText}>{item.name}</Text>

        {/* Full Address */}
        <Text style={styles.addressText}>{item.address}</Text>
      </Pressable>
    );
  };

  return (
    <Base fullScreenMode={true}>
      <CustomToolbar
        title="Saved Address"
        showLeftIcon
        navigation={navigation}
        // ➕ Right Add Icon
        rightView={() => {
          return (
            <TouchableOpacity onPress={onAddAddress}>
              <Icon
                name="plus-circle-outline"
                size={scale(24)}
                color={color.primary}
              />
            </TouchableOpacity>
          );
        }}
      />

      <FlatList
        data={addressList}
        keyExtractor={item => item.id}
        renderItem={renderAddressItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </Base>
  );
};

export default SavedAddress;

const styles = StyleSheet.create({
  listContainer: {
    padding: scale(16),
  },

  card: {
    backgroundColor: color.background,
    padding: scale(14),
    borderRadius: scale(12),
    marginBottom: verticalScale(12),
    shadowColor: color.darkGrey,
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  typeContainer: {
    alignSelf: 'flex-start',
    borderColor: color.primary,
    borderWidth: scale(1),
    paddingHorizontal: scale(6),
    paddingVertical: verticalScale(3),
    borderRadius: scale(4),
    marginBottom: verticalScale(6),
  },

  typeText: {
    fontFamily: fontFamily.weight700,
    fontSize: fontSize.fontSize_10,
    color: color.primary,
  },

  nameText: {
    fontFamily: fontFamily.weight800,
    fontSize: fontSize.fontSize_14,
    color: color.text,
    marginBottom: verticalScale(4),
  },

  addressText: {
    fontFamily: fontFamily.weight400,
    fontSize: fontSize.fontSize_12,
    color: color.textSecondary,
    lineHeight: verticalScale(18),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(4),
  },
  editText: {
    fontFamily: fontFamily.weight400,
    fontSize: fontSize.fontSize_12,
    color: color.primary,
    padding: scale(4),
  },
});
