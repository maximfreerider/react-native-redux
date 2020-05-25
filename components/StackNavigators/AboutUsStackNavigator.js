import {createStackNavigator} from "react-navigation";
import AboutUs from "../AboutUs/AboutUs";
import {Icon} from "react-native-elements";
import React from "react";

export const AboutUsStackNavigator = createStackNavigator({
    AboutUs: {screen: AboutUs}
}, {
    initialRouteName: 'AboutUs',
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
})