import React from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const Footer = ({ AddPost }) => {
    return(
        <View style={styles.container} >
            <View style={styles.icons} >
                <TouchableOpacity style={styles.home}>
                     <Entypo name="home" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.add} onPress={(AddPost)}>
                    <FontAwesome name="bolt" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.profile}>
                    <Ionicons name="person" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#f3833f",
        justifyContent: "center"
    },
    icons:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"    
    },
    profile:{
        marginLeft:"10%",
        marginRight:"10%",
    },
    home: {
        marginLeft:"10%",
        marginRight:"10%",
    },
    add:{
        marginLeft:"10%",
        marginRight:"10%",
    },
    theme:{
        marginLeft:"10%",
        marginRight:"10%",
    }
});



/*
import { MaterialIcons } from '@expo/vector-icons'; 



<TouchableOpacity style={styles.theme}>
<MaterialIcons name="lightbulb" size={30} color="white" />
</TouchableOpacity>
*/