import React from "react"
import {Text} from "react-native";
import {Card, Button, Icon} from "react-native-elements";
import * as Animatable from 'react-native-animatable'
import * as MailComposer from 'expo-mail-composer'

export class ContactUs extends React.Component {

    static navigationOptions = {
        title: 'Contact Us'
    };

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['mymail@.gmail.com'],
            subject: 'Enquery',
            body: 'To whom it concern:'
        })
    }

    render() {
        return (
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                <Card title={"Contact information"}>
                    <Text style={{marginTop: 8}}>121, Clear Water Bay Road</Text>
                    <Text style={{marginTop: 8}}>Clear Water Bay, Kowloon</Text>
                    <Text style={{marginTop: 8}}>HONG KONG</Text>
                    <Text style={{marginTop: 8}}>Tel: +852 1234 5678</Text>
                    <Text style={{marginTop: 8}}>Fax: +852 8765 4321</Text>
                    <Text style={{marginTop: 8}}>Email:confusion@food.net</Text>
                    <Button
                            title='Send Email'
                            buttonStyle={{backgroundColor: '#512DA8', marginTop: 10}}
                            icon={<Icon name='envelope-o' type={'font-awesome'} color='white' style={{marginRight: 7}}/>}
                            onPress={this.sendMail}
                    />
                </Card>
            </Animatable.View>
        )
    }
}
