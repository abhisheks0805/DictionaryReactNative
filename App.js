import React from "react";
import { ToastProvider } from "react-native-toast-notifications";
import SearchScreen from "./src/screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultScreen from "./src/screens/ResultScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ToastProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ToastProvider>
  );
};

export default App;
