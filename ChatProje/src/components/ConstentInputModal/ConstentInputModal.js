import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Modal from "react-native-modal";

import styles from "./ConstentInputModal.style";
import Button from "../Button";

const ConstentInputModal = ({ visible, onClose, onSend }) => {
    const [text, setText] = useState(null);
    const handleSend = () => {
        if (!text) {
            return;
        } else {
            onSend(text);
            setText(null);
        }
    }

    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            swipeDirection="down"
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <TextInput placeholder="Yazınız..." onChangeText={setText} multiline />
                </View>
                <Button onPress={handleSend} title="Gönder"/>
            </View>
        </Modal>
    );
}
export default ConstentInputModal;