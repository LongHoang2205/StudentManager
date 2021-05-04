import { StyleSheet } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  header: {
    alignItems: "center",
    height: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Colors.white,
  },
  textHead: {
    fontSize: 24,
    color: Colors.text,
    fontWeight: "bold",
  },
  icons: {
    width: 20,
    height: 20,
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
