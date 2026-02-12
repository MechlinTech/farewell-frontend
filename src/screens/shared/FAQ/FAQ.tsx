import BaseWrapper from 'components/Base';
import CustomToolbar from 'components/CustomToolbar';
import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CustomButton from 'components/CustomButton';
import { scale, verticalScale } from '@scale';
import { fontFamily, fontSize } from '@constants';
import color from '@color';
import { useEffect, useState } from 'react';

const faqDataArray = [
  {
    question:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
  },
  {
    question: 'What is the capital of France?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
  },
  {
    question:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
  },
  {
    question: 'What is the capital of France?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
  },
  {
    question:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
  },
  {
    question: 'What is the capital of France?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
  },
  {
    question:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
  },
  {
    question: 'What is the capital of France?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
  },
];
const FAQScreen = ({ navigation }: any) => {
  const [faqData, setFaqData] = useState<any>([]);
  useEffect(() => {
    setFaqData(faqDataArray);
  }, []);
  return (
    <BaseWrapper>
      <CustomToolbar
        title="How can we help you?"
        showLeftIcon
        navigation={navigation}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Frequently asked questions</Text>
            <View>
              {faqData.map((item: any, index: number) => (
                <CollapsibleAccordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.footerTitle}>
              Still Stuck ? We're just a mail away
            </Text>
            <CustomButton title="Contact Us" onPress={() => { }} />
          </View>
        </View>
      </ScrollView>
    </BaseWrapper>
  );
}

export default FAQScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(24),
  },
  inputContainer: {
    gap: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  title: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight800,
    color: color.text,
  },
  footerTitle: {
    alignSelf: 'center',
    marginBottom: verticalScale(20),
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight500,
    color: color.booking.title,
  },
});
