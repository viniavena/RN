import React,{useState} from "react";
import {View,Image,Text,StyleSheet,TouchableOpacity} from "react-native";


import Header from '../../Components/Header';



export default function FeedPosts ({picsSource, userName}){

    const[counter,setCounter] = useState (0)
    function increment (){
        setCounter (counter+1);
    }
    
    return(

        <View style = {styles.container}>
            <Header />
            
            <View style = {styles.profileContainer}>
                 <Image style={styles.logoName} source={require("../../Components/Images/Logo/logoName.png")}/>  
                <Image style={styles.profilePics} source={require("../../Components/Images/Tales/profile6.png")}/>
            </View>
            <Text style = {styles.UserName}>Consultor_Fluxo</Text>
            <Text style = {styles.bioPerfil}>Estamos aqui para ajudar</Text>
            <Text style = {styles.selfFollow}>Caveiras: 1.250</Text>
            <Text style = {styles.selfPosts}>Thunders: 2</Text>
            <View style = {styles.containerFeed}>
                <Image style={styles.profileFeed} source={require("../../Components/Images/Posts/post5.png")}/>
                <Text style={styles.name}>Consultor_Fluxo: Juntos vamos mais longe!</Text>
            <View style={styles.line}></View>
            <Text style={styles.saidTitles}>Comentários:</Text>
            <Text style={styles.said}>gabriel_pupe: É isso!</Text>
            <View style={{flexDirection: "row", marginTop: 8}} >
            <TouchableOpacity onPress={increment}>
                <Image style={styles.like} source={require('../../Components/Images/Icons/like.png')} />
            </TouchableOpacity>
            <Text style = {styles.countLikes}> {counter} </Text>
                <Image style={styles.comment} source={require("../../Components/Images/Icons/comment.png")} />
                <Image style={styles.comment} source={require("../../Components/Images/Icons/send.png")} />
            </View>
        </View>

    </View>
 
    
        
     
    )
    
}

const styles = StyleSheet.create({
    container:{
        height: 150,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#f3833f",
        justifyContent: "center"
    },
    profilePics:{
        height:60,
        width:60,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(150,150,150, .4)',
        position:"absolute",
        top:635,
        left:15
    
    
    },
    logoName:{
        position:"absolute",
        top:560,
        left:160,
        
        height: 33,
        width: 100,
        marginTop: 15
    },

    profileContainer:{
        backgroundColor:"#f3833f",
        height:100,
        width:"100%",
        flexDirection:"row"
    },
    UserName:{
        
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        position:"absolute",
        top:80

    },
    bioPerfil:{
        fontSize: 15,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        position:"absolute",
        top:170,
        left:30 

    },
    selfFollow:{
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        position:"absolute",
        top:110,
        left:250
        

    },
    selfPosts:{

    
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        position:"absolute",
        top:110,
        left:90
    },
    containerFeed:{


        height:520,
        marginTop: 700,
        marginBottom:15,
        width: 315,
        flexDirection: "column",
        alignItems:"center", 
        borderRadius: 5,
        backgroundColor: "rgba(200, 200, 200, 1)",
        borderWidth: 5
        
    },

    profileFeed:{
        marginTop:20,
        width:280,
        
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 5,
        borderColor: "rgba(200, 200, 200, 1)",
        borderWidth: 2
                

    },

    line:{
        height: 1,
        width: 280,
        flexDirection: "column",
        alignItems:"center", 
        borderRadius: 5,
        backgroundColor: "rgba(20, 20, 20, .2)"



        
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
    like:{
        marginRight:20,
        marginLeft:20,
        height: 35,
        width:35,
        tintColor: "#f3833f"
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
        tintColor: "#f3833f"
    },

    send:{
        marginRight:20,
        marginLeft:20,
        height: 35,
        width:35,
        tintColor: "#f3833f"
    },
    name:{
        marginLeft: 20,
        alignSelf: "flex-start",
        marginTop: 6,
        marginBottom: 6,
        fontWeight: "bold",
        fontSize: 12,
        color: "#1a1a1a"
    }
  
    

})
