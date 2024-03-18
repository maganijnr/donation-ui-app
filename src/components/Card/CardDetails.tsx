import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {horizontalScale, verticalScale} from '../../scaling';
import {CardProps} from '../../screens/HomeScreen/HomeScreen';
import cardStyles from './styles';
import shortenWords from '../../helpers/shortenWords';

const CardDetails: FC<{cardInfo: CardProps}> = ({
  cardInfo: {previewImage, name, description, category, mainImage, price},
}) => {
  return (
    <View style={cardStyles.cardContainer}>
      <View style={cardStyles.imageContainer}>
        <View style={cardStyles.cardCategory}>
          <Text style={cardStyles.cardCategoryText}>{category}</Text>
        </View>
        <Image
          source={previewImage}
          style={cardStyles.previewImage}
          resizeMode="cover"
        />
      </View>
      <View style={cardStyles.infoSection}>
        <Text style={cardStyles.cardName}>{shortenWords(name, 18)}</Text>
        <Text style={cardStyles.cardPrice}>${price}</Text>
      </View>
    </View>
  );
};

export default CardDetails;
