import React, {Component} from 'react'
import {View, Platform} from "react-native";
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders} from "../redux/ThunkCreators";
import {connect} from "react-redux";
import {MainNavigator} from "./MainDrawerNavigator/MainDrawerNavigator";

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

    componentDidMount() {
        this.props.fetchDishes()
        this.props.fetchComments()
        this.props.fetchPromos()
        this.props.fetchLeaders()
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(Main)
