import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image,ImageBackground } from 'react-native';
import  MaterialHeader2 from "../../DiseñoDinamico/MaterialHeader2"
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App({navigation}) {
  
  return (
    <View style={styles.container}>
<View style={styles.row}>
<TouchableOpacity style={styles.leftIconButton} onPress={() =>navigation.navigate('index')} >
          <MaterialCommunityIconsIcon
            name="menu"
            style={styles.leftIcon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
<MaterialHeader2 title="Descubre">
</MaterialHeader2>
</View> 
<Text> </Text>
<Text> </Text>
<Text> </Text>
        <ImageBackground
        source={require("../../DiseñoDinamico/img/Iglesia.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}>
        <EvilIconsIcon name="location" style={styles.icon} 
        onPress={() =>navigation.navigate('quehacer')}></EvilIconsIcon>
        <Text style={styles.destino}>Que Hacer</Text>
      </ImageBackground>
      <Text> </Text>
      <ImageBackground
        source={require("../../DiseñoDinamico/img/destino.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}>
        <EvilIconsIcon name="location" style={styles.icon} 
        onPress={() =>navigation.navigate('Destinos')}></EvilIconsIcon>
        <Text style={styles.destino}>  Destino</Text>
      </ImageBackground>
      <Text> </Text>
              <ImageBackground
        source={require("../../DiseñoDinamico/img/ruta.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}>
        <EvilIconsIcon name="location" style={styles.icon} 
        onPress={() =>navigation.navigate('rutas')}></EvilIconsIcon>
        <Text style={styles.destino}>  Rutas</Text>
      </ImageBackground>
    
        
      

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,top:30,
    backgroundColor: 'rgba(211, 163, 4, 0.781)',
  },
  cuadro:{
      backgroundColor:'rgba(253, 165, 3, 0.89)'
      ,height:300
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
