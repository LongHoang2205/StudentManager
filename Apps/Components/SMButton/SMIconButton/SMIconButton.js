import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";

// styles
import styles from "./Styles/SMIconButtonStyle";

// theme
import { Images, Metrics, Colors } from "../../../Themes";

export default function SMIconButton({
  onPressButton,
  btnStyle,
  imgSource,
  iconStyle,
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonIcons, btnStyle]}
      onPress={onPressButton}
    >
      <Image source={imgSource} style={[styles.icons, iconStyle]} />
    </TouchableOpacity>
  );
}
