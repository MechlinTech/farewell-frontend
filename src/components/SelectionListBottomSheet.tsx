import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import BottomSheetCustom from './BottomSheetCustom';
import color from '@color';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';

interface Props {
  onDismiss: () => void;
  onPress: (item: any) => void;
  visible: boolean;
  data: any[];
  header?: string;
  selectedItem: any;
}

const SelectionListBottomSheet: React.FC<Props> = ({
  onDismiss,
  onPress,
  visible,
  data,
  header,
  selectedItem,
}) => {
  const [selectData, setSelectData] = useState<any>(selectedItem);

  const renderItem = ({ item }: any) => {
    const isSelected =
      selectData?.id === item?.id || selectData?.title === item?.title;

    return (
      <Pressable
        onPress={() => {
          onPress(item);
          setSelectData(item);
          onDismiss();
        }}
      >
        <View
          style={[
            styles.tagView,
            {
              borderColor: isSelected ? color.primary : color.border,
            },
          ]}
        >
          <Text
            style={[
              styles.tagTxt,
              {
                color: isSelected ? color.primary : color.text,
              },
            ]}
          >
            {item?.title}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <BottomSheetCustom visible={visible} onClose={onDismiss}>
      {header && (
        <View style={styles.header}>
          <Text style={styles.heading}>{header}</Text>
        </View>
      )}

      <FlatList
        data={data}
        keyExtractor={(item, index) => item?.id?.toString() ?? index.toString()}
        style={styles.container}
        renderItem={renderItem}
      />
    </BottomSheetCustom>
  );
};

const itemPropsAreEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.visible === nextProps.visible &&
    prevProps.selectedItem === nextProps.selectedItem &&
    prevProps.data.length === nextProps.data.length
  );
};

export default React.memo(SelectionListBottomSheet, itemPropsAreEqual);
// export default SelectionListBottomSheet;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(6),
    marginVertical: verticalScale(20),
    maxHeight: verticalScale(385),
  },
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: scale(6),
  },

  heading: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.Heavy,
    color: color.text,
  },

  tagView: {
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: scale(1),
    borderColor: color.border,
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    borderRadius: scale(30),
  },
  tagTxt: {
    fontFamily: fontFamily.weight400,
    fontSize: fontSize.fontSize_14,
    color: color.black,
    textAlign: 'center',
  },
  dayClickImg: {
    height: verticalScale(22),
    width: scale(22),
  },
});
