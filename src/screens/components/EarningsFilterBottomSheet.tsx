import * as React from 'react';

import BottomSheet from '@components/BottomSheetCustom';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CustomButton from '@components/CustomButton';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { fontFamily, fontSize } from '@constants';
import color from '@color';
import CustomInput from '@components/CustomInput';
import { scale, verticalScale } from '@scale';

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

  const [errors, setErrors] = useState<any>({
    startDate: '',
    endDate: '',
  });

  // Validation (individual fields) - clear error when valid, set when invalid
  const validateField = (key: string) => {
    let err: any = { ...errors };

    if (key === 'startDate') {
      if (!startDate) {
        err.startDate = 'Start date is required';
      } else {
        err.startDate = '';
        if (endDate && endDate < startDate) {
          err.endDate = 'End date must be on or after start date';
        } else if (endDate) {
          err.endDate = '';
        }
      }
    }

    if (key === 'endDate') {
      if (!endDate) {
        err.endDate = 'End date is required';
      } else if (startDate && endDate < startDate) {
        err.endDate = 'End date must be on or after start date';
      } else {
        err.endDate = '';
      }
    }

    setErrors(err);
  };

  // Validate all fields
  const validateAll = () => {
    let err: any = {};

    if (!startDate) {
      err.startDate = 'Start date is required';
    }

    if (!endDate) {
      err.endDate = 'End date is required';
    }

    if (startDate && endDate && endDate < startDate) {
      err.endDate = 'End date must be on or after start date';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleApply = () => {
    if (!validateAll()) {
      return;
    }
    onApply(startDate, endDate);
    onClose();
  };

  const handleClear = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setErrors({ startDate: '', endDate: '' });
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
                placeholder="Enter start date"
                error={errors.startDate}
                value={startDate ? startDate.toLocaleDateString() : ''}
                onPress={() => setShowStartDatePicker(true)}
                onBlur={() => validateField('startDate')}
                editable={false}
              />
              <CustomInput
                label="End Date"
                placeholder="Enter end date"
                error={errors.endDate}
                value={endDate ? endDate.toLocaleDateString() : ''}
                onPress={() => setShowEndDatePicker(true)}
                onBlur={() => validateField('endDate')}
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
            if (selectedDate) {
              setStartDate(selectedDate);
              setErrors((prev: any) => ({ ...prev, startDate: '' }));
            }
          }}
        />
      )}
      {showEndDatePicker && (
        <DateTimePicker
          value={endDate || startDate || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          minimumDate={startDate}
          onChange={(event, selectedDate) => {
            setShowEndDatePicker(false);
            if (selectedDate) {
              setEndDate(selectedDate);
              setErrors((prev: any) => ({ ...prev, endDate: '' }));
            }
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
