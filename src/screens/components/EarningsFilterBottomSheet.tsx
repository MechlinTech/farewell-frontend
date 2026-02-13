import * as React from 'react';

import BottomSheet from '@components/BottomSheetCustom';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import CustomButton from '@components/CustomButton';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { fontFamily, fontSize } from '@constants';
import color from '@color';
import CustomInput from '@components/CustomInput';
import { scale, verticalScale } from '@scale';
import { showFlashMessage } from '@components/showFlashMessage';

interface Props {
  visible: boolean;
  onClose: () => void;
  onApply: (startDate: Date | undefined, endDate: Date | undefined) => void;
}

const EarningsFilterBottomSheet = ({ visible, onClose, onApply }: Props) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const validateDates = () => {
    if (!startDate) {
      showFlashMessage('Please select start date');
      return false;
    }
    if (startDate && endDate && startDate > endDate) {
      showFlashMessage('End date must be after start date');
      return false;
    }

    return true;
  };
  const handleApply = () => {
    if (!validateDates()) {
      return;
    }
    onApply(startDate, endDate);
    onClose();
  };
  const handleClear = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    onClose();
  };
  return (
    <>
      <BottomSheet
        visible={visible}
        onClose={onClose}
        children={
          <View style={styles.contentContainer}>
            <View style={styles.filterTitleContainer}>
              <Text style={styles.filterTitle}>Filter</Text>
              {/* <View>
                <Text
                  style={styles.resetButton}
                  onPress={() => {
                    Alert.alert('Reset');
                  }}
                >
                  Reset
                </Text>
              </View> */}
            </View>
            {/* <View> */}
            <View style={styles.inputContainer}>
              <CustomInput
                label="Start Date"
                value={startDate ? startDate.toLocaleDateString() : ''}
                onPress={() => setShowStartDatePicker(true)}
                editable={false}
              />
              <CustomInput
                label="End Date"
                value={endDate ? endDate.toLocaleDateString() : ''}
                onPress={() => setShowEndDatePicker(true)}
                editable={false}
              />
            </View>
            {/* <View>
                <Text>End Date</Text>
              </View> */}
            {/* </View> */}
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Clear"
                onPress={handleClear}
                width="50%"
                containerStyle={[
                  styles.buttonStyle,
                  { borderWidth: scale(1), borderColor: color.border },
                ]}
                gradientColors={[color.background, color.background]}
              />
              <CustomButton
                title="Apply"
                onPress={handleApply}
                width="50%"
                containerStyle={styles.buttonStyle}
              />
            </View>
          </View>
        }
      />
      {showStartDatePicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedDate) => {
            setShowStartDatePicker(false);
            if (selectedDate) setStartDate(selectedDate);
          }}
        />
      )}
      {startDate && showEndDatePicker && (
        <DateTimePicker
          value={endDate || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedDate) => {
            setShowEndDatePicker(false);
            if (selectedDate) setEndDate(selectedDate);
          }}
        />
      )}
    </>
  );
};

export default EarningsFilterBottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    gap: scale(10),
    // paddingHorizontal: scale(6),
    paddingBottom: verticalScale(18),
    paddingTop: verticalScale(6),
    justifyContent: 'center',
  },
  filterTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  filterTitle: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.weight800,
    color: color.textMain,
    flex: 1,
    textAlign: 'center',
  },
  inputContainer: {
    gap: scale(15),
  },
  resetButton: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight400,
    color: color.textSecondary,
    flex: 1,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: scale(10),
    paddingTop: verticalScale(10),
    paddingHorizontal: scale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    // width: '50%',
    height: verticalScale(50),
    borderRadius: scale(5),
  },
});
