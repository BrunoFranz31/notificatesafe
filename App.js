import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { notificationManager } from './src/services/NotificationManager'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Index from './src/services/Index'
import Ofertas from './src/services/Ofertas'
import Ofertas1 from './src/services/Ofertas1'

const Stack = createNativeStackNavigator();
const notificador = notificationManager

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    notificador.configurar()
    notificador.criarCanal()
    notificador.agendarNotificacao()
  }

  clicarParaEnviar = () => {
    notificador.exibirNotificacao(
      1,
      "ESSE É UMA NOTIFICACAO",
      "E ESSA É A MENSTAGEM DELA",
      {}, //data
      {}  //options
    )
  }

  clicarParaEnviar2 = () => {
    notificador.exibirNotificacao(
      1,
      "ESSE É UMA NOTIFICACAO",
      "AVIS MAIS LONGO PARA O USUÁRIOOOOOOOOOOOO",
      {}, //data
      {}  //options
    )
  }



  cancelar = () => {
    notificador.cancelar()
  }

  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Index" options={{title:" ''NotificateSafe "}}>
            {
              ({navigation}) =>
              {
                notificador.definirNavegador(navigation);
                return <Index navegador={navigation} clicarParaEnviar={this.clicarParaEnviar} clicarParaEnviar2={this.clicarParaEnviar2}></Index>
              }
            }
          </Stack.Screen>

          <Stack.Screen name="Ofertas" options={{title:"Promocoes"}}>
            { ({navigation}) => {return(<Ofertas navegador={navigation} />) } }
          </Stack.Screen>

          <Stack.Screen name="Ofertas1" options={{title:"Cupons"}}>
            { ({navigation}) => {return(<Ofertas1 navegador={navigation} />) } }
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}



const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
})
