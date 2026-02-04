import color from '@color';
import { fontSize } from '@constants';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ImageComponent from './ImageComponent';
import images from '@images';
import { scale, verticalScale } from '@scale';

interface CheckBoxProps {
  isChecked: boolean;
  onChange: (value: boolean) => void;
  containerStyle?: any;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  isChecked,
  onChange,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onChange(!isChecked)}
      style={[styles.container, containerStyle]}
      activeOpacity={0.7}
    >
      <View style={[styles.box, isChecked && styles.boxChecked]}>
        {isChecked && <ImageComponent source={images.vector} style={styles.checkMark} tintColor={color.black} />}
        
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: fontSize.fontSize_20,
    height: fontSize.fontSize_20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: color.primaryMuted,
    backgroundColor: color.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  boxChecked: {
    backgroundColor: color.primaryMuted,
  },
  checkMark: {
   height:verticalScale(18),
   width: scale(18),
   
  },
});

export default CheckBox;

