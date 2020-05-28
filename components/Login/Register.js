import React, {Component} from "react";
import {baseUrl} from "../../shared/baseUrl";
import {askAsync, CAMERA, CAMERA_ROLL} from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import {Button, CheckBox, Icon, Input} from "react-native-elements";
import {setItemAsync} from "expo-secure-store";
import {Image, ScrollView, StyleSheet, View} from "react-native";
import * as ImageManipulator from '@pontusab/react-native-image-manipulator'

export class RegisterTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            remember: false,
            imageUrl: baseUrl + 'images/logo.png'
        }
    }

    getImageFromCamera = async () => {
        const cameraPermission = await askAsync(CAMERA)
        const cameraRollPermission = await askAsync(CAMERA_ROLL)
        if (cameraPermission.status === 'granted' && cameraRollPermission.status === 'granted') {
            let capturedImage = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4,3]
            })

            if (!capturedImage.cancelled) {
                this.setState({imageUrl: capturedImage.uri})
                this.processImage(capturedImage.uri)
            }
        }
    }

    processImage = async (imageUri) => {
        console.log('wqekjfhcqwlifhucwiufhcqiuhj', imageUri)
        let processedImage = await ImageManipulator
            .manipulateAsync(imageUri, [{resize: {width: 400}}])
        this.setState({imageUrl: processedImage.uri})
    }

    static navigationOptions = {
        title: 'Register',
        tabBarIcon: ({tintColor}) => (
            <Icon name='user-plus' type='font-awesome' size={24} iconStyle={{color: tintColor}}/>
        )
    }

    handleRegister () {
        console.log(JSON.stringify(this.state))
        if (this.state.remember) {
            setItemAsync(
                'userinfo',
                JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })).catch(err => console.log('Error - ', err, '\n Could not save userinfo'))
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: this.state.imageUrl}}
                        loadingIndicatorSource={require('../images/logo.png')}
                        style={styles.image}
                    />
                    <Button
                        title='Camera'
                        onPress={this.getImageFromCamera}
                    />
                </View>
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
                    <Input
                        placeholder="First Name" leftIcon={{type: 'font-awesome', name: 'user-o'}}
                        onChangeText={(firstname) => this.setState({firstname})}
                        value={this.state.firsname} containerStyle={styles.formInput}
                    />
                    <Input
                        placeholder="Last Name" leftIcon={{type: 'font-awesome', name: 'user-o'}}
                        onChangeText={(lastname) => this.setState({lastname})}
                        value={this.state.lastname} containerStyle={styles.formInput}
                    />
                    <Input
                        placeholder="Email" leftIcon={{type: 'font-awesome', name: 'envelope-o'}}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email} containerStyle={styles.formInput}
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
                            title='Register'
                            color={'#512DA8'}
                            onPress={() => this.handleRegister()}
                            icon={<Icon style={{marginRight: 7}} name='user-plus' size={24} type='font-awesome' color='white'/>}
                            buttonStyle={{backgroundColor: '#512DA8'}}
                        />
                    </View>
                </View>
            </ScrollView>
        );
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
