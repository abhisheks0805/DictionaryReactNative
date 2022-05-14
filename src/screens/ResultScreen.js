import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import useResults from "../hooks/useResults";

const ResultScreen = ({ route }) => {
  const text = route.params.text;
  const [data, fetchData] = useResults();
  

  useEffect(() => {
    fetchData(text);
  }, []);

  if (data.length == 0) {
    return null;
  }
  return (
    <ScrollView>
      <Text style={styles.titleStyle}>{text}</Text>
      <Text style={styles.phoneticsStyle}>{data.phonetics[0].text}</Text>
      <Text style={styles.subHeading}>DEFINITIONS:</Text>
      {data.meanings[0].definitions.map((element, index) => {
        return (
          <Text style={{ marginLeft: 15 }}>
            {index + 1}. {element.definition}
            {"\n"}
            {element.example ? "Example: " + element.example + "\n" : null}
          </Text>
        );
      })}

      <View style={styles.antSynContainer}>
        <View>
          <Text style={styles.subHeading}>SYNONYMS</Text>
          {data.meanings[0].synonyms.map((element) => {
            return (
              <Text style={{ marginLeft: 15 }}>
                {element}
                {"\n"}
              </Text>
            );
          })}
        </View>
        <View>
          <Text style={styles.subHeading}>ANTONYMS</Text>
          {data.meanings[0].antonyms.map((element) => {
            return (
              <Text style={{ marginLeft: 15 }}>
                {element}
                {"\n"}
              </Text>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    marginLeft: 15,
    marginTop: 15,
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  phoneticsStyle: {
    color: "blue",
    marginLeft: 15,
  },
  subHeading: {
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 15,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  antSynContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginRight:55,
  },
});
export default ResultScreen;
