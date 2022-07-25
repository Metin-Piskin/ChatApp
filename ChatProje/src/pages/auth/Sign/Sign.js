import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import { showMessage } from "react-native-flash-message";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input";
import styles from "./Sign.style";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const initialFormValues = {
    usermail: "",
    password: "",
    repassword: "",
};

const Sign = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        return navigation.goBack();
    }

    const handleFormSubmit = async (formValues) => {
        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: "Şifreler uyuşmuyor",
                type: "danger",
            });
            return;
        }
        try {
            await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
            showMessage({
                message: "Kayıt başarılı",
                type: "success",
            });
            navigation.navigate('LoginPage');
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
                <Image source={require("../../../Assets/sign.png")} style={styles.icon} />
            </View>
            <View style={styles.giriş}>
                <Text style={styles.gitiş_text}>Kayıt Ol</Text>
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
                            <Input
                                placeholder="Şifrenizi tekrar giriniz..."
                                onType={handleChange('repassword')}
                                value={values.repassword}
                                isSecure
                            />
                            <Button title="Kayıt Ol" onPress={handleSubmit} loading={loading} />
                        </>
                    )}
                </Formik>
                <Button title="Geri" onPress={handleLogin} theme='secondary' />
            </View>
        </View>
    );
}
export default Sign;