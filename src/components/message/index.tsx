/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';
const Message = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>c MESASGE</Text>
            <Text style={styles.text}>weeeeee rewrw rwfsdfr wrerwsd</Text>
            <Text style={styles.learnMore}>Lear More</Text>
        </View>
    );
};

export default Message;
