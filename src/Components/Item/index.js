import React, {useState} from "react"
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";

export default function Item({userName, picsSource, subtitle, said, numLikes}){

    return(
    <View style={styles.container}>
        <Image style={styles.pics} source={picsSource}/>
        <Text style={styles.nameSub}>{userName}: {subtitle}</Text>
        <View style={styles.line}></View>
        <Text style={styles.saidTitles}>Comentários:</Text>
        <Text style={styles.said}>{said}</Text>
        <View style={{flexDirection: "row", marginTop: 4}} >
            <TouchableOpacity onPress={increment}>
                <Image style={styles.like} source={require("../Images/Icons/like.png")} />
            </TouchableOpacity>
            <Text style = {styles.countLikes}> {counter} </Text>
            <Image style={styles.comment} source={require("../Images/Icons/comment.png")} />
            <Image style={styles.comment} source={require("../Images/Icons/send.png")} />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 17,
        marginBottom:15,
        height: 415,
        width: 315,
        flexDirection: "column",
        alignItems:"center", 
        borderRadius: 5,
        backgroundColor: "rgba(200, 200, 200, 1)"
    },
    name:{
        marginLeft: 20,
        alignSelf: "flex-start",
        marginTop: 6,
        marginBottom: 6,
        fontWeight: "bold",
        fontSize: 12,
        color: "#1a1a1a"
    },
    nameSub:{
        marginLeft: 20,
        alignSelf: "flex-start",
        marginTop: 6,
        marginBottom: 6,
        fontWeight: "bold",
        fontSize: 12,
        color: "#1a1a1a"
    },
    pics:{
        marginTop:15,
        height:280,
        width:280,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgba(150,150,150, .4)'
    },
    subtitle:{
        marginLeft: 20,
        alignSelf: "flex-start",
        marginTop: 20,
        marginBottom: 0,
        fontWeight: "normal",
        fontSize: 15,
        color: "#1a1a1a"
    },
    saidTitles:{
        marginLeft: 20,
        alignSelf: "flex-start",
        marginTop: 4,
        marginBottom: 0,
        fontWeight: "bold",
        fontSize: 12,
        color: "rgba(20,20,20, .4)"
    },
    said:{
        marginLeft: 20,
        alignSelf: "flex-start",
        marginTop: 3,
        marginBottom: 6,
        fontWeight: "bold",
        fontSize: 12,
        color: "#1a1a1a"
    },
    line:{
        height: 1,
        width: 280,
        flexDirection: "column",
        alignItems:"center", 
        borderRadius: 5,
        backgroundColor: "rgba(20, 20, 20, .2)"
    },
    like:{
        marginRight:20,
        marginLeft:20,
        height: 35,
        width:35,
        tintColor: "#f3833f",
    },
    countLikes:{
        marginTop:10,
        marginRight:20,
        marginLeft:60,
        height: 20,
        width:35,
        fontSize: 12,
        color: "#1a1a1a",
        fontWeight: "bold",
        position:"absolute",
    },
    comment:{
        marginRight:20,
        marginLeft:20,
        height: 35,
        width:35,
        tintColor: "#f3833f",
    },
    send:{
        marginRight:20,
        marginLeft:20,
        height: 35,
        width:35,
        tintColor: "#f3833f",
    }
})

