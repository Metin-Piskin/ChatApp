import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from "./Talk.style";
import FloatingButton from "../../components/FloatingButton";
import ConstentInputModal from "../../components/ConstentInputModal";
import TalkCard from "../../components/Cards/TalkCard/TalkCard";
import parseContentData from '../../utils/parseContentData';

const Talk = ({ route }) => {
    const { item } = route.params;
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [roomList, setRoomList] = useState([]);;

    useEffect(() => {
        database()
            .ref(`rooms/${item.id}/${item.roomName}`)
            .on('value', snapshot => {
                const contentData = snapshot.val();
                const parsedData = parseContentData(contentData || {});
                setRoomList(parsedData);
            });
    }, []);

    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible);
    }
    const handleSendContent = (content) => {
        handleInputToggle();
        sendContent(content);
    }

    const sendContent = name => {
        const userMail = auth().currentUser.email;
        const roomObject = {
            message: name,
            date: new Date().toISOString(),
            username: userMail.split('@')[0],
        };
        database().ref(`rooms/${item.id}/${item.roomName}`).push(roomObject);
    };


    const handlePressRoom = ({ item }) => <TalkCard message={item} />

    return (
        <View style={styles.container}>
            <View style={styles.room_info}>
                <Text style={styles.header}>{item.roomName} Odası {item.roomTags}</Text>
            </View>
            <FlatList
                data={roomList}
                renderItem={handlePressRoom}
            />
            <ConstentInputModal
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent}
            />
            <FloatingButton onPress={handleInputToggle} />
        </View>
    );
}
export default Talk;