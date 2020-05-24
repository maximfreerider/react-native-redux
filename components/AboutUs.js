import React from "react";
import {Text, FlatList, ScrollView} from "react-native";
import {Card, ListItem} from "react-native-elements";
import {connect} from 'react-redux';
import {baseUrl} from "../shared/baseUrl";
import {Loading} from "./Loading";
import * as Animatable from  'react-native-animatable';


const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

const History = () => {
    return (
        <Card title={"Our History"}>
            <Text style={{marginTop: 2}}>
                Started in 2010, Ristoante con Fusion quickly established itself as a culinary icon par excellence
                in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys
                patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs
                in the world, you never know what will arrive on your plate the next time you visit us.
            </Text>
            <Text style={{marginTop: 10}}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
            </Text>
        </Card>
    )
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
