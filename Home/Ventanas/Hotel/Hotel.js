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
      idHotel:0,
      nombrehotel:"",
      estrellaHotel:"",
      Direcionhotel:"",
      TelefonoHotel:"" 
    };
  
}
static navigationOptions = {  
  title: 'Hotel',  
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
  const { navigate } = this.props.navigation;
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
<Text style={{textAlign:'center',fontSize:60}}>Hoteles</Text>

<FlatList  data={this.state.dataSource} renderItem={({item}) => 
      <View>
        <View style={styles.cuadro}>
        <View style={styles.row}>
            <View style={styles.Izquierda}>
            <Image
        style={{width:200,
            height:180}}
        source={require('../../DiseñoDinamico/img/Hotel.png')}
      />
        <Text>Estrellas {item.Estrellas}
        </Text>
            </View>
            <View style={styles.Derecha}>
        <Text style={{fontSize:40}}>{item.Nombre}</Text>
        <Text style={{fontSize:20}}>Hotel de {item.Estrellas} Estrellas</Text>
        <Text style={{fontSize:15}}>Dir: {item.Direccion}</Text>
        <Text>Tel: {item.Telefono}</Text>
                <TouchableOpacity  onPress={() =>this.props.navigation.navigate('Reservacion', {  
            idHotel: item.idHoteles,
            nombrehotel:item.Nombre,
            estrellaHotel:item.Estrellas,
            Direcionhotel:item.Direccion,
            TelefonoHotel:item.Telefono 
        })  
    }  ><Text style={{textAlign:'right',fontSize:30}} >Reservar una habitacion</Text></TouchableOpacity>
         
        </View>
        </View>  
        </View>
      <Text> </Text>
      </View>
        }/>
      

      
      
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
