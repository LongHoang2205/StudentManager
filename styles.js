import { StyleSheet, Platform, StatusBar } from "react-native";
import { Metrics, Images, Colors } from "./Apps/Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  head: {
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    flexDirection: "row",
  },
  textHead: {
    fontSize: Metrics.h5,
    color: Colors.white,
    fontWeight: "bold",
  },
  buttonIcons: {
    position: "absolute",
    right: 20,
  },
  icons: {
    width: 20,
    height: 20,
  },
  titleheader: {
    flex: 1,
    marginLeft: 20,
  },
  listContainer: {
    marginTop: 10,
  },
  titleheaderAddNewTask: {
    flex: 1,
    textAlign: "center",
  },
});
