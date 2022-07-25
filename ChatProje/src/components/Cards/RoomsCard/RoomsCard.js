import React from "react";
import { View, Text, TouchableOpacity  } from "react-native";

import styles from "./RoomsCard.style";

const RoomsCard = ({ onPress, text }) => {
    return (
        <TouchableOpacity  onPress={onPress} style={styles.aaa}>
            <View style={styles.container}>
                <Text style={styles.text}>{text.roomName}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default RoomsCard;