import React,{useState} from "react";
import {View,Image,Text,StyleSheet, FlatList} from "react-native";


import Item from '../../Components/Item';
import Footer from '../../Components/Footer';


export default function FeedPosts ({picsSource, userName}){

    const profileList = [
        {
            id: 3,
            userName: "consultor_fluxo",
            picsSource: require("../../Components/Images/Posts/somosCaveira.png"),
            subtitle: "Somos todos 💀☠️ ",
            said: "gabriel_pupe: Caveira neles! ",
            numLikes: 16,
        },

        {
            id: 2,
            userName: "consultor_fluxo",
            picsSource: require("../../Components/Images/Posts/coordCCE.png"),
            subtitle: "Você conhece a coordenação CCE? 💀",
            said: "bruno_aguiar: A melhor de todas",
            numLikes: 14,
        }
    ];

    return(

        <View style = {styles.container}>
            <View style = {{flexDirection: "column", alignItems: "center", justifyContent:"center" , backgroundColor:"#f3833f" , width: "100%"}}>
                 <Text style = {styles.UserName}>consultor_fluxo</Text>
                <View style = {styles.profileContainer}>
                    <Image style={styles.profilePics} source={require("../../Components/Images/Tales/profile6.png")}/>
                    <Text style = {styles.selfPosts}>Thunders: 2</Text>
                    <Text style = {styles.selfFollow}>Caveiras: 1.250</Text>
                </View>
                <Text style = {styles.bioPerfil}>•Consultor da Empresa Júnior de Consultoria em Engenharia da UFRJ.</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={profileList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Item
                userName={item.userName}
                picsSource={item.picsSource}
                subtitle={item.subtitle}
                said={item.said}
                numLikes={item.numLikes}
              />
            )}
          />
        <Footer />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        alignItems: "center",
    },
    profilePics:{
        height:60,
        width:60,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(150,150,150, .4)',  
        left:"-40%"  
    },
    profileContainer:{
        backgroundColor:"#f3833f",
        height:70,
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",

    },
    UserName:{
        marginTop: "6%",
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
        alignItems: "center",
        justifyContent: "center",

    },
    bioPerfil:{
        fontSize: 15,
        color: "white",
        marginBottom: "5%"

    },
    selfFollow:{
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20

    },
    selfPosts:{
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
    },

    profileFeed:{
        marginTop:20,
        width:"100%",
        
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
