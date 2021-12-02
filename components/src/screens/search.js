import React, { Component } from 'react'; 
import { View,Text, StyleSheet,Image,TextInput }from 'react-native';
export default function Search(){
    return(
        <View style={styles.search}>
         <Image
                  source={require('../assests/search.png')}
                  style={{
                    width:15,
                    height:15,
                  }}
                />
                <TextInput placeholder="Search..."  style={{fontSize:14,color:'black'}}/>
                <Image
                  source={require('../assests/qrcode.png')}
                  style={{
                    width:15,
                    height:15,
                  }}
                />
        </View>
    )
} 
const styles = StyleSheet.create({
    search:{
        height:30,
        width:250,
        borderColor:'#0037ED',
        borderWidth:1,
        borderRadius:10,
        padding:5,
        cursor:'pointer',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})