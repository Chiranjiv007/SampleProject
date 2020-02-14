import React,{ Component } from 'react';
import {
  View, 
  StyleSheet,
  TextInput,
  FlatList,
  Image
} from 'react-native';

import Header from  'components/Header';

import RestaurantRow from 'components/RestaurantRow';

import axios from 'axios';

import PizzaImage from 'images/pizza.png';

export default class RestaurantList extends Component{

    static navigationOptions = {
      header: null
    }
    state= {
      search: null,
      restaurants: []
    }
  
    componentDidMount(){
      axios.get('http://172.16.19.8:2000/restaurants')
        .then(result => this.setState({ restaurants : result.data }))
      
    }
  
    render(){
      
      return(
        <View style={{
          flex: 1,
          backgroundColor: '#FFFFFF'
        }}>

          <View style={{
            marginTop:30,
            alignItems: 'center'
          }}>
            <Image source={PizzaImage} style={{color:"#007AFF"}}/>
          </View>

          <Header />
          
          <TextInput 
            style={styles.input}
            placeholder="Live Search"
            onChangeText={text => {
              this.setState({ search: text })
            }}
            value  = {this.state.search}
          />
  
          <FlatList 
            data = {
              this.state.restaurants.filter(place => {
              return !this.state.search || (
                place.name.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase())>-1
              )
            })
            }

            renderItem = {({ item, index }) =>
              
              <RestaurantRow 
                place ={item} 
                index={index}
                navigation = {this.props.navigation}
              />
            }
  
            keyExtractor = {item => item.name}
          
            // initialNumToRender={5}
          />
        </View>
      )
    }
  
  
  }
  
  const styles = StyleSheet.create({
    header: {
      padding: 40,
      fontSize: 30,
      textAlign: 'center',
      color: '#0066CC',
      fontWeight: '200'
    },
    row: {
      flexDirection: 'row'
    },
    edges: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    nameAddress: {
      flexDirection: 'column',
      flex:8
    },
  
    addressText: {
      color:'grey'
    },
  
    input: {
      padding: 10,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#444',
      borderBottomWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#F5F5F5'
    }
  })