import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

const CheckoutPage = () => {
  return (
   <View style={styles.container}>
    <Text> Congratulation!!!!!</Text>
    <Text>Your order has been placed </Text>
    
   </View>
  )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "lightpink",
        justifyContent:"center",
        alignItems:"center"
    },
})
export default CheckoutPage
