import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../scaling";
import { getFontFamily } from "../../../assets/fonts/helper";

const loginStyles = StyleSheet.create({
   pageContainer: {
      backgroundColor: "#fff",
      flex: 1,
      justifyContent: "center",
   },

   pageContentWrapper: {
      paddingHorizontal: horizontalScale(20),
      gap: verticalScale(15),
     
   },
   redirectButton: {
      marginTop: verticalScale(10), 
      alignItems: "center",
      justifyContent: "center",
   },

   redirectText: {
      color: "#156CF7",
      fontFamily: getFontFamily('Inter', '600'),
      fontSize: scaleFontSize(16),
   }

})

export default loginStyles