import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../scaling";
import { getFontFamily } from "../../../assets/fonts/helper";

const cardStyles = StyleSheet.create({
   cardContainer: {
      width: horizontalScale(155),
      marginHorizontal: 5,
      marginVertical: 10,
     
   },
   imageContainer: {
      borderRadius: horizontalScale(20),
      overflow: "hidden",
      position: "relative",
      height: horizontalScale(170)
   },
   cardCategory: {
      position: "absolute",
      backgroundColor: "#145855",
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(4),
      left: 10,
      top: 8,
      borderRadius: horizontalScale(100),
     zIndex:20
   },
   cardCategoryText: {
      color: "#fff",
      fontSize: scaleFontSize(10),
      fontFamily: getFontFamily('Inter', '600'),
      textTransform:"capitalize"
   },
   previewImage: {
      width: "100%",
      height: "100%"
   },
   infoSection: {
      marginTop:verticalScale(10)
   },
   cardName: {
      color: "#0A043C",
      fontSize: scaleFontSize(16),
      fontFamily: getFontFamily('Inter', '600'),
      textTransform:"capitalize"
   },
   cardPrice: {
       color: "#156CF7",
      fontSize: scaleFontSize(16),
      fontFamily: getFontFamily('Inter', '600'),
     
   }
})

export default cardStyles