import React, {Component} from "react";
import {View, ScrollView, Modal, Button, StyleSheet} from 'react-native';
import {Rating, Input} from 'react-native-elements';
import {connect} from "react-redux";
import {postComment} from "../../redux/ThunkCreators";
import {postFavorite} from "../../redux/actionCreators/favoriteActionCreators";
import {RenderDish} from "./RenderDish";
import {RenderComments} from "./RenderComments";

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

    static navigationOptions = ({title: 'Dish Details'})

    toggleModal = () => this.setState({showModal: !this.state.showModal})

    markFavorite = (dishId) => this.props.postFavorite(dishId)

    handleComment = (dishId) => this.props.postComment(dishId, this.state.rating, this.state.author, this.state.comment)

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

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        padding: 10
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail)