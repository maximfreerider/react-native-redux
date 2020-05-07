import React, {Component} from 'react'
import {Menu} from "./Menu"
import {DISHES} from '../shared/dishes'

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }
    render() {
        return (
            <Menu dishes={this.state.dishes}/>
        );
    }
}