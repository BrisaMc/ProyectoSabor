import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { StyleSheet,TouchableOpacity, Text, View,Image,ImageBackground,FlatList,Button } from 'react-native';
import  MaterialHeader2 from "../../DiseñoDinamico/MaterialHeader2"
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {createStackNavigator,StackNavigationProp,} from '@react-navigation/stack'
import { TextInput } from 'react-native-gesture-handler';


export default class Destinos extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      dataSource:[],
    };
  
}
static navigationOptions = {  
  title: 'Destinos',  
  headerStyle: {  
      backgroundColor: '#f4511e',  
  },  
  //headerTintColor: '#0ff',  
  headerTitleStyle: {  
      fontWeight: 'bold',  
  },  
};  
componentDidMount(){
  fetch("https://proyectosabor.000webhostapp.com/verHoteles.php")    
  .then(response => response.json())
  .then((responseJson)=> {
    this.setState({
     dataSource: responseJson
    })
  })
  .catch(error=>console.log(error)) //to catch the errors if any
  }
 
render () {
  const id_Hotel = this.props.route.params.idHotel
  const nombre_hotel = this.props.route.params.nombrehotel
  const estrella_Hotel = this.props.route.params.estrellaHotel
  const Direcion_hotel = this.props.route.params.Direcionhotel
  const Telefono_Hotel = this.props.route.params.TelefonoHotel
  return (
   
    <View style={styles.container}>
        
<View style={styles.row}>
<TouchableOpacity style={styles.leftIconButton} onPress={() =>this.props.navigation.navigate('index')} >
          <MaterialCommunityIconsIcon
            name="menu"
            style={styles.leftIcon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
<MaterialHeader2 title="Descubre">
</MaterialHeader2>
</View> 
<Text> </Text>
<Text style={{textAlign:'center',fontSize:60}}>Reservacion</Text>
<Text >User Name: {JSON.stringify(nombre_hotel)}</Text>  
<Text >User Name: {JSON.stringify(estrella_Hotel)}</Text>  
<Text >User Name: {JSON.stringify(Direcion_hotel)}</Text>  
      
    </View>
    )
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,top:30,
    backgroundColor: 'rgba(211, 163, 4, 0.781)',
  },
  Izquierda: {
    width:200,
    backgroundColor: 'blue',
   
  },
  Derecha: {
    width:400,
    backgroundColor: 'red',
  },
  cuadro:{
      backgroundColor:'rgba(253, 165, 3, 0.89)'
      
  },Titulo:{
      fontSize:50,
    
  },row:{
      flexDirection:'row'
  },icono:{
      width:200,
      height:200,flex:1
  },materialHeader2: {

  }, leftIconButton: {
    padding: 11
    ,backgroundColor: "rgba(253, 165, 3,0.3)",
  },
  leftIcon: {
    color: "#FFFFFF",
    fontSize: 40,backgroundColor: "rgba(253, 165, 3,0.3)",
  },
  image_imageStyle: {
    width: 585,
    height: 196
  },
  icon: {
    color: "rgba(255,131,0,1)",
    fontSize: 61,
    height: 66,
    width: 590,
    marginTop: 51,
    marginLeft: 256
  },
  destino: {
    color: "rgba(248,231,28,1)",
    fontSize: 30,
    marginTop: 30,
    marginLeft: 216
  },image: {
    top: 10,
    left: 4,
    width: 590,
    height: 200,
    borderWidth: 7,
    backgroundColor:'rgba(253, 165, 3,0.3)',
    borderColor: "#000000",
    borderWidth:3
  },
});
