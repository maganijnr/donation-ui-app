import { StyleSheet } from "react-native";
import { horizontalScale } from "./scaling";

const globalStyles = StyleSheet.create({
   viewPadding: {
      paddingHorizontal: horizontalScale(20),
   }
})

export default globalStyles