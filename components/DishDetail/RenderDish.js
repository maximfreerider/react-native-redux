import * as Animatable from "react-native-animatable";
import {Card, Icon} from "react-native-elements";
import {baseUrl} from "../../shared/baseUrl";
import {Text, View} from "react-native";
import React from "react";

export const RenderDish = (props) => {

    const dish = props.dish;
    if (dish !== null) {
        return (
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                <Card style={{marginBlockEnd: 25}} featuredTitle={dish.name} image={{ uri: baseUrl + dish.image}}>
                    <Text style={{margin: 10}}>{dish.description}</Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <Icon
                            raised
                            reverse
                            name={ props.favorite ? 'heart' : 'heart-o'}
                            type={'font-awesome'}
                            color={'#f50'}
                            onPress={() => props.favorite ?  console.log('Already favorite') : props.onPress()}
                        />
                        <Icon
                            raised
                            reverse
                            name={'pencil'}
                            type={'font-awesome'}
                            color={'#512DA8'}
                            onPress={() => {props.toggleModal()}}
                        />
                    </View>
                </Card>
            </Animatable.View>
        );
    } else {
        return (<View></View>)
    }
};
