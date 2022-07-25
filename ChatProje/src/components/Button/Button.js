import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Button.style";

const Button = ({ title, onPress, theme = 'primary', loading }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles[theme].container} disabled={loading}>
            <View style={styles[theme].inner_container}>
                <Text style={styles[theme].title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default Button;