import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.title}>Dictionary</Text>
      <SearchBar
        setNewText={(changedText) => {
          setText(changedText);
        }}
        onSubmit={() => {
          navigation.navigate("ResultScreen", { text: text });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,

    fontWeight: "bold",
    fontSize: 44,
  },
});

export default SearchScreen;
