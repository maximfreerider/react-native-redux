import React, {Component} from "react";
import {ScrollView, Text, View} from "react-native"
import {Card} from 'react-native-elements'
import {DISHES} from '../shared/dishes'
import {PROMOTIONS} from '../shared/promotions'
import {LEADERS} from '../shared/leaderas'

function RenderItem(props) {
    console.log(props)
    const item = props.item;
    if (item != null) {
        return <Card
            featuredTitle={item.name}
            featuredSubtitle={item.designation}
            image={require('./images/uthappizza.png')}
            >
            <Text style={{margin: 10}}>
                {item.description}
            </Text>
        </Card>
    } else {
        return(<View></View>)
    }
}

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={DISHES.filter(dish => dish.featured)[0]}
                />
                <RenderItem
                    item={PROMOTIONS.filter(promo => promo.featured)[0]}
                />
                <RenderItem
                    item={LEADERS.filter(leader => leader.featured)[0]}
                />
            </ScrollView>
        );
    }
}