import React from "react";
import Lottie from "lottie-react-native";

function user() {
    return <Lottie source={require("../../Assets/user-profile.json")} autoPlay loop />
}
export default user;