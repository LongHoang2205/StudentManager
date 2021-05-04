import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Images } from "../../Themes";

export default function SMStudentList(item, index, onPressEdit, onPressDelete) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 115,
        marginHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 7,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
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
      </View>
      <TouchableOpacity
        onPress={() => onPressEdit(item)}
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          height: 30,
          width: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 12, color: "#848991" }}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}
