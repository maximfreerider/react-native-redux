import {createStackNavigator} from "react-navigation";
import Reservation from "../Reservation/Reservation";
import {Icon} from "react-native-elements";
import React from "react";

export const ReservationNavigator = createStackNavigator({
    Reservation: {screen: Reservation}
}, {
    initialRouteName: 'Reservation',
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