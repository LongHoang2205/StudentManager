import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Redux
import { Provider } from "react-redux";
import store from "./Apps/Redux/Store/store";

// Screen
import HomeStudentManagerScreen from "./Apps/Containers/HomeStudentManagerScreen";
import AddStudent from "./Apps/Containers/AddStudent/AddStudent";
import TodoList from "./Apps/Containers/TodoList/TodoList";
import ShowInformation from "./Apps/Containers/ShowInformation/ShowInformation";

const Tab = createMaterialTopTabNavigator();

// Auth stack
const HomeStack = createStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeStudentManagerScreen"
    >
      <HomeStack.Screen
        name="HomeStudentManagerScreen"
        component={HomeStudentManagerScreen}
      />
      <HomeStack.Screen name="AddStudent" component={AddStudent} />
      <HomeStack.Screen name="TodoList" component={TodoList} />
      <HomeStack.Screen name="ShowInformation" component={ShowInformation} />
    </HomeStack.Navigator>
  );
}

const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"HomeStudentManagerScreen"}
          headerMode={"none"}
        >
          <Stack.Screen name={"HomeStack"} component={HomeStacks} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
