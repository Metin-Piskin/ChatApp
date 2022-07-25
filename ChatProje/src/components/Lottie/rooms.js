import React from "react";
import Lottie from "lottie-react-native";

function rooms() {
    return <Lottie source={require("../../Assets/rooms.json")} autoPlay loop />
}
export default rooms;