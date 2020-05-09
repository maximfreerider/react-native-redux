import React, {Component} from "react";
import {View, Text} from "react-native"


export class Home extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <View>
                <Text>Home Component ! ! !</Text>
            </View>
        );
    }
}