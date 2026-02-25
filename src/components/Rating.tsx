import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import color from '@color';
import { scale } from '@scale';
import { fontFamily, fontSize } from '@constants';

interface RatingProps {
  rating: number; // e.g. 3.5 or 4
  count?: number; // total stars (default 5)
  size?: number; // icon size
  containerStyle?: StyleProp<ViewStyle>;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  count = 5,
  size = scale(16),
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {Array.from({ length: count }).map((_, index) => {
        const isFilled = index < Math.floor(rating);

        return (
          <Icon
            key={index}
            name={isFilled ? 'star' : 'star-border'}
            size={size}
            color={
              isFilled
                ? color.starActive // ⭐ highlighted
                : color.starInactive // ⭐ grey
            }
            style={styles.icon}
          />
        );
      })}
      <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
    </View>
  );
};

export default React.memo(Rating);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: scale(2),
  },
  ratingText: {
    marginLeft: scale(3),
    fontSize: fontSize.fontSize_12,
    color: color.textSecondary,
    fontFamily: fontFamily.weight500,
  },
});
