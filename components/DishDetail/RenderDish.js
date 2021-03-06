import * as Animatable from "react-native-animatable";
import {Card, Icon} from "react-native-elements";
import {baseUrl} from "../../shared/baseUrl";
import {Text, View, PanResponder, Alert, Share} from "react-native";
import React from "react";

export const RenderDish= (props) => {
    const dish = props.dish;
    let view
    const handleViewRef = (ref) => view = ref

    const  recognizeDrag = ({moveX, moveY, dx, dy}) => {
        // проверка для того что бы убедиться что это реальный жест
        if (dx < -200) {
            return true
        } else {
            return false
        }
    }

    const recognizeComment = ({moveX, moveY, dx, dy}) => {
        if (dx > 200) {
            return true
        } else {
            return false
        }
    }

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => {
            return true
        },
        onPanResponderGrant: (e, gestureState) => {
            view.rubberBand(1000)
                .then(endState => console.log(endState.finished ? 'finished' : 'cancelled'))
        },
        onPanResponderEnd: (e, gestureState) => {
            if(recognizeDrag(gestureState)) {
                Alert.alert(
                    'Add to favorites?',
                    'Are you sure you wish to add ' + dish.name + ' to your favorites?',
                    [
                        {
                            'text': 'Cancel',
                            onPress: () => console.log(dish.name + ' not deleted'),
                            style: 'cancel'
                        },
                        {
                            'text': 'OK',
                            onPress: () => props.favorite ?  console.log('Already favorite') : props.onPress(),
                            style: ''
                        }
                    ],
                    {cancelable: false}
                )
            } else if (recognizeComment(gestureState)) {
                props.toggleModal()
            }
            return true
        }
    })

    const shareDish = (title, message, url) => {
        Share.share({
            title: title,
            message: title + ': ' + message + ' ' + url,
            url: url
        }, {
            dialogTitle: 'Share ' + title
        })
    }

    if (dish !== null) {
        return (
            <Animatable.View animation="fadeInDown" duration={2000}
                             delay={1000} ref={handleViewRef} {...panResponder.panHandlers} >
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
                        <Icon
                            raised
                            reverse
                            name='share'
                            type='font-awesome'
                            color={'#51D2A8'}
                            onPress={() => shareDish(dish.name, dish.description, baseUrl + dish.image)}
                        />
                    </View>
                </Card>
            </Animatable.View>
        );
    } else {
        return (<View></View>)
    }
};
