import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../scaling";
import { getFontFamily } from "../../../assets/fonts/helper";

const buttonStyles = StyleSheet.create({
   buttonWrapper: {
      backgroundColor: "#2979F2",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: horizontalScale(50),
      paddingVertical: verticalScale(15)
   },
   buttonText: {
      color: "#FFF",
      fontFamily: getFontFamily('Inter', '600'),
      fontSize: scaleFontSize(16),
   }
})

export default buttonStyles