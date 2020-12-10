import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Footer() {
    return(
        <View style={styles.container} >
            <View style={{flexDirection: "row", marginTop: 8}} >
                <Image style={styles.home} source={require("../Images/Icons/home.png")} />
                <Image style={styles.add} source={require("../Images/Icons/add.png")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 35,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#f3833f",
        justifyContent: "center"
    },
    add: {
        height: 20,
        width: 20
    },
    home:{
        height: 20,
        width: 20
    }
});