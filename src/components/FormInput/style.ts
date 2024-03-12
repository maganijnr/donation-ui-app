import { StyleSheet } from "react-native";
import { getFontFamily } from "../../../assets/fonts/helper";
import { scaleFontSize, verticalScale } from "../../scaling";

const inputStyles = StyleSheet.create({
   inputContainer: {},
   inputLabel: {
      color: "#36455A",
      fontFamily: getFontFamily('Inter', '400'),
      fontSize: scaleFontSize(12),
      
   },
   input: {
      borderBottomWidth: 1,
      height: 40,
      borderColor: "rgba(167,167,167, .5)"
   }
})

export default inputStyles