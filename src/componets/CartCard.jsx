import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
const imageurl = 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png'
const CartCard = ({item,deleteItemfromCart}) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }}
                style={styles.coverImage} />
            <View style={styles.cardContaier}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.circlesizecontainer}>
                    <View style={[styles.circle,  {backgroundColor:item.color}]} />
                    <View style={styles.sizeCircle}>
                        <Text style={styles.sizetext}>{item.size}</Text>
                    </View>
                </View>
            </View>
        
        <TouchableOpacity onPress={()=>{
            deleteItemfromCart(item);
        }}>
             <FontAwesome6 name={'trash'} color={"#F68CBC"}
                size={25} />
        </TouchableOpacity>
           
          
           


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    coverImage: {
        height: 125,
        width: "30%",
        borderRadius: 20
    },
    cardContaier: {
        flex: 1,
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500'
    },
    price: {
        color: '#797979',
        marginVertical: 10,
        fontSize: 18,

    },
    circle: {
        height: 32,
        width: 32,
        borderRadius: 16,
     
    },
    circlesizecontainer: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    sizeCircle: {
        backgroundColor: 'white',
        height: 32,
        width: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10

    },
    sizetext: {
        fontSize: 18,
        fontWeight: '500',

    }
})

export default CartCard
