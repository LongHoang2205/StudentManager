import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

// styles
import styles from "./Styles/TodoListStyle";

// components
import {
  SMIconButton,
  SMHeader,
  SMTextInput,
  SMButton,
} from "../../Components";

// Themes
import { Images } from "../../Themes";
import {} from "react-native-gesture-handler";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getTodoRequestAction } from "../../Redux/Actions/TodoActions";

export default function AddStudent({ navigation }) {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressGetTodoList = () => {
    // dispatch tới todo request - reudux
    dispatch(getTodoRequestAction());
  };

  const renderItem = (item) => {
    return (
      <View style={{ height: 60, backgroundColor: "grey", marginBottom: 20 }}>
        <Text style={{ margin: 20, color: "white" }}>{item.item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <SMHeader
          title={"List todo"}
          titleStyle={styles.titleheader}
          leftIconSource={Images.back}
          leftIconPress={onPressBack}
        />
        {todoState.todoError ? (
          <Text style={{ margin: 40 }}>Không có data</Text>
        ) : (
          <FlatList
            data={todoState.todoList}
            keyExtractor={(item, index) => item + index.toString()}
            renderItem={(item) => renderItem(item)}
          />
        )}

        <SMButton onPressButton={onPressGetTodoList} text="Add New Student" />
      </View>
    </SafeAreaView>
  );
}
