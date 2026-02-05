import color from '@color';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { fontFamily, fontSize } from '@constants';
import { scale, verticalScale } from '@scale';
import images from '@images';
import ImageComponent from './ImageComponent';

interface Props {
  label?: string;
  imageData?: any;
  onImageSelected: (image: any) => void;
}

const UploadDocument: React.FC<Props> = ({
  label,
  imageData,
  onImageSelected,
}) => {
  const [image, setImage] = useState<any>(imageData);
  const [showSheet, setShowSheet] = useState(false);

  const openCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      mediaType: 'photo',
    }).then((img: any) => {
      setImage(img);
      onImageSelected(img);
      setShowSheet(false);
    });
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
    }).then((img: any) => {
      setImage(img);
      onImageSelected(img);
      setShowSheet(false);
    });
  };

  return (
    <View style={{ marginBottom: verticalScale(15) }}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        style={styles.uploadBox}
        onPress={() => setShowSheet(true)}
      >
        {
          <ImageComponent
            source={image?.path ?? images.add_notes}
            style={styles.preview}
          />
        }
      </TouchableOpacity>

      {/* Bottom Sheet */}
      <Modal
        transparent
        visible={showSheet}
        animationType="fade"
        statusBarTranslucent
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowSheet(false)}
        >
          <View style={styles.modalBox}>
            <Pressable style={styles.option} onPress={openCamera}>
              <Text style={styles.optionText}>Take Photo</Text>
            </Pressable>

            <Pressable style={styles.option} onPress={openGallery}>
              <Text style={styles.optionText}>Choose from Gallery</Text>
            </Pressable>

            <Pressable
              style={styles.option}
              onPress={() => setShowSheet(false)}
            >
              <Text style={styles.optionText}>Cancel</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default UploadDocument;

const styles = StyleSheet.create({
  label: {
    fontSize: fontSize.fontSize_15,
    fontFamily: fontFamily.weight300,
    color: color.text,
    marginBottom: verticalScale(18),
  },
  uploadBox: {
    height: verticalScale(86),
    borderRadius: scale(10),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: color.primary,
    backgroundColor: color.primaryMuted,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: scale(32),
    height: verticalScale(32),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalBox: {
    backgroundColor: color.background,
    padding: scale(20),
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
  },
  option: {
    paddingVertical: verticalScale(14),
    alignItems: 'center',
  },
  optionText: {
    fontSize: fontSize.fontSize_16,
    fontFamily: fontFamily.Heavy,
    color: color.textSecondary,
  },
});
