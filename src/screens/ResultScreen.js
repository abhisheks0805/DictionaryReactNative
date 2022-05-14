import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import useResults from "../hooks/useResults";

const ResultScreen = ({route }) => {
  const text = route.params.text;
  const [data, fetchData] = useResults();

  useEffect(() => {
    fetchData(text);
  }, []);

  console.log(data);

  if (data.length == 0) {
    return null;
  }
  return (
    <>
      <Text style={styles.title}>{text}</Text>
      <Text>{data.phonetics[0].text}</Text>
      <Text style={styles.subHeading}>DEFINITIONS:</Text>
      <FlatList
        data={data.meanings[0].definitions}
        renderItem={({ item, index }) => {
          return (
            <Text>
              {index + 1}. {item.definition}
              {"\n"}
            </Text>
          );
        }}
      />

      <View style={styles.antoSynViewStyle}>
        <Text style>SYNONYMS:</Text>
        <FlatList
          data={data.meanings[0].synonyms}
          renderItem={({ item, index }) => {
            return (
              <Text>
                {index + 1}. {item}
                {"\n"}
              </Text>
            );
          }}
        />
        <Text>ANTONYMS:</Text>
        <FlatList
          data={data.meanings[0].antonyms}
          renderItem={({ item, index }) => {
            return (
              <Text>
                {index + 1}. {item}
                {"\n"}
              </Text>
            );
          }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
export default ResultScreen;
