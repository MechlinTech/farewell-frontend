import FastImage from '@d11/react-native-fast-image';
import * as React from 'react';
import { Image, Pressable, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  source: any;
  style?: any;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
  childData?: boolean;
  parentSource?: string;
  parentStyle?: ViewStyle;
  onClickImage?: any;
  children?: React.ReactNode;
  tintColor?: string;
}

const ImageComponent: React.FC<Props> = props => {
  const {
    source,
    style,
    resizeMode = 'contain',
    onClickImage,
    tintColor,
    children,
  } = props;

  const uri = source?.uri;
  const isGif = uri?.toLowerCase()?.endsWith('.gif');

  if (isGif) {
    return (
      <Pressable onPress={onClickImage}>
        <Image
          source={{ uri }}
          style={[style, { tintColor }]}
          resizeMode={resizeMode}
        />
        {children}
      </Pressable>
    );
  }

  return (
    <View>
      <FastImage
        resizeMode={resizeMode}
        source={source}
        style={[style]}
        tintColor={tintColor}
        onTouchEnd={onClickImage}
      >
        {children}
      </FastImage>
    </View>
  );
};

const itemPropsAreEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.source === nextProps.source &&
    prevProps.style === nextProps.style &&
    prevProps.resizeMode === nextProps.resizeMode &&
    prevProps.tintColor === nextProps.tintColor &&
    prevProps.children === nextProps.children &&
    prevProps?.onClickImage === nextProps?.onClickImage
  );
};

export default React.memo(ImageComponent, itemPropsAreEqual);

const styles = StyleSheet.create({});
