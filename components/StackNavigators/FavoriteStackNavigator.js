import {createStackNavigator} from "react-navigation";
import Favorites from "../Favorite/Favorite";
import {Icon} from "react-native-elements";
import React from "react";

export const FavoriteNavigator = createStackNavigator({
    Favorites: {screen: Favorites}
}, {
    initialRouteName: 'Favorites',
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
