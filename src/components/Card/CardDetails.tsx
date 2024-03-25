import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {CardProps} from '../../screens/HomeScreen/HomeScreen';
import cardStyles from './styles';
import shortenWords from '../../helpers/shortenWords';

const CardDetails: FC<{cardInfo: CardProps; navigation: any}> = ({
  navigation,
  cardInfo: {previewImage, name, description, category, mainImage, price, id},
}) => {
  return (
    <View style={cardStyles.cardContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SingleView', {donationId: id});
        }}>
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
      </TouchableOpacity>
      <View style={cardStyles.infoSection}>
        <Text style={cardStyles.cardName}>{shortenWords(name, 18)}</Text>
        <Text style={cardStyles.cardPrice}>${price}</Text>
      </View>
    </View>
  );
};

export default CardDetails;
