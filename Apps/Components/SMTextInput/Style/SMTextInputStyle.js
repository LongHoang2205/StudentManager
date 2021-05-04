import { StyleSheet } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  container: {
    marginHorizontal: Metrics.doubleBaseMargin,
    marginVertical: Metrics.baseMargin,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E6EAEE",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  title: {
    marginVertical: Metrics.baseMargin - 2,
    fontSize: 15,
    color: Colors.black,
    marginLeft: 10,
  },
  input: {
    height: 50,
    borderRadius: 20,
    paddingHorizontal: 20,
    width: 200,
  },
});
