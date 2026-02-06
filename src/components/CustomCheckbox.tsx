import color from '@color';
import { fontSize } from '@constants';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { scale, verticalScale } from '@scale';
import Icon from 'react-native-vector-icons/Ionicons';

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
        {isChecked && (
          <Icon name="checkmark" size={verticalScale(14)} color={color.black} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    width: fontSize.fontSize_20,
    height: fontSize.fontSize_20,
    borderRadius: scale(2),
    borderWidth: scale(1),
    borderColor: color.primaryMuted,
    backgroundColor: color.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxChecked: {
    backgroundColor: color.primaryMuted,
  },
});
