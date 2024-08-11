import React from 'react'
import { StyleSheet, View,Text,Pressable } from 'react-native'

const Pressible = () => {
  return (
    
    <View style={styles.mainBox}>
<Pressable style={styles.press}
onPress={()=>{console.warn('button prressed')}}
onLongPress={()=>{console.warn('button long prressed')}}
onPressIn={()=>{console.warn('button prressed In')}}
onPressOut={()=>{console.warn('button prressed out')}}

> 
    <Text>Pressible</Text>
</Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    mainBox:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    press:{
backgroundColor:'skyblue',
padding:10,
textAlign:'center'
}
})

export default Pressible
