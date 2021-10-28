import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'
import Fontisto from "react-native-vector-icons/Fontisto";

export default function Search() {
    return (
        <View style={style.container}>
            <TouchableOpacity style={
                {
                    flexDirection:"row",
                }
            }>
            <Fontisto name="search" size={20} color={"#858585"} padding={5} style={
                {
                    alignSelf:"center",
                    padding:10,
                }
            } />
            <Text style={style.searchbar}>
                Search for Product...
            </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#333333",
        borderRadius:10,
        marginTop:5,
        
    },
    searchbar:{
        padding:10,
        fontSize:15,
        color:"#efefef",
        fontWeight:"700",
    }
})
