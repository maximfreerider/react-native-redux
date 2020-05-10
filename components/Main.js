import React, {Component} from 'react'
import {Menu} from "./Menu"
import {DishDetail} from "./DichDetail";
import {View, Platform, Image, Text, StyleSheet, ScrollView} from "react-native";
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation'
import {Home} from './Home'
import {AboutUs} from "./AboutUs";
import {ContactUs} from "./ContactUs";
import {Icon} from "react-native-elements";

const ContactUsNavigator = createStackNavigator({
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

const AboutUsNavigator = createStackNavigator({
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

const MenuNavigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name={'menu'} size={30} color={'white'} onPress={() => navigation.toggleDrawer()}/>
        }),
    },
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

const HomeNavigator = createStackNavigator({
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

const CustomDrawerContent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{top:'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage}/>
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>
                        Ristorante Con Fusion
                    </Text>
                </View>
            </View>
            <DrawerItems {...props}/>
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
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
        screen: AboutUsNavigator,
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
    }
}, {
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContent
});

export class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios'
                    ? 0
                    : Expo.Constants.statusBarHeight}}>
                <MainNavigator />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});