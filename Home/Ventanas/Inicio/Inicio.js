import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native';
import  MaterialHeader2 from "../../DiseñoDinamico/MaterialHeader2"
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
<MaterialHeader2>
</MaterialHeader2>
</View> 
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <View style={styles.row}>      
        <View style={styles.icono}>
        <Image
        style={{width:100,
            height:100}}
        source={require('../../DiseñoDinamico/img/lupa.png')}
      />
        </View>
        <View style={styles.cuadro}>
        <TouchableOpacity onPress={() =>navigation.navigate('Descubre')}>
            <Text style={styles.Titulo}>Descubre </Text>
            
        </TouchableOpacity>
        </View>
        </View>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <View style={styles.row}>      
        <View style={styles.icono}>
        <Image
        style={{width:100,
            height:100}}
        source={require('../../DiseñoDinamico/img/Hotel.png')}
      />
        </View>
        <View style={styles.cuadro}>
        <TouchableOpacity  onPress={() =>navigation.navigate('Hotel')}>
            <Text style={styles.Titulo}>Hotel </Text>
           
        </TouchableOpacity>
        </View>
        </View>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <View style={styles.row}>      
        <View style={styles.icono}>
        <Image
        style={{width:100,
            height:100}}
        source={require('../../DiseñoDinamico/img/resta.png')}
      />
        </View>
        <View style={styles.cuadro}>
        <TouchableOpacity onPress={() =>navigation.navigate('restaurante')}>
            <Text style={styles.Titulo}>Restaurantes </Text>
        </TouchableOpacity>
        </View>
        </View>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <View style={styles.row}>      
        <View style={styles.icono}>
        <Image
        style={{width:100,
            height:100}}
        source={require('../../DiseñoDinamico/img/agenda.png')}
      />
        </View>
        <View style={styles.cuadro}>
        <TouchableOpacity onPress={() =>navigation.navigate('Agenda')}>
            <Text style={styles.Titulo}>Agenda </Text>
        </TouchableOpacity>
        </View>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,top:30,
    backgroundColor: 'rgba(211, 163, 4, 0.781)',
  },
  cuadro:{
      height:100,
      width:500,
      backgroundColor:'rgba(253, 165, 3, 0.89)',
  },Titulo:{
      fontSize:50,
    
  },row:{
      flexDirection:'row'
  },icono:{
      width:100,
      height:100,flex:1
  },materialHeader2: {

  }, leftIconButton: {
    padding: 11
    ,backgroundColor: "rgba(253, 165, 3,0.3)",
  },
  leftIcon: {
    color: "#FFFFFF",
    fontSize: 40,backgroundColor: "rgba(253, 165, 3,0.3)",
  },
  
});
