import React, {Component} from 'react'
import {View, Platform, ToastAndroid} from "react-native";
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders} from "../redux/ThunkCreators";
import {connect} from "react-redux";
import {MainNavigator} from "./MainDrawerNavigator/MainDrawerNavigator";
import {addEventListener} from '@react-native-community/netinfo'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments()),
        fetchPromos: () => dispatch(fetchPromos()),
        fetchLeaders: () => dispatch(fetchLeaders()),
    }
}

class Main extends Component {
    handleConnectivityChange = (connectionInfo) => {
        switch (connectionInfo.type) {
            case 'none':
                ToastAndroid.show('You are offline ! ! !', ToastAndroid.LONG)
                break
            case 'wifi':
                ToastAndroid.show('You are connected to WiFi ! ! !', ToastAndroid.LONG)
                break
            case 'cellular':
                ToastAndroid.show('You are connected to Cellular ! ! !', ToastAndroid.LONG)
                break
            case 'unknown':
                ToastAndroid.show('You have an unknown connection ! ! !', ToastAndroid.LONG)
                break
            default:
                break
        }
    }

    componentDidMount() {
        this.props.fetchDishes()
        this.props.fetchComments()
        this.props.fetchPromos()
        this.props.fetchLeaders()

        // addEventListener('connectionChange', this.handleConnectivityChange)
    }
    render() {
        return (
            <View style={{
                flex: 1, paddingTop: Platform.OS === 'ios'
                    ? 0
                    : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator/>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
