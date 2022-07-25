import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191921',
        justifyContent: 'center',
    },
    giriş: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gitiş_text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    icon_container: {
        alignItems: 'center',
        marginTop: 30,
    },
    icon: {
        width: 340,
        height: 205,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        //tintColor: 'white',
    },
    body_container: {
        justifyContent: 'center',
        marginBottom: 30,
    },
});