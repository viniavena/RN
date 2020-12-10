import React from 'react';
import { StyleSheet, View, FlatList, Image} from 'react-native';
import Item from '../../Components/Item';
import Header from '../../Components/Header';
import TalesDiv from '../../Components/TalesDiv';

export default function Feed() {
    const list = [
        {
            id: 1,
            userName: "gabriel_pupe",
            picsSource: require("../../Components/Images/Posts/post1.png"),
            subtitle: "Classic 🤙",
            said: "dudu_henriques: Haole"
        },
    
        {
            id: 2,
            userName: "vini_avena",
            picsSource: require("../../Components/Images/Posts/post2.png"),
            subtitle: "Vivendo ✌️",
            said: "bruno_aguiar: Fotão"
        },
    
        {
            id: 3,
            userName: "isabela_farina",
            picsSource: require("../../Components/Images/Posts/post3.png"),
            subtitle: "❄️🥶🏔",
            said: "gabriel_pupe: ❄️🤩 "
        },
    
        {
            id: 4,
            userName: "julia_chagas",
            picsSource: require("../../Components/Images/Posts/post4.png"),
            subtitle: "Que sede 🐫🤤🥵 ",
            said: "isabela_farina: Que lindo 😍"
        }
    ];

    return(
    <View style={styles.container}>
        <Header />
        <TalesDiv />
        <FlatList 
            showsVerticalScrollIndicator ={false}
            data={list}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => < Item userName={item.userName} picsSource={item.picsSource} subtitle={item.subtitle} said={item.said}/>
        }/>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        alignItems: "center",
    },
})