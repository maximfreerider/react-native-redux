import {createStackNavigator} from "react-navigation";
import {ContactUs} from "../ContactUs/ContactUs";
import {Icon} from "react-native-elements";
import React from "react";

export const ContactUsNavigator = createStackNavigator({
    ContactUs: {screen: ContactUs}
}, {
    initialRouteName: 'ContactUs',
    navigationOptions: ({navigation}) =>  ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name={'menu'} color={'white'} size={30} onPress={() => navigation.toggleDrawer()}/>
    })
})