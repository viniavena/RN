import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import Item from '../../Components/Item';
import Header from '../../Components/Header';
import TalesDiv from '../../Components/TalesDiv';

export default function Feed() {
    const picList = [
        {
            id: 1,
            userName: "julia_chagas",
            subtitle: "Exausta com esse PAME, mas com o sorriso no rosto",
            said: "bruno_aguiar: Caveira 💀☠️",
            numLikes: 9,
        },
    
        {
            id: 2,
            userName: "julia_chagas",
            picsSource: require("../../Components/Images/Posts/post4.png"),
            subtitle: "Que sede 🐫🤤🥵 ",
            said: "isabela_farina: Que lindo 😍",
            numLikes: 26,
        },
    
        {
            id: 3,
            userName: "isabela_farina",
            picsSource: require("../../Components/Images/Posts/post3.png"),
            subtitle: "❄️🥶🏔",
            said: "gabriel_pupe: ❄️🤩 ",
            numLikes: 11,
        },
    
        {
            id: 4,
            userName: "vini_avena",
            picsSource: require("../../Components/Images/Posts/post2.png"),
            subtitle: "Vivendo ✌️",
            said: "bruno_aguiar: Fotão",
            numLikes: 15,
        },

        {
            id: 5,
            userName: "gabriel_pupe",
            picsSource: require("../../Components/Images/Posts/post1.png"),
            subtitle: "Classic 🤙",
            said: "dudu_henriques: Haole",
            numLikes: 23,
        }
    ];

    return(
    <View style={styles.container}>
        <Header />
        <TalesDiv />
        <FlatList 
            inverted = {true}
            showsVerticalScrollIndicator ={false}
            data={picList}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => < Item userName={item.userName} picsSource={item.picsSource} subtitle={item.subtitle} said={item.said} numLikes={item.numLikes}/>
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