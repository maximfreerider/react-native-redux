import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import {DISHES} from "../shared/dishes";

const RenderDish = (props) => {
    const dish = props.dish;
    if (dish !== null) {
        return (
            <Card
                style={{marginBlockEnd: 25}}
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    } else {
        return (<View></View>)
    }
};

export class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId', ''); // '' - fall back up options(значение по дефолту)
        return (
            <RenderDish dish={this.state.dishes[+dishId]}/> // + convert string to a number
        )
    }
}