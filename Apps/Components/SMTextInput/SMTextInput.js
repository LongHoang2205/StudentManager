import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

// styles
import styles from "./Style/SMTextInputStyle";

class SMTextInput extends Component {
  render() {
    const {
      placeholder,
      onChangeText,
      title,
      value,
      inputStyle,
      textInputStyle,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={[styles.title, textInputStyle]}>{title}</Text>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#4C475A"
          style={[styles.input, inputStyle]}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
    );
  }
}

export default SMTextInput;
