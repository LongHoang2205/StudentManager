import React, { Component } from "react";
import { Image, TouchableOpacity, Text } from "react-native";

// styles

// theme
import { Images, Metrics, Colors } from "../../Themes";

export default function SMButton({
  onPressButton,
  btnStyle,
  imgSource,
  iconStyle,
  text,
}) {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.btn,
        height: 50,
        borderRadius: 6,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 37,
      }}
    >
      <Text style={{ fontSize: 17, color: Colors.white }}>{text}</Text>
    </TouchableOpacity>
  );
}
