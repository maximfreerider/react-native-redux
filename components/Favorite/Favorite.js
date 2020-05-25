import React, {Component} from "react";
import {View, FlatList, Text, Alert} from "react-native";
import {ListItem} from "react-native-elements";
import {connect} from 'react-redux'
import {baseUrl} from "../../shared/baseUrl";
import {Loading} from "../Loading/Loading";
import Swipeout from "react-native-swipeout";
import * as Animatable from 'react-native-animatable';
import {deleteFavorite} from "../../redux/actionCreators/favoriteActionCreators";

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        favorites: state.favorites
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
})

class Favorites extends Component {
    static navigationOptions = {
        title: 'Favorites'
    }
    render() {
        const {navigate} = this.props.navigation

        const renderMenuItem  = ({item, index}) => {

            const rightButton = [
                {
                    text: 'Delete',
                    type: 'delete',
                    onPress: () => {
                        Alert.alert(
                            'Delete favorite?',
                            'Are you sure you wish to delete the favorite dish ' + item.name + '?',
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log(item.name + ' not deleted'),
                                    style: ' cancel'
                                },
                                {
                                    text: 'OK',
                                    onPress: () => this.props.deleteFavorite(item.id),
                                    style: ''
                                }
                            ],
                            {cancelable: false}
                        )
                    }
                }
            ]
            return (
                <Swipeout right={rightButton} autoClose={true} >
                    <Animatable.View animation="fadeInRightBig" duration={2000}>
                    <ListItem
                        key={index}
                        title={item.name}
                        subtitle={item.description}
                        hideChevron={true}
                        onPress={() => navigate('DishDetail', {dishId: item.id})}
                        leftAvatar={{source: {uri: baseUrl + item.image}}}
                    />
                    </Animatable.View>
                </Swipeout>
            )
        }

        if (this.props.dishes.isLoading) {
            return <Loading />
        } else if (this.props.dishes.errMess) {
            return <View><Text>{this.props.dishes.errMess}</Text></View>
            } else {
            return <FlatList
                data={this.props.dishes.dishes.filter(dish => this.props.favorites.some(el => el === dish.id))}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)