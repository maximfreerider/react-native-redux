import {createBottomTabNavigator} from "react-navigation";
import {RegisterTab} from "./Register";
import {LoginTab} from "./Login";

export const Login = createBottomTabNavigator({
    Login: LoginTab,
    Register: RegisterTab
}, {
    tabBarOptions: {
        activeBackgroundColor: '#9575CD',
        inactiveBackgroundColor: '#D1C4E9',
        activeTintColor: 'white',
        inactiveTintColor: 'gray'
    }
})