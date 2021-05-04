import React from "react";
import { Text, View } from "react-native";

// styles
import styles from "./Styles/SMHeaderStyles";

// componenst
import { SMIconButton } from "../../Components/SMButton";

export default function SMHeader({
  title,
  leftIconSource,
  rightIconSource,
  leftIconPress,
  rightIconPress,
  titleStyle,
  headerContainer,
  btnUser,
  iconStyle,
}) {
  return (
    <View style={styles.header}>
      <SMIconButton
        imgSource={leftIconSource}
        btnStyle={[styles.iconButton, btnUser]}
        onPressButton={leftIconPress}
        iconStyle={iconStyle ? iconStyle : { tintColor: "black" }}
      />
      <Text style={[styles.textHead, titleStyle]}>{title}</Text>
    </View>
  );
}
