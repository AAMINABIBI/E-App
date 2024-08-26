import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../componets/Header'
import CartCard from '../componets/CartCard'
import { CartContext } from '../context/CartContext'
import CheckoutPage from './CheckoutPage'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
    const navigation=useNavigation();

const {carts,totalPrice,deleteItemfromCart}=useContext(CartContext)

  return (
    <View style={styles.container}>  
    <View style={styles.headerContainer}>
    <Header isCart={true}/>

        </View> 


<FlatList data={carts}
ListHeaderComponent={
    <>
 
    </>
}
renderItem={({item})=>(<CartCard item={item}
deleteItemfromCart={deleteItemfromCart}/>)}

ListFooterComponent={
    <>
       <View style={styles.priceContainer}>
    <View style={styles.priceAndTitle}> 
         <Text style={styles.text}>Total:</Text>
         <Text style={styles.text}>${totalPrice}</Text>
    </View>
   <View style={styles.priceAndTitle}>
    <Text style={styles.text}>Shopping</Text>
<Text style={styles.text}>$0.00:</Text>
   </View>

</View>

<View style={styles.divider}/>
<View style={styles.priceAndTitle}>
    <Text style={styles.text}>Grand Total</Text>
<Text style={[styles.text,{color:'black',fontWeight:'700'}]}>${totalPrice}</Text>
   </View>
    </>
}
showsVerticalScrollIndicator={false}
contentContainerStyle={{
    paddingBottom:100
}}
/>





<TouchableOpacity style={styles.checkoutContainer}  onPress={()=>{
    navigation.navigate(CheckoutPage)
}} >
    <Text style={styles.buttonText} >Checkout</Text>
</TouchableOpacity>
   </View>
  )
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "lightpink"
    },
    headerContainer:{
        marginBottom:10
    },
    priceAndTitle:{
flexDirection:'row',
justifyContent:'space-between',
marginHorizontal:20,
marginVertical:10
    },
    priceContainer:{
marginTop:40
    },
    text:{
        color:'#757575',
        fontSize:18
    },
    divider:{
        borderWidth:2,
        borderColor:'#C0C0C0',
        marginVertical:10
    },
    checkoutContainer:{
        backgroundColor:'#E96E6E',
        width:'100%',
        marginVertical  :10,
        borderRadius:10
    },
    buttonText:{
        fontSize:25,
        color:'white',
        textAlign:'center',
        padding:10
    }
})
export default CartScreen
