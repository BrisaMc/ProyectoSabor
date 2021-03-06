import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import index from  '../Home/Ventanas/Inicio/Inicio'
import Destinos from '../Home/Ventanas/Descubre/Destinos/Destinos'
import quehacer from '../Home/Ventanas/Descubre/QueHacer/Quehacer'
import rutas from '../Home/Ventanas/Descubre/Rutas/Rutas'
import Descubre from '../Home/Ventanas/Descubre/Descubre'
import Reservacion from  '../Home/Ventanas/Hotel/Reservacion'
import Hotel from '../Home/Ventanas/Hotel/Hotel'
import restaurante from '../Home/Ventanas/Restaurantes/restaurante'
import Agenda from '../Home/Ventanas/Agenda/agenda'
import calendario from '../Home/Ventanas/Agenda/Calendario/calendario'
import crear from '../Home/Ventanas/Agenda/Calendario/Crearrecordatorio'
import eventos from '../Home/Ventanas/Agenda/Eventos y cultura/eventos'

const Stack =createStackNavigator()
export default function Navigator()
{
    return(
        <Stack.Navigator >
            
            <Stack.Screen
            name='index'
            component={index}
            options={{
                headerTransparent: true,
                headerShown:false  
                      }}                
            />
<Stack.Screen
            name='Destinos'
            component={Destinos}
            options={{

                headerShown:false             
                      }} 
                                     
            />
<Stack.Screen
            name='quehacer'
            component={quehacer}
            options={{

                headerShown:false             
                      }} 
                                     
            />
<Stack.Screen
            name='rutas'
            component={rutas}
            options={{

                headerShown:false             
                      }} 
                                     
            />
            <Stack.Screen
            name='Hotel'
            component={Hotel}
            options={{

                headerShown:false             
                      }} 
                                     
            />
            <Stack.Screen
            name='Descubre'
            component={Descubre}
            options={{

                headerShown:false             
                      }} 
                                     
            />
    <Stack.Screen
            name='Reservacion'
            component={Reservacion}
            options={{

                headerShown:false             
                      }} 
                                     
            />
             <Stack.Screen
            name='restaurante'
            component={restaurante}
            options={{

                headerShown:false             
                      }} 
                   
                      
            />
              <Stack.Screen
            name='Agenda'
            component={Agenda}
            options={{

                headerShown:false             
                      }} 
                   
                      
            />
               <Stack.Screen
            name='calendario'
            component={calendario}
            options={{

                headerShown:false             
                      }} 
                   
                      
            />
               <Stack.Screen
            name='eventos'
            component={eventos}
            options={{

                headerShown:false             
                      }} 
                   
                      
            />
            <Stack.Screen
            name='crear'
            component={crear}
            options={{

                headerShown:false             
                      }} 
                   
                      
            />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        top:30
    }
})
