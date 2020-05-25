import {createDrawerNavigator, DrawerItems, SafeAreaView} from "react-navigation";
import {HomeNavigator} from "../StackNavigators/HomeStackNavigator";
import {Icon} from "react-native-elements";
import {AboutUsStackNavigator} from "../StackNavigators/AboutUsStackNavigator";
import {MenuNavigator} from "../StackNavigators/MenuStackNavigator";
import {ContactUsNavigator} from "../StackNavigators/ContactUsStackNavigators";
import {ReservationNavigator} from "../StackNavigators/ReservationStackNavigator";
import {FavoriteNavigator} from "../StackNavigators/FavoriteStackNavigator";
import React from "react";
import {CustomDrawerContent} from "./CustomDrawerContent";


export const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: "Home",
            drawerIcon: ({ tintColor }) => (
                <Icon name={'home'}
                      type={'font-awesome'}
                      size={24}
                      color={tintColor}/>
            )
        }
    },
    AboutUs: {
        screen: AboutUsStackNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon: ({tintColor}) => (
                <Icon name={'info-circle'}
                      type={'font-awesome'}
                      size={24}
                      color={tintColor}/>
            )
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: "Menu",
            drawerIcon: ({tintColor}) => (
                <Icon name={'list'}
                      type={'font-awesome'}
                      size={24} color={tintColor}/>
            )
        }

    },
    ContactUs: {
        screen: ContactUsNavigator,
        navigationOptions: {
            title: 'Contac Us',
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintColor }) => (
                <Icon name='address-card'
                      type='font-awesome'
                      size={22}
                      color={tintColor}/>
            )
        }
    },
    Reservation: {
        screen: ReservationNavigator,
        navigationOptions: {
            title: 'Reserve Table',
            drawerLabel: "Reserve Table",
            drawerIcon: ({tintColor}) => (
                <Icon name={'cutlery'}
                      type={'font-awesome'}
                      size={24} color={tintColor}/>
            )
        }
    },
    Favorites: {
        screen: FavoriteNavigator,
        navigationOptions: {
            title: 'My Favorites',
            drawerLabel: "My Favorites",
            drawerIcon: ({tintColor}) => (
                <Icon name={'heart'}
                      type={'font-awesome'}
                      size={24} color={tintColor}/>
            )
        }
    }
}, {
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContent
});
