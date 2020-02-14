import React, { Component } from 'react';
import { Text } from 'react-native';

import HeaderStyle from 'styles/HeaderStyle.js'

export default class Header extends Component {
    
    render(){
        return (
            <Text style={HeaderStyle.androidHeader}>Restaurant List!!</Text>
        )
    }
}