import {FlatList, Text, View} from "react-native";
import {Card, Rating} from "react-native-elements";
import * as Animatable from "react-native-animatable";
import React from "react";

export const RenderComments = (props) => {
    const comments = props.comments;
    const renderCommentItem = ({ item, index }) => {
        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <View style={{alignItems: 'flex-start', margin: 10}}>
                    <Rating style={{fontSize: 12}} type='star' imageSize={15} readonly={true} startingValue={item.rating}/>
                </View>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} Stars</Text>
            </View>
        )
    };

    return (
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
            <Card title={'Comments'}>
                <FlatList
                    data={comments}
                    renderItem={renderCommentItem}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </Animatable.View>
    )
}
