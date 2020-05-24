import React, {Component, useState} from "react";
import {View, Text, ScrollView, FlatList, Modal, Button, StyleSheet} from 'react-native';
import {Card, Icon, Rating, Input} from 'react-native-elements';
import {baseUrl} from "../shared/baseUrl";
import {connect} from "react-redux";
import {postFavorite, postComment} from "../redux/ActionCreators";
import * as Animatable from 'react-native-animatable'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites,
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite((dishId))),
    postComment: (dishId, rating, author, comment, date) => dispatch(postComment(dishId, rating, author, comment, date))
})




const RenderDish = (props) => {

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

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        padding: 10
    }
})


function RenderComments(props) {
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

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            author: '',
            comment: '',
            rating: 0,
        }
    }

    toggleModal = () => this.setState({showModal: !this.state.showModal})

    markFavorite = (dishId) => {
        this.props.postFavorite(dishId)
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    handleComment(dishId){
        console.log('state', this.state)
        this.props.postComment(dishId, this.state.rating, this.state.author, this.state.comment)
    }

    render() {
        const dishId = this.props.navigation.getParam('dishId', ''); // '' - fall back up options(значение по дефолту)
        return (
            <ScrollView>
                <RenderDish
                    dish={this.props.dishes.dishes[+dishId]}
                    favorite={this.props.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                    toggleModal={this.toggleModal}
                    handleComment={(dishId) => this.handleComment(dishId)}
                />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                >
                    <View style={styles.modal}>
                        <Rating type='star' fractions={0} startingValue={0} imageSize={40} onFinishRating={(rating) => this.setState({rating})}/>
                        <Input leftIcon={{type: 'font-awesome', name: 'user-o'}} placeholder={' Author'} onChangeText={author => this.setState({author})} name={'author'}/>
                        <Input leftIcon={{type: 'font-awesome', name: 'comment-o'}} placeholder={' Comment'} onChangeText={comment => this.setState({comment})} name={'comment'} />
                        <View style={{marginBottom: 15}}>
                            <Button color={'#512DA8'} title={'Submit'} onPress={() => {this.toggleModal(); this.handleComment(dishId)}}/>
                        </View>
                        <Button color={'#808080'} title={'Cancel'} onPress={() => this.toggleModal()}/>
                    </View>
                </Modal>
                <RenderComments comments={this.props.comments.comments.filter(comment => comment.dishId === dishId) }/>
            </ScrollView>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DishDetail)