import {React, children} from "react";
import { View,StyleSheet ,Text}  from "react-native";


const HelloWorld = ({name= 'Gérard', age= '67', city='Lyon', children}) =>{

    return(
        <View>
        <Text style={styles.text}>Salut {name}, j'ai {age} ans et j'habite à {city}. {children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        color:"salmon"
    },

    title:{
        color: "orange"
    }
})
export default HelloWorld 