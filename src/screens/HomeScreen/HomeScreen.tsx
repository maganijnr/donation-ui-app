import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import homeStyles from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {horizontalScale, verticalScale} from '../../scaling';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  faArrowRightLong,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import globalStyles from '../../globalStyles';
import CardDetails from '../../components/Card/CardDetails';
import {donationList} from '../../data/donationData';

export interface CardProps {
  id: number;
  name: string;
  description: string;
  category: string;
  previewImage: ImageSourcePropType;
  mainImage: ImageSourcePropType;
  price: string;
}

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [categoryList, setCategoryList] = useState<CardProps[]>([]);

  const categories = [
    {value: 'all', label: 'Highlight'},
    {value: 'lifestyle', label: 'Lifestyle'},
    {value: 'environment', label: 'Environment'},
    {value: 'education', label: 'Education'},
    {value: 'medicine', label: 'Medicine'},
    {value: 'technology', label: 'Technology'},
  ];

  useEffect(() => {
    if (categoryFilter === 'all') {
      setCategoryList(donationList);
    } else if (categoryFilter === 'lifestyle') {
      const items = donationList.filter(
        item => item.category === categoryFilter,
      );
      setCategoryList(items);
    } else if (categoryFilter === 'environment') {
      const items = donationList.filter(
        item => item.category === categoryFilter,
      );
      setCategoryList(items);
    } else if (categoryFilter === 'education') {
      const items = donationList.filter(
        item => item.category === categoryFilter,
      );
      setCategoryList(items);
    } else if (categoryFilter === 'medicine') {
      const items = donationList.filter(
        item => item.category === categoryFilter,
      );
      setCategoryList(items);
    } else if (categoryFilter === 'technology') {
      const items = donationList.filter(
        item => item.category === categoryFilter,
      );
      setCategoryList(items);
    }
  }, [donationList, categoryFilter]);

  return (
    <SafeAreaView style={homeStyles.pageContainer}>
      <View style={homeStyles.cardListView}>
        <FlatList
          data={categoryList}
          renderItem={({item}) => <CardDetails cardInfo={item} />}
          ListHeaderComponent={
            <>
              <View style={homeStyles.pageHeader}>
                <View>
                  <Text style={homeStyles.usergreeting}>Hello,</Text>
                  <Text style={homeStyles.username}>Joshua M.</Text>
                </View>

                <Image source={require('../../../assets/images/avatar.png')} />
              </View>

              <View
                style={[
                  {},
                  {
                    marginTop: verticalScale(20),
                  },
                ]}>
                <View style={homeStyles.searchContainer}>
                  <Pressable>
                    <FontAwesomeIcon icon={faSearch} color="#25C0FF" />
                  </Pressable>
                  <TextInput
                    style={homeStyles.searchInput}
                    placeholder="Search"
                    placeholderTextColor={'#686C7A'}
                    value={search}
                    onChangeText={setSearch}
                  />
                </View>
              </View>

              <View
                style={[
                  {},
                  {
                    marginTop: verticalScale(20),
                  },
                ]}>
                <LinearGradient
                  colors={['#69D1FD', '#0093FD', '#022150']}
                  style={homeStyles.gradientCard}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}>
                  <Text style={homeStyles.arrivalText}>
                    New Arrival change your lifestyle.
                  </Text>

                  <TouchableOpacity style={homeStyles.checkBtn}>
                    <Text style={homeStyles.checkTxt}>Check Now</Text>
                    <FontAwesomeIcon icon={faArrowRightLong} color="#fff" />
                  </TouchableOpacity>

                  <View style={homeStyles.cubeContainer}>
                    <Image
                      source={require('../../../assets/images/cube_image.png')}
                      resizeMode="contain"
                    />
                  </View>
                </LinearGradient>
              </View>

              <View
                style={[
                  {},
                  {
                    marginTop: verticalScale(20),
                  },
                ]}>
                <Text style={homeStyles.categoryText}>Select Category</Text>

                <View style={homeStyles.categoriesContainer}>
                  <FlatList
                    data={categories}
                    renderItem={({item, index}) => (
                      <TouchableOpacity
                        key={item.value}
                        style={[
                          homeStyles.categoryButton,
                          {
                            backgroundColor:
                              item?.value === categoryFilter
                                ? '#2979F2'
                                : '#F3F5F9',
                          },
                        ]}
                        onPress={() => {
                          setCategoryFilter(item.value);
                        }}>
                        <Text
                          style={[
                            homeStyles.buttonText,
                            {
                              color:
                                item?.value === categoryFilter
                                  ? '#FFFFFF'
                                  : '#79869F',
                            },
                          ]}>
                          {item.label}
                        </Text>
                      </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            </>
          }
          ListEmptyComponent={() => (
            <View style={homeStyles.emptyListView}>
              <View>
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  color="#2979F2"
                  size={100}
                />
              </View>
              <Text style={homeStyles.emptyText}>This category is empty!</Text>
            </View>
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: horizontalScale(12),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
