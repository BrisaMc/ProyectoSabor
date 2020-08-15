import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { StyleSheet,TouchableOpacity, Text, View,Image,ImageBackground,FlatList } from 'react-native';
import  MaterialHeader2 from "../../../DiseñoDinamico/MaterialHeader2"
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Quehacer extends Component {
  constructor(props) {

    super(props);

    this.state = {
      
      dataSource:[]

    };
    

}

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
  const { navigation } = this.props;  
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
<Text style={{textAlign:'center',fontSize:60}}>Calendario</Text>
        <Text> </Text>
        <Text> </Text>
<View style={styles.row}>      
        <View style={styles.icono}>
        <Image
        style={{width:100,
            height:100}}
            source={{ uri: "https://img.icons8.com/all/500/calendar.png" }}
      />
        </View>
        <View style={styles.cuadro}>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('crear')}>
          <Text style={styles.Titulo}>Crear Recordatorios</Text>
          </TouchableOpacity>
            
        </View>
        </View>
        <View style={styles.cuadro2}>
          <Text></Text>

          <FlatList  data={this.state.dataSource} renderItem={({item}) => 
      <View style={styles.cuadro}>

        <Text style={{fontSize:20}}><Text style={{fontSize:40}}>!!Hola!!</Text> : Brisa  Queremos Recordarte Que El Dia 26 de julio  Tu debes de bañarte  {item.dora}</Text>
      </View>   
        }/>
        </View>

        
      

      
      
    </View>
    )
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,top:30,
    backgroundColor: 'rgba(211, 163, 4, 0.781)',
  },  
  cuadro2:{
    backgroundColor:'rgba(253, 165, 3, 0.89)',
    height:100,
    width:600,
    top:-80
},
  cuadro:{
      backgroundColor:'rgba(253, 165, 3, 0.89)',
      height:100,
      width:500,
  },Titulo:{
      fontSize:40,
    
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
    fontSize: 50,
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
