import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView,ActivityIndicator } from "react-native";
import useResults from "../hooks/useResults";

const ResultScreen = ({ route }) => {
  const text = route.params.text;
  const [data, fetchData, loading] = useResults();

  useEffect(() => {
    fetchData(text);
  }, []);

  if (data.length == 0) {
    return null;
  }
  
  console.log(loading);
  return (
    <View style={styles.container}>
      {loading?(<View style={styles.loadingContainer}><ActivityIndicator size={"large"}/></View>):(<ScrollView style={{minWidth:"100%"}}>
        <Text style={styles.titleStyle}>{text}</Text>
        
        <Text style={styles.phoneticsStyle}>{!data.phonetics.length==0?data.phonetics[0].text:null}</Text>
        <Text style={styles.subHeading}>DEFINITIONS:</Text>
        {data.meanings[0].definitions.map((element, index) => {
          return (
            <Text key={index} style={{ marginLeft: 15 }}>
              {index + 1}. {element.definition}
              {"\n"}
              {element.example ? "\n Example: " + element.example + "\n" : null}
            </Text>
          );
        })}

        <View style={styles.antSynContainer}>
          <View>
            <Text style={styles.subHeading}>
              {!data.meanings[0].synonyms.length == 0 ? "SYNONYMS" : null}
            </Text>
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
            <Text style={styles.subHeading}>
              {!data.meanings[0].antonyms.length == 0 ? "ANTONYMS" : null}
            </Text>
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
      </ScrollView>)}
      
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    flexWrap: "wrap",
  },
  titleStyle: {
    marginLeft: 15,
    marginTop: 30,
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
    marginRight: 55,
  },
  loadingContainer:{
    
    minHeight:"100%",
    minWidth:"100%",
    display: "flex",
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  }
});
export default ResultScreen;
