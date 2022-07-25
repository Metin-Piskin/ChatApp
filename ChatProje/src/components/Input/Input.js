import React from "react";
import { View, TextInput } from "react-native";

import styles from "./Input.style";

const Input = ({placeholder, onType, value, isSecure}) => {
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                style={styles.ınput}
                placeholder={placeholder}
                onChangeText={onType}
                value={value}
                secureTextEntry={isSecure}
                placeholderTextColor="white"
            />
        </View>
    );
}
export default Input;