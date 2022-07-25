import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import auth from "@react-native-firebase/auth";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";
import Rooms from "./pages/Rooms";
import Talk from "./pages/Talk";
import Welcome from "./pages/welcome/welcome";

const Router = () => {
    const [userSession, setUserSession] = useState();

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUserSession(!!user);
        })
    }, []);



    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="WelcomePage" component={Welcome} />
                <Stack.Screen name="LoginPage" component={Login} />
                <Stack.Screen name="SignPage" component={Sign} />
            </Stack.Navigator>
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !userSession ? (
                        <Stack.Screen
                            name="AuthStack"
                            component={AuthStack}
                            options={{ headerShown: false }}
                        />
                    ) : (
                        <>
                            <Stack.Screen
                                name="RoomsScreen"
                                component={Rooms}
                                options={{
                                    title: 'Rooms',
                                    headerTintColor: "white",
                                    headerTitleAlign: "center",
                                    headerStyle: {
                                        backgroundColor: "#262834",
                                    },
                                    headerRight: () => (
                                        <Icon
                                            name="logout"
                                            size={30}
                                            color="white"
                                            onPress={() => auth().signOut()}
                                        />
                                    )
                                }}
                            />
                            <Stack.Screen
                                name="TalkScreen"
                                component={Talk}
                                options={{
                                    title: 'Talk',
                                    headerTintColor: "white",
                                    headerTitleAlign: "center",
                                    headerStyle: {
                                        backgroundColor: "#262834",
                                    },
                                    headerRight: () => (
                                        <Icon
                                            name="logout"
                                            size={30}
                                            color="white"
                                            onPress={() => auth().signOut()}
                                        />
                                    )
                                }}
                            />
                        </>
                    )}
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    )
}
export default Router;