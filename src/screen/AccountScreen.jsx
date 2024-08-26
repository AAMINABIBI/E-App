import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AccountScreen = () => {
  return (
   <View style={styles.container}>
    <Text>
        No need to login,,,
    </Text>
    <Text >
    You are already Login
    </Text>
   </View>
  )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightpink",
        justifyContent:"center",
        alignItems:"center",
        
        
        },
})
export default AccountScreen
