import React,{ Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome'

import Stars from 'components/Stars.js'

export default class RestaurantRow extends Component {
    state = {
        showInfo: false
    }
    

    infoPressed = () => {
      this.props.navigation.navigate('Info',{
        place: this.props.place
      })
        // this.setState({
        //     showInfo: !this.state.showInfo
        // })
    }
    
    render(){

        const {
            place,
            index
        } = this.props

        const imagePath = '172.16.19.8:2000/src/images/'+ place.image;
        
        // console.log("place", place);
        
        return (
            <View key={place.name} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }}>
            
            <View style = {styles.row}>
                <View style={styles.stars}>
                  {/* <Text>{index + 1}</Text> */}
                  <Stars rating={place.rating} />
              </View>
              
              <View style={styles.nameAddress}>
                <Text>{place.name}</Text>
                <Text style={{}}>{place.address}</Text>
              </View>
              
              <View style={styles.edges}>

                <TouchableHighlight 
                  onPress={this,this.infoPressed}
                  style= {styles.button}
                  underlayColor='#5398DC'
                >
                  <Text style={styles.buttonText}>INFO</Text>
                </TouchableHighlight>
              
              </View>
              
              </View>  
              {
                  this.state.showInfo &&
                  <View style={styles.info}>
                      <Text>Restaurant info</Text>
                      {console.log(imagePath)}
                      <Image 
                        source={{ uri: imagePath }}
                        style = {{
                          width: 300,
                          height: 300
                        }}
                      
                      />
                  </View>
              }
            </View>
            
          )
    }
}

const styles =  StyleSheet.create({
    row: {
        flexDirection: 'row'
      },
      edges: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        minWidth: 50
      },
    
      stars : {
        flex:1,
        alignItems : 'center',
        flexDirection: 'row',
        justifyContent : 'flex-start',
        padding : 5,
        minWidth : 50

      },
      nameAddress: {
        flexDirection: 'column',
        flex:8
      },
    
      addressText: {
        color:'grey'
      },
      button : {
        borderWidth: 1,
        borderColor : "#0066CC",
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff'
      },
      
      buttonText : {
        color : '#0066CC',
        fontSize : 12
      },

      info : {
        marginHorizontal : 40,
        marginVertical: 10,
        padding : 10,
        backgroundColor : '#fff',
        borderWidth : 1,
        borderColor : '#ddd',
        borderRadius : 4
      }
})