import React from "react";
import { Text, View, StyleSheet,TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';


const SearchBar = (props) => {
  return(
    <View style={styles.bg}>
    <Feather name="search" style={styles.icon}/>
      <TextInput 
      style={styles.input} 
      placeholder="Type Here"
      onChangeText={props.setNewText}
      onSubmitEditing={props.onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    bg:{
        
        height: 50,
        backgroundColor: "#e0e0e0",
        borderRadius: 4,
        flexDirection: 'row',
        margin:15,
    },
    icon:{
        alignSelf:'center',
        fontSize:24,
        marginLeft: 10,
        
    },
    input:{
        flex: 1,
        marginLeft:10,
        fontSize:16,
        fontFamily:'serif'
    }
})
export default SearchBar;
