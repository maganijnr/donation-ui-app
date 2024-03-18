import { getFontFamily } from './../../../assets/fonts/helper';
import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../scaling";

const homeStyles = StyleSheet.create({
   pageContainer: {
      backgroundColor: "#fff",
      flex: 1,
      position: "relative"
   },
   pageHeader: {
      // paddingHorizontal: horizontalScale(20),
      paddingTop: verticalScale(20),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   username: {
      color: "#022150",
      fontFamily: getFontFamily('Inter', '600'),
      fontSize: scaleFontSize(24),
   },
   usergreeting: {
      color: "#636776",
      fontFamily: getFontFamily('Inter', '400'),
      fontSize: scaleFontSize(16),
   },
   searchContainer: {
      backgroundColor: "#F3F5F9",
      height: verticalScale(45),
      flexDirection: 'row',
      borderRadius: verticalScale(15),
      alignItems: "center",
      paddingHorizontal: horizontalScale(15),
      gap: horizontalScale(5),
      overflow: "hidden"
   },
   searchInput: {
      width: '100%',
      height: '100%',
      paddingHorizontal: horizontalScale(10),
      borderWidth: 0
   },
   gradientCard: {
      height: verticalScale(150),
      borderRadius: horizontalScale(15),
      position: 'relative',
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(30)
   },
   cubeContainer: {
      position: 'absolute',
      bottom: -verticalScale(9),
      right: horizontalScale(20),
      width: horizontalScale(100),
      height: verticalScale(100)
   },
   arrivalText: {
      maxWidth: horizontalScale(200),
      fontSize: scaleFontSize(20),
      fontFamily: getFontFamily('Inter', '600'),
      color: "#fff"
   },
   checkBtn: {
      marginTop: verticalScale(20),
      flexDirection: 'row',
      gap: horizontalScale(10),
      alignItems: "center",
   },
   checkTxt: {
      fontSize: scaleFontSize(14),
      fontFamily: getFontFamily('Inter', '600'),
      color: "#fff"
   },
   categoryText: {
      color: '#022150',
      fontSize: scaleFontSize(18),
      fontFamily: getFontFamily('Inter', '600'),
   },
   categoriesContainer: {
      marginTop: verticalScale(10),
   },
   categoryButton: {
      marginHorizontal: horizontalScale(5),
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(10),
      borderRadius: horizontalScale(100)
      
   },
   buttonText: {
      fontFamily: getFontFamily('Inter', '500'),
      fontSize: scaleFontSize(14),
   },
   cardListView: {

   },
   emptyListView: {
      backgroundColor: "#EFF2F6",
      width: '100%',
      height: verticalScale(200),
      minHeight: verticalScale(200),
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(20),
      borderRadius: horizontalScale(20),
      marginTop: verticalScale(10)
   }, 
   emptyText: {
      fontFamily: getFontFamily('Inter', '500'),
      fontSize: scaleFontSize(14),
      color: "#022150"
   }
})

export default homeStyles