import {Card} from "react-native-elements";
import {Text} from "react-native";
import React from "react";

export const History = () => {
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