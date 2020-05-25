import React from "react";
import {Text, FlatList, ScrollView} from "react-native";
import {Card, ListItem} from "react-native-elements";
import {connect} from 'react-redux';
import {baseUrl} from "../../shared/baseUrl";
import {Loading} from "../Loading/Loading";
import * as Animatable from  'react-native-animatable';
import {History} from "./History";


const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

class AboutUs extends React.Component {
    static navigationOptions = {
        title: 'About Us'
    };

    render() {

        const renderLeader = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: { uri: baseUrl + item.image}}}
                />
            )
        }

        if (this.props.leaders.isLoading) {
            return (
                <ScrollView>
                    <History/>
                    <Card title='Corporate Leadership'>
                        <Loading/>
                    </Card>
                </ScrollView>
            )
        } else if (this.props.leaders.errMess) {
            return (
                <ScrollView>
                    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                        <History/>
                        <Card title={'Corporate Leadership'}>
                            <Text>{this.props.leaders.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            )
        } else {
            return (
                <ScrollView style={{marginBottom:15}}>
                    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                        <History/>
                        <Card title={"Corporate Leadership"}>
                            <FlatList
                                data={this.props.leaders.leaders}
                                renderItem={renderLeader}
                            />
                        </Card>
                    </Animatable.View>
                </ScrollView>
            )
        }
    }
}

export default connect(mapStateToProps)(AboutUs)
