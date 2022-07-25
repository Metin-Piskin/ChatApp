import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        backgroundColor: "#00b5ec",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    inner_container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "#3366FF",
        },
        title: {
            ...base_style.title,
            color: "white",
        },
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "white",
        },
        title: {
            ...base_style.title,
            color: "#3366FF",
        },
    }),

};