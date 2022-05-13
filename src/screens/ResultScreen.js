import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";

const ResultScreen = ({ navigation, route }) => {
  const [meanings, setMeanings] = useState([]);
  const text = route.params.text;
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const parsedResponse = await response.json();
      setMeanings(parsedResponse[0].meanings[0]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ScrollView>
        <Text style={styles.title}>{text}</Text>
        <Text>{}</Text>
        <Text style={styles.subHeading}>DEFINITIONS:</Text>
        <FlatList
          data={meanings.definitions}
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
            data={meanings.synonyms}
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
            data={meanings.antonyms}
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
      </ScrollView>
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
