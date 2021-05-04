import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Images } from "../../Themes";

export default function SMStudentList(item, index, onPressEdit) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 115,
        marginHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 7,
        marginVertical: 5,
      }}
    >
      <View style={{ justifyContent: "center" }}>
        <Image
          source={Images.zenitsu}
          style={{
            width: 85,
            height: 85,
            borderRadius: 5,
            marginHorizontal: 20,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "column",
          marginTop: 15,
        }}
      >
        <Text style={{ fontSize: 15 }}>{item.name}</Text>
        <Text style={{ fontSize: 12, lineHeight: 30, color: "#4D4D4D" }}>
          {item.email}
        </Text>
        <Text style={{ fontSize: 12, lineHeight: 30, color: "#4D4D4D" }}>
          {item.phone}
        </Text>
        <TouchableOpacity
          onPress={onPressEdit(item)}
          style={{ position: "absolute", right: -10, bottom: 10 }}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
