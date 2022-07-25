import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";

import styles from "./Login.style";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";


const initialFormValues = {
    usermail: '',
    password: '',
};

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleSignUp = () => {
        return navigation.navigate("SignPage");
    }

    const handleFormSubmit = async (formValues) => {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
            setLoading(false);
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",
            });
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.icon_container}>
                <Image source={require("../../../Assets/login.png")} style={styles.icon} />
            </View>
            <View style={styles.giriş}>
                <Text style={styles.gitiş_text}>Giriş Yap</Text>
            </View>
            <View style={styles.body_container}>
                <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                    {({ values, handleChange, handleSubmit }) => (
                        <>
                            <Input
                                placeholder="E-postanızı giriniz..."
                                onType={handleChange('usermail')}
                                value={values.usermail}
                            />
                            <Input
                                placeholder="Şifrenizi giriniz..."
                                onType={handleChange('password')}
                                value={values.password}
                                isSecure
                            />
                            <Button title="Giriş Yap" onPress={handleSubmit} loading={loading} />
                        </>
                    )}
                </Formik>
                <Button title="Kayıt Ol" onPress={handleSignUp} theme='secondary' />
            </View>
        </View>
    );
}
export default Login;