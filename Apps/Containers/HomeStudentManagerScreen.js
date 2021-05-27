import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

// styles
import styles from "../../styles";

// components
import { SMIconButton, SMHeader, SMButton } from "../Components";
import { SMStudentList } from "../Components/SMStudentList";

// themes
import { Images, Colors, Metrics } from "../Themes";

//redux
import { useSelector, useDispatch } from "react-redux";
import { removeStudent } from "../Redux/Actions";

function HomeStudentManagerScreen({ navigation }) {
  const dispatch = useDispatch();
  const studentState = useSelector((state) => state.student);
  const studentData = studentState.addStudent;

  const onPressTodoList = () => {
    navigation.navigate("TodoList");
  };

  const onPressInformation = () => {
    navigation.navigate("ShowInformation");
  };

  const onPressMove = () => {
    navigation.navigate("AddStudent");
  };

  const onPressEdit = (item) => {
    navigation.navigate("AddStudent", { title: "Edit Student", item });
  };

  const onPressDelete = (item) => {
    dispatch(removeStudent({ item }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <SMHeader title={"Student manager"} titleStyle={styles.titleheader} />
        {/* Luon them key cho flatlist (key khong duoc trung nhau) */}
        <FlatList
          data={studentData}
          renderItem={({ item, index }) =>
            SMStudentList(item, index, onPressEdit, onPressDelete)
          }
          keyExtractor={(item, index) => item.id + index}
        />
      </View>
      <SMButton
        onPressButton={onPressInformation}
        text="Get information from api"
      />
      <SMButton onPressButton={onPressTodoList} text="Get todo list from api" />
      <SMButton onPressButton={onPressMove} text="Add New Student" />
    </SafeAreaView>
  );
}

export default HomeStudentManagerScreen;
