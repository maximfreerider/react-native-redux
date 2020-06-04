import React, {Component} from "react";
import {Card} from "react-native-elements";
import {ScrollView, Text, View} from "react-native";
import {data} from "./data";


export class Task1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }

    loadData = async () => {
        let res = await fetch('https://confusion-json-servak.herokuapp.com/comments')
        console.log(JSON.stringify(res.json()))
    }
     componentDidMount() {
         this.loadData()
     }

    render() {
        return (
            <ScrollView>
                {
                    this.state.data.map(subj => {
                        return (<View style={{marginTop: 10}}>
                                    <Card title={subj.name_of_subj}>
                                        <Text>{subj.teacher}</Text>
                                        <Text>{subj.type}</Text>
                                    </Card>
                                 </View>
                        )
                    })
                }
            </ScrollView>
        );
    }
}

