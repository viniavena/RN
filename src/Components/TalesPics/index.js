import React from "react";
import {View, StyleSheet, Image, Text} from "react-native";

export default function TalesPic ({picsSource, userName}){
    return(
        <View style={styles.container}>
            <Image style={styles.pics} source={picsSource}/>
            <Text style={styles.name}>{userName}</Text>
        </View>
        );
    }

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center", 
        marginLeft: 20,
    },
    pics:{
        height:60,
        width:60,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(150,150,150, .4)'
    },
    name:{
        marginTop: 4,
        fontWeight: "bold",
        fontSize: 9,
        color: "white",
        alignItems: "center",
        justifyContent: "center"
    }
})