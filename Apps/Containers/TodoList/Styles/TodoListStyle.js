import { StyleSheet, Platform, StatusBar } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  titleheader: {
    flex: 1,
    marginLeft: 20,
  },
  myPhoto: {
    marginTop: 5,
    height: 90,
    backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});
