import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

import User from "../../components/Lottie/user";
import Chat from "../../components/Lottie/chat";
import Rooms from "../../components/Lottie/rooms";
import Button from "../../components/Button";

function Welcome({ navigation }) {
    const loadingGo = () => {
        navigation.navigate("LoginPage");
    }
    return (
        <View style={styles.container}>
            <PagerView style={styles.viewPager} initialPage={0}>
                <View style={styles.page} key="1">
                    <View style={styles.header}>
                        <Text style={styles.header_text}>Welcome Chat Application</Text>
                    </View>
                    <User />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Meet new programmers ➡️</Text>
                    </View>
                </View>
                <View style={styles.page} key="2">
                    <Rooms />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Create your own room</Text>
                    </View>
                </View>
                <View style={styles.page} key="3">
                    <Chat />
                    <View style={styles.textContainerb}>
                        <Text style={styles.text}>Chat with other programmers</Text>
                        <Button title="Login ➡️" onPress={loadingGo} />
                    </View>
                </View>
            </PagerView>
        </View>
    );
}
export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191921"
    },
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,

    },
    textContainerb: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 50,
    },
    text: {
        fontSize: 25,
        color: '#fff',
    },
    header: {
        alignItems: 'center',
        marginTop: 30,
    },
    header_text: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        
    },
});