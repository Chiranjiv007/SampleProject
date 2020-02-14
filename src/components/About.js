import React, { Component } from 'react';

import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class About extends Component {

    render() {
        return (
            <View style={{ flex:1, padding: 40 }}>
                <Text style={styles.header}>
                    About Restaurant Review
                </Text>

                <Icon 
                    name="utensils"
                    color="#0066CC"
                    size={100}
                    style={styles.icon}
                />

                <Text style={styles.text}>
                    Lorem ipsum dolor
                </Text>

                <Text style={styles.text}>
                    Mauris efficitur elementum
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20
    },
    icon: {
        marginVertical: 20,
        alignSelf: 'center'
    },
    text: {
        fontSize: 14,
        color: '#444',
        marginTop: 20
    }
})