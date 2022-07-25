import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from "./Rooms.style";
import FloatingButton from "../../components/FloatingButton";
import RoomsCard from "../../components/Cards/RoomsCard";
import ConstentInputModal from "../../components/ConstentInputModal";
import parseContentData from '../../utils/parseContentData';

const Rooms = ({navigation}) => {
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        database()
            .ref('rooms/')
            .on('value', snapshot => {
                const contentData = snapshot.val();
                const parsedData = parseContentData(contentData || {});
                setContentList(parsedData);
            });
    }, []);

    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible);
    }
    const handleSendContent = (content) => {
        handleInputToggle();
        sendContent(content);
    }
    const sendContent = (content) => {
        const userMail = auth().currentUser.email;
        const contentObject = {
            roomName: content,
            date: new Date().toISOString(),
            roomCreator: userMail.split('@')[0],
        };
        database().ref('rooms/').push(contentObject);
    }

    const handlePressRoom = item => {
        navigation.navigate('TalkScreen', { item })
    }

    const renderContent = ({ item }) => (
        <RoomsCard text={item} onPress={() => handlePressRoom(item)}/>
    );

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                data={contentList}
                renderItem={renderContent}
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
export default Rooms;