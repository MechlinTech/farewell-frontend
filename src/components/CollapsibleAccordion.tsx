import color from '@color';
import { scale, verticalScale } from '@scale';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Animated, { Layout, FadeIn, FadeOut } from 'react-native-reanimated';
import { fontFamily, fontSize } from '@constants';
import ImageComponent from './ImageComponent';
import images from '@images';

interface CollapsibleAccordionProps {
  question: string;
  answer: string;
}

export default function CollapsibleAccordion({
  question,
  answer,
}: CollapsibleAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Pressable style={styles.header} onPress={() => setOpen(prev => !prev)}>
        <Text style={styles.question}>{question}</Text>
        <ImageComponent
          source={open ? images.minus : images.plus}
          style={styles.icon}
        />
      </Pressable>

      {/* BODY */}
      {open && (
        <Animated.View
          layout={Layout.duration(100)}
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.body}
        >
          <Text style={styles.answer}>{answer}</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    borderRadius: scale(8),
    marginVertical: verticalScale(8),
    borderWidth: scale(1.5),
    borderColor: color.accordion.border,
  },
  header: {
    padding: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  question: {
    fontSize: fontSize.fontSize_14,
    fontFamily: fontFamily.weight800,
    lineHeight: verticalScale(20),
    // flex: 1,
    width: '88%',
  },
  icon: {
    marginTop: verticalScale(4),
    width: scale(12),
    height: verticalScale(12),
  },
  body: {
    paddingHorizontal: scale(16),
    paddingBottom: verticalScale(10),
  },
  answer: {
    fontSize: fontSize.fontSize_13,
    fontFamily: fontFamily.weight400,
    lineHeight: verticalScale(20),
    color: color.accordion.answer,
  },
});
