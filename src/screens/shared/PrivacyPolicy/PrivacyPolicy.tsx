import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BaseWrapper from 'components/Base';
import color from '@color';
import HTMLView from 'react-native-htmlview';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import CustomToolbar from 'components/CustomToolbar';
import { useEffect, useState } from 'react';

const source = {
  html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li></ul><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li></ul>`,
};

const PrivacyPolicyScreen = ({ navigation }: any) => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setData(source);
  }, []);
  return (
    <BaseWrapper>
      <CustomToolbar
        title="Privacy Policy"
        showLeftIcon
        navigation={navigation}
      />
      <ScrollView style={styles.container}>
        <HTMLView value={data.html} stylesheet={styles} />
      </ScrollView>
    </BaseWrapper>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
  },
  p: {
    fontSize: fontSize.fontSize_14,
    color: color.booking.meta,
    fontFamily: fontFamily.weight400,
    textAlign: 'justify',
    lineHeight: verticalScale(16),
  },
  ul: {
    fontSize: fontSize.fontSize_14,
    color: color.booking.meta,
    fontFamily: fontFamily.weight400,
    textAlign: 'justify',
    marginBottom: verticalScale(10),
    lineHeight: verticalScale(16),
  },
});
