import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: "#262834",
    },
    ınput: {
        flex: 1,
        backgroundColor: "#262834",
        color: "white",
        padding: Platform.OS === "android" ? 4 : 8,
        margin: Platform.OS === "android" ? 8 : 8,
    },
});