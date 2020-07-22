import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { StyleSheet,TouchableOpacity, Text, View,Image,ImageBackground,FlatList,Button } from 'react-native';
import  MaterialHeader2 from "../../DiseñoDinamico/MaterialHeader2"
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {createStackNavigator} from '@react-navigation/stack'


export default class Destinos extends Component {
  constructor(props) {

    super(props);

    this.state = {
      
      dataSource:[],
      valor:0
    };
  
}

componentDidMount(){
  fetch("https://proyectosabor.000webhostapp.com/verestaurantes.php")    
  .then(response => response.json())
  .then((responseJson)=> {
    this.setState({
     dataSource: responseJson
    })
  })
  .catch(error=>console.log(error)) //to catch the errors if any
  }

  Menu= () =>{
    const {ids} = this.state;
    fetch('https://proyectosabor.000webhostapp.com/Menu.php', {
    method: 'post',
    header:{
    'Accept': 'application/json',
    'Content-type': 'application/json'
    },
    body:JSON.stringify({
    
    })
    
    })
    .then((response) => response.text())
    .then((responseJson) =>{
    alert(responseJson);
    })
    .catch((error)=>{
    console.error(error);
    }); }
 
render () {
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
<Text style={{textAlign:'center',fontSize:60}}>Restaurantes</Text>

<FlatList  data={this.state.dataSource} renderItem={({item}) => 
      <View>
        <View style={styles.cuadro}>
        <View style={styles.row}>
        <View style={styles.Izquierda}>
            <Image
        style={{width:"100%",
            height:180}}
            source={{ uri: item.Foto1 }}
      /></View>
          <View style={styles.Derecha}>
            <Image
        style={{width:"100%",
            height:180}}
            source={{ uri: item.Foto2 }} 
      />
        </View>
        
    
            </View>
            <View style={styles.cuadro}>
        <Text style={{fontSize:40,textAlign:'center'}}>{item.Nombre}</Text>
        <Text style={{fontSize:40,textAlign:'center'}}></Text>
        <Text style={{fontSize:20}}>Restaurante de {item.Estrellas} Estrellas {valor=item.IdRestaurante}</Text>
        <TouchableOpacity  onPress={() =>this.props.navigation.navigate('Reservacion',{valor})}><Text style={{left:20,width:250,fontSize:30,backgroundColor:'rgb(187, 9, 3)',borderBottomWidth:5}} >Reservar Mesa</Text></TouchableOpacity>
        <TouchableOpacity   onPress={this.Menu}><Text style={{left:500,fontSize:30,backgroundColor:'blue',width:100,borderBottomWidth:5}} >Menu</Text></TouchableOpacity>
        <Text style={{fontSize:15}}>Abierto </Text>
               
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
    width:"50%",
    backgroundColor: 'blue',
   
  },
  Derecha: {
    width:"50%",
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
