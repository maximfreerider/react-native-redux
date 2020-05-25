import {createStackNavigator} from "react-navigation";
import Home from "../Home/Home";
import {Icon} from "react-native-elements";
import React from "react";

export const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
}, {
    initialRouteName: 'Home',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name={'menu'} size={30} color={'white'} onPress={() => navigation.toggleDrawer()}/>
    })
});