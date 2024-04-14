/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';


import styles from './style';

const HomeSearch = (props) => {
    return (
        <View>
            <View style={styles.inputBox}>
            <Text> where to</Text>

            <View style={styles.timeContainer}>
                <AntDesign name={'clockcircle'} size={16} />
                <Text>Now</Text>
                <MaterialIcons name={'keyboard-arrow-down'} size={16} />
            </View>
        </View>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
            </View>
            <Text style={styles.destinationText}>spin ni</Text>
        </View>

        <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#b3b3b3'}]}>
                <Entypo name={'home'} size={20} color={'#ffffff'} />
            </View>
            <Text style={styles.destinationText}>spin ni</Text>
        </View>

        </View>
    );
};
export default HomeSearch;
