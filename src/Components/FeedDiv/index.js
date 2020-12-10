import React from "react";
import {View, StyleSheet,ScrollView} from "react-native";
import FeedPosts from "../FeedPosts/index";

export default function FeedDiv(){
    return(
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator = {false}>
            <FeedPosts picsSource={require("../Images/Posts/post1.png")}  userName="gabriel_pupe" />
            <FeedPosts picsSource={require("../Images/Posts/post2.png")}  userName="vini_avena" />
            <FeedPosts picsSource={require("../Images/Posts/post3.png")}  userName="isabela_farina"  />
            <FeedPosts picsSource={require("../Images/Posts/post4.png")}  userName="julia_chagas" />
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        alignItems: "center",

    }
})
