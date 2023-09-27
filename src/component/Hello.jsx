import {React, children} from "react";
import { View,StyleSheet ,Text}  from "react-native";

const HelloWorld2 = ({name= 'Gérard', age= '67', city='Lyon', children}) =>{

    return(
        <View>
        <Text style={[styles.title, styles.bold]}>Bonjour à tous ! </Text>

            <View style={[styles.container, styles.name, styles.border]}>
                <Text style={[styles.bold]}>Je suis</Text>
                <Text> {name} </Text>
            </View>

            <View style={[styles.container, styles.age, styles.border]}>
                <Text style={styles.bold}>J'ai</Text>
                <Text> {age} ans </Text>    
            </View>

            <View style={[styles.container, styles.city, styles.border]}>
                <Text style={styles.bold}>Né à</Text>
                <Text> {city}</Text>
            </View>

            <View style={[styles.container, styles.desc, styles.border]}>
            <Text style={[styles.bold]}>Description</Text>    
            <Text style={[styles.descText]}>{children}</Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        color:"green"
    },

    title:{
        color: "orange",
        fontSize: 20
    },

    bold:{
        fontWeight: "bold"
    },

    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    name: {
        flex: 1,
        backgroundColor: "skyblue",
        height: 50
    },

    age: {
        flex: 1,
        backgroundColor: "cornflowerblue",
        justifyContent: "space-around",
        height: 75
    },

    city: {
        flex: 1,
        backgroundColor: "dodgerblue",
        justifyContent: "space-between",
        height: 100,
    },

    desc: {
        flex: 1,
        flexDirection: "col",
        backgroundColor: "royalblue",
        height: 150
    },

    border: {
        borderColor: "black",
        borderWidth: 1
    },

    descText: {
        color: "whitesmoke"
    }

})
export default HelloWorld2