import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from '../../scaling';
import { getFontFamily } from '../../../assets/fonts/helper';

const singleStyles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#fff',
    flex: 1,
   
   },
   scrollContainer: {
      paddingHorizontal: horizontalScale(20),
      position: 'relative',
      paddingTop: verticalScale(15),
      paddingBottom: verticalScale(20),
   },
   pageHeader: {
      backgroundColor: "#fff",
      // position:"absolute",
      width: '100%',
      paddingVertical: verticalScale(10),
      zIndex: 10
     
   },
   backButton: {
      width: horizontalScale(35),
      height: verticalScale(30),
      borderRadius:horizontalScale(50),
       backgroundColor: "#2979F2",
      alignItems: "center",
      justifyContent:"center"
   },
   imageContainer: {
      width: '100%',
      height: verticalScale(200),
      overflow: 'hidden',
      borderRadius: horizontalScale(16)
   },
   image: {
      width: '100%',
      height: "100%"
   },
    cardCategory: {
      backgroundColor: "#145855",
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(4),
       borderRadius: horizontalScale(100),
       minWidth: horizontalScale(60),
       maxWidth: horizontalScale(80),
       alignItems: "center",
      marginTop: verticalScale(18)
   },
   cardCategoryText: {
      color: "#fff",
      fontSize: scaleFontSize(14),
      fontFamily: getFontFamily('Inter', '600'),
      textTransform:"capitalize"
   },
   donationName: {
      marginVertical: verticalScale(10),
      color: "#022150",
       fontFamily: getFontFamily('Inter', '600'),
      textTransform: "capitalize",
      fontSize: scaleFontSize(24)
   },
   donationDesc: {
       color: "#000",
       fontFamily: getFontFamily('Inter', '500'),
      textTransform: "capitalize",
      fontSize: scaleFontSize(14),
      letterSpacing: scaleFontSize(0.4),
      lineHeight: scaleFontSize(20)
   }
});

export default singleStyles;
