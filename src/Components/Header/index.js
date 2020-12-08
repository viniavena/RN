import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Header() {
    return(
        <View style={styles.container} >
            <Image
                style={styles.headerTitle}
                source={require("../Images/Logo/logoName.png")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#f3833f",
        justifyContent: "center"
    },
    headerTitle: {
        height: 33,
        width: 100,
        marginTop: 15
    }
});