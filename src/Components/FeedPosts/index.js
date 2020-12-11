import React from "react";
import {View, StyleSheet, Image, Text} from "react-native";

export default function FeedPosts ({picsSource, userName}){

    const[counter,setCounter] = useState (0)
    function increment (){
        setCounter (counter+1);
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{userName}</Text>
            <Image style={styles.pics} source={picsSource}/>
            <View style={{flexDirection: "row", marginTop: 8}} >
            <TouchableOpacity onPress={increment}>
                <Image style={styles.like} source={require('../Images/Icons/like.png')} />
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
        marginTop: 25,
        height: 360,
        width: 315,
        flexDirection: "column",
        alignItems:"center", 
        borderRadius: 5,
        backgroundColor: "rgba(200, 200, 200, 1)"
    },
    pics:{
        height:280,
        width:280,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgba(150,150,150, .4)'
    },
    name:{
        marginLeft: "-60%",
        marginTop: 6,
        marginBottom: 6,
        fontWeight: "bold",
        fontSize: 12,
        color: "#1a1a1a"
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
        position:"absolute"

        

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
    },
})