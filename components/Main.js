import React, {Component} from 'react'
import {Menu} from "./Menu"
import {DishDetail} from "./DichDetail";
import {View, Text, Platform} from "react-native";
import { createStackNavigator } from 'react-navigation'

const MenuNavigator = createStackNavigator({
    Menu: {screen: Menu},
    DishDetail: {screen: DishDetail}
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});


export class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios'
                    ? 0
                    : Expo.Constants.statusBarHeight}}>
                <MenuNavigator />
            </View>
        )
    }
}