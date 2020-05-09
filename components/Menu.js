import React from "react";
import {FlatList} from 'react-native'
import {ListItem} from "react-native-elements"
import {DishDetail} from "./DichDetail";
import {DISHES} from '../shared/dishes';


export class Menu extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES
      }
  }

  static navigationOptions = {
      title: 'Menu'
  };

  render() {
      const {navigate} = this.props.navigation;

      const renderMenuItem = ({item, index}) => {
          return (
              <ListItem
                  key={index}
                  title={item.name}
                  subtitle={item.description}
                  hideChevron={true}
                  leftAvatar={{ source: require('./images/uthappizza.png') }}
                  onPress={() => navigate('DishDetail', {dishId: item.id})}
              />
          )
      };

      return (
          <FlatList
              data={this.state.dishes}
              renderItem={renderMenuItem}
              keyExtractor={item => item.id.toString()}
          />
      )
  }
}


// dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)}/>
// <DishDetail
//     dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0] || null}
// />