import React, {Component} from "react";
import {View, Button, StyleSheet} from 'react-native'
import {Card, Icon, Input, CheckBox} from 'react-native-elements'
import {getItemAsync, setItemAsync, deleteItemAsync} from "expo-secure-store";

class Login extends Component {
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
        title: 'Login'
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

export default Login