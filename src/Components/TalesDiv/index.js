import React from "react";
import {View, StyleSheet,ScrollView} from "react-native";
import TalesPics from "../TalesPics/index";

export default function TalesDiv(){
    return(
    <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false}>
            <TalesPics picsSource={require("../Images/Tales/profile1.png")}  userName="Igor" />
            <TalesPics picsSource={require("../Images/Tales/profile2.png")}  userName="Pamela" />
            <TalesPics picsSource={require("../Images/Tales/profile3.png")}  userName="John" />
            <TalesPics picsSource={require("../Images/Tales/profile4.png")}  userName="Carla"  />
            <TalesPics picsSource={require("../Images/Tales/profile5.png")}  userName="Mary" />
            
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f3833f",
        height:90,
        width:"100%",
        flexDirection:"row"
    }
})
