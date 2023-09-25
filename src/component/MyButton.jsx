import React from "react";
import {View, TouchableOpacity, Text, Alert } from "react-native";

const MyButton = ({alrt, label}) => {

    return (
        <View>
            <TouchableOpacity onPress={alrt}>
                <Text>{label}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default MyButton