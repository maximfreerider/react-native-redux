import React, {Component} from "react";
import {View, StyleSheet} from 'react-native'
import { Icon, Input, CheckBox, Button} from 'react-native-elements'
import {getItemAsync, setItemAsync, deleteItemAsync} from "expo-secure-store";

export class LoginTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            remember: false
        }
    }

    componentDidMount() {
        getItemAsync(`userinfo`)
            .then((userData) => {
                let userinfo = JSON.parse(userData)
                if (userinfo) {
                    this.setState({username: userinfo.username})
                    this.setState({password: userinfo.password})
                    this.setState({remember: true})
                }
            })
    }

    static navigationOptions = {
        title: 'Login',
        tabBarIcon: ({tintColor}) => (
            <Icon name='sign-in' type='font-awesome' size={24} iconStyle={{color: tintColor}}/>
        )
    }

    handleLogin = () => {
        console.log(JSON.stringify(this.state))
        if (this.state.remember) {
            setItemAsync(
                'userinfo',
                JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            ).catch(err => console.log('Error - ', err, '\n Could not save userinfo'))
        } else {
            deleteItemAsync('userinfo')
                .catch(err => console.log('Error - ', err, '\n Could not delete userinfo'))
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder="Username" leftIcon={{type: 'font-awesome', name: 'user-o'}}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username} containerStyle={styles.formInput}
                />
                <Input
                    placeholder="Password" leftIcon={{type: 'font-awesome', name: 'key'}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password} containerStyle={styles.formInput}
                />
                <CheckBox
                    title='Remember me'
                    center
                    checked={this.state.remember}
                    onPress={() => this.setState({remember: !this.state.remember})}
                    containerStyle={styles.formCheckbox}
                />
                <View style={styles.formButton}>
                    <Button
                        title='Login'
                        color={'#512DA8'}
                        onPress={() => this.handleLogin()}
                        icon={<Icon style={{marginRight: 7}} name='sign-in' size={24} type='font-awesome' color='white'/>}
                        buttonStyle={{backgroundColor: '#512DA8'}}
                    />
                </View>
                <View style={styles.formButton}>
                    <Button
                        title='Register'
                        color={'#512DA8'}
                        clear
                        onPress={() => this.props.navigation.navigate('Register')}
                        icon={<Icon style={{marginRight: 7}} name='user-plus' size={24} type='font-awesome' color='white'/>}
                        titleStyle={{color: 'blue'}}
                    />
                </View>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20,
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    image: {
        margin: 20,
        width: 80,
        height: 60
    },
    formInput: {
        marginTop: 20
    },
    formCheckbox: {
        margin: 10,
        backgroundColor: null
    },
    formButton: {
        margin: 25
    }
})
