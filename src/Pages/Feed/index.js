import React, {useState} from 'react';
import { StyleSheet, View, FlatList, TextInput, KeyboardAvoidingView} from 'react-native';

import Item from '../../Components/Item';
import Header from '../../Components/Header';
import TalesDiv from '../../Components/TalesDiv';
import Footer from '../../Components/Footer';

const Feed = () => {
    const [picList, setList] = useState([
        {
            id: 1,
            userName: "consultor_fluxo",
            subtitle: "Galera do PAME ta em choque 🤯",
            said: "dudu_henriques: work hard 🔨💪",
            numLikes: 0
        },

        {
            id: 2,
            userName: "julia_chagas",
            subtitle: "Exausta com esse PAME, mas com o sorriso no rosto",
            said: "bruno_aguiar: Caveira 💀☠️",
            numLikes: 9,
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
            userName: "julia_chagas",
            picsSource: require("../../Components/Images/Posts/post4.png"),
            subtitle: "Que sede 🐫🤤🥵 ",
            said: "isabela_farina: Que lindo 😍",
            numLikes: 26,
        },
    
        {
            id: 5,
            userName: "vini_avena",
            picsSource: require("../../Components/Images/Posts/post2.png"),
            subtitle: "Vivendo ✌️",
            said: "bruno_aguiar: Fotão",
            numLikes: 15,
        },

        {
            id: 6,
            userName: "gabriel_pupe",
            picsSource: require("../../Components/Images/Posts/post1.png"),
            subtitle: "Classic 🤙",
            said: "dudu_henriques: Haole",
            numLikes: 23,
        }
    ]);

    function AddPost(value){
        alert("Novos Posts: Carregue o seu feed");
        const lastIndex = picList.length - 1;
        const lastId = picList[lastIndex].id;
        const newPost = {
            id: lastId +1,
            userName: "consultor_fluxo",
            subtitle: value,
            numLikes: 0
        };

        let newList = picList;
        newList.push(newPost);
        setList(newList);
    };

    const WriteText = () => {
        const [value, onChangeText] = React.useState('');
        return (
        <KeyboardAvoidingView style={{ width: "100%"}} behavior='position' >
            <TextInput 
            style={{ minHeight:30 ,width: "100%", borderWidth: 1 , borderColor: "#f3833f", color:"white", backgroundColor: "#1a1a1a"}}
            maxLength={200}
            autoFocus={true}
            keyboardAppearance={"dark"}
            multiline={true}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder = {"Diga ai caveira!"}
            placeholderTextColor = {"gray"}
            autoFocus={true}/>
        </KeyboardAvoidingView>
        );
      }


    return (
        <View style={styles.container}>
          <Header />
          <TalesDiv />
          <FlatList
            inverted={true}
            showsVerticalScrollIndicator={false}
            data={picList}
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
          <WriteText />
          <Footer AddPost={AddPost} />
        </View>
      );
    };

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        alignItems: "center",
    }
});

export default Feed;