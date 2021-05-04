import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

// styles
import styles from "./Styles/AddStudentStyle";

// components

import {
  SMIconButton,
  SMHeader,
  SMTextInput,
  SMButton,
} from "../../Components";
import { useSelector, useDispatch } from "react-redux";

import { Images } from "../../Themes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { addStudent, editStudent, removeStudent } from "../../Redux/Actions";
export default function AddStudent({ route, navigation }) {
  // param tu navigation chuc nang edit
  const titleHeader = route?.params?.title;
  const item = route?.params?.item;

  const dispatch = useDispatch();
  const addStudentState = useSelector((state) => state);

  const [nameInput, setNameInput] = useState(titleHeader ? item.name : "");
  const [emailInput, setEmailInput] = useState(titleHeader ? item.email : "");
  const [phoneInput, setPhoneInput] = useState(titleHeader ? item.phone : "");
  const [genderInput, setGenderInput] = useState(
    titleHeader ? item.gender : ""
  );

  const onChangeTextName = (text) => {
    setNameInput(text);
  };
  const onChangeTextEmail = (text) => {
    setEmailInput(text);
  };
  const onChangeTextPhone = (text) => {
    setPhoneInput(text);
  };
  const onChangeTextGender = (text) => {
    setGenderInput(text);
  };
  const onPressDelete = (item) => {
    dispatch(removeStudent({ item }));
  };
  const onPressBack = () => {
    navigation.goBack();
  };
  const addStudentPress = () => {
    if (!titleHeader) {
      const name = nameInput ? nameInput : "task has not name";
      dispatch(
        addStudent({
          name: nameInput,
          email: emailInput,
          phone: phoneInput,
          gender: genderInput,
        })
      );
    } else {
      dispatch(
        editStudent({
          item,
          name: nameInput,
          email: emailInput,
          phone: phoneInput,
          gender: genderInput,
        })
      );
    }
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <SMHeader
          title={"Add Student"}
          titleStyle={styles.titleheader}
          leftIconSource={Images.back}
          leftIconPress={onPressBack}
        />
      </View>
      <View style={styles.myPhoto}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>My Photo</Text>
        <SMIconButton
          imgSource={{
            uri:
              "data:image/jpeg;base64,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",
          }}
          iconStyle={{ width: 50, height: 50, borderRadius: 30 }}
        />
      </View>
      <View
        style={{ backgroundColor: Colors.white, marginTop: 10, height: 342 }}
      >
        <SMTextInput
          title="Name"
          placeholder="name"
          onChangeText={(text) => onChangeTextName(text)}
          value={nameInput}
        />
        <SMTextInput
          title="Email"
          placeholder="email"
          onChangeText={(text) => onChangeTextEmail(text)}
          value={emailInput}
        />
        <SMTextInput
          title="Phone"
          placeholder="phone"
          onChangeText={(text) => onChangeTextPhone(text)}
          value={phoneInput}
        />
        <SMTextInput
          title="Gender"
          placeholder="Gender"
          onChangeText={(text) => onChangeTextGender(text)}
          value={genderInput}
        />
      </View>
      <View>
        <SMButton text="Add" onPressButton={addStudentPress} />
      </View>
      <View>
        <SMButton text="delete" onPressButton={onPressDelete} />
      </View>
    </SafeAreaView>
  );
}
