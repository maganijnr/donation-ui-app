import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CardProps} from '../HomeScreen/HomeScreen';
import {getDonationById} from '../../data/donationData';
import singleStyles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Button/Button';
import {horizontalScale, verticalScale} from '../../scaling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeftLong, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const SingleViewScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [donation, setDonation] = useState<CardProps | null>(null);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const handleScroll = (event: any) => {
    //  const positionX = event.nativeEvent.contentOffset.x;
    const positionY = event.nativeEvent.contentOffset.y;
    //  console.log(positionY);
    if (Number(positionY) > 40) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  console.log(isFixed);

  useEffect(() => {
    if (route.params?.donationId) {
      const item = getDonationById(Number(route.params?.donationId));
      setDonation(item);
    }
  }, [route.params?.donationId]);
  return (
    <SafeAreaView style={singleStyles.pageContainer}>
      <ScrollView
        style={singleStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          handleScroll(event);
        }}
        scrollEventThrottle={16}>
        <View style={singleStyles.pageHeader}>
          <Pressable
            style={singleStyles.backButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faArrowLeftLong} color="#fff" />
          </Pressable>
        </View>
        <View style={singleStyles.imageContainer}>
          <Image
            source={donation?.mainImage}
            resizeMode="cover"
            style={singleStyles.image}
          />
        </View>
        <View style={singleStyles.cardCategory}>
          <Text style={singleStyles.cardCategoryText}>
            {donation?.category}
          </Text>
        </View>
        <Text style={singleStyles.donationName}>{donation?.name}</Text>
        <Text style={singleStyles.donationDesc}>{donation?.description}</Text>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: horizontalScale(20),
          backgroundColor: '#fff',
          paddingVertical: verticalScale(10),
        }}>
        <Button
          buttonTitle="Donate"
          disabled={false}
          onPress={() => {}}
          isLoading={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleViewScreen;
