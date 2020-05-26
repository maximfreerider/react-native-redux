import {createStackNavigator} from "react-navigation";
import Login from "../Login/Login";
import {Icon} from "react-native-elements";
import React from "react";

export const LoginNavigator = createStackNavigator({
    Login: { screen: Login },
}, {
    initialRouteName: 'Login',
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