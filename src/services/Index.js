import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Ofertas(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#FD5E27" }}>

            <TouchableOpacity
                style={style.button}
                onPress={() => props.clicarParaEnviar()}>
            <Text>Notificação 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.button}
                onPress={() => props.clicarParaEnviar2()}>
            <Text>Notificação 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.button}
                onPress={() => props.clicarParaEnviar2()}>
            <Text>Notificação 3</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.button}
                onPress={() => props.cancelar()}>
            <Text>Limpar</Text>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
     
    },
    button: {
        alignItems:'center',
        backgroundColor:"white",
        padding:10,
        width:200,
        marginTop:10
    }
})