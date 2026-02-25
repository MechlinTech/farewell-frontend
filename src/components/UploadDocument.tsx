import color from '@color';
import React, { useEffect, useState } from 'react';
import {
  Modal,
  Pressable,
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface Props {
  label?: string;
  imageData?: any;
  error?: string;
  onImageSelected: (image: any) => void;
  mainStyle?: any;
  centerImage?: any;
  centerImageView?: any;
  centerImageStyle?: any;
  labelStyle?: any;
}

const UploadDocument: React.FC<Props> = ({
  label,
  imageData,
  error,
  onImageSelected,
  mainStyle,
  centerImage,
  centerImageView,
  centerImageStyle,
  labelStyle,
}) => {
  const [image, setImage] = useState<any>(imageData);
  const [showSheet, setShowSheet] = useState(false);

  /* 🔁 Sync parent image */
  useEffect(() => {
    if (imageData) {
      setImage(imageData);
    }
  }, [imageData]);

  /* 📸 Camera */
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

  /* 🖼 Gallery */
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

  /* ❌ Delete Image */
  const removeImage = () => {
    setImage(null);
    onImageSelected(null); // reset parent state
  };
  const insets = useSafeAreaInsets();

  /* 🚫 Prevent opening picker if image exists */
  const handleUploadPress = () => {
    if (image?.path) return; // do nothing
    setShowSheet(true);
  };

  return (
    <View style={mainStyle}>
      {/* Label */}
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      {/* Upload Box */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.uploadBox, error && { borderColor: color.error }]}
        onPress={handleUploadPress}
      >
        {/* Preview / Placeholder */}
        <View style={[centerImageView]}>
          <ImageComponent
            source={
              image?.path
                ? { uri: image.path }
                : centerImage
                ? centerImage
                : images.add_notes
            }
            style={[
              styles.preview,
              centerImageStyle,
              image?.path && styles.fullImage,
            ]}
            resizeMode="cover"
          />
        </View>

        {/* ❌ Delete Icon */}
        {image?.path && (
          <TouchableOpacity
            style={styles.deleteIcon}
            onPress={removeImage}
            activeOpacity={0.8}
          >
            <Icon name="close" size={18} color={color.error} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {/* Error */}
      {!!error && <Text style={styles.errorText}>{error}</Text>}

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
          <View
            style={[
              styles.modalBox,
              { paddingBottom: insets.bottom + scale(10) },
            ]}
          >
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
    fontFamily: fontFamily.weight500,

    marginBottom: verticalScale(18),
  },

  uploadBox: {
    height: verticalScale(86),
    borderRadius: scale(10),
    borderWidth: scale(1),
    borderStyle: 'dashed',
    borderColor: color.primary,
    backgroundColor: color.primaryMuted,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
  },

  preview: {
    width: scale(32),
    height: verticalScale(32),
  },

  fullImage: {
    height: verticalScale(86),
    width: scale(328),
  },

  /* ❌ Delete Icon */
  deleteIcon: {
    position: 'absolute',
    top: verticalScale(6),
    right: scale(6),
    backgroundColor: color.background,
    borderRadius: scale(20),
    padding: scale(4),
    elevation: 3,
  },

  deleteImage: {
    width: scale(16),
    height: scale(16),
    tintColor: color.error,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
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

  errorText: {
    color: color.error,
    fontSize: fontSize.fontSize_12,
    fontFamily: fontFamily.Medium,
    marginTop: verticalScale(8),
  },
});
