import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../scaling";

const registerStyles = StyleSheet.create({
    pageContainer: {
      backgroundColor: "#fff",
      flex: 1,
      justifyContent: "center",
      position: "relative"
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
})

export default registerStyles