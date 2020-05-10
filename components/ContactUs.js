import React from "react"
import {Text} from "react-native";
import {Card} from "react-native-elements";

export class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static navigationOptions = {
        title: 'Contact Us'
    };
    render() {
        return (
            <Card title={"Contact information"}>
                <Text style={{marginTop: 8}}>121, Clear Water Bay Road</Text>
                <Text style={{marginTop: 8}}>Clear Water Bay, Kowloon</Text>
                <Text style={{marginTop: 8}}>HONG KONG</Text>
                <Text style={{marginTop: 8}}>Tel: +852 1234 5678</Text>
                <Text style={{marginTop: 8}}>Fax: +852 8765 4321</Text>
                <Text style={{marginTop: 8}}>Email:confusion@food.net</Text>
            </Card>
        )
    }
}

