import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.searchScreenContainerStyle}>
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
  searchScreenContainerStyle: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginLeft: 15,
    fontFamily: "serif",
  },
});

export default SearchScreen;
