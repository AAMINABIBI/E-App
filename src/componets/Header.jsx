import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({ isCart }) => {
    const navigation=useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('HOME')}
            style={styles.appIconContainer}>

                {isCart ? <Ionicons name={"chevron-back"}
                    color={"#E96E6E"} size={24} /> :
                    <Image source={require("../componets/assets/apps.png")}
                        style={styles.appIcon} />

                }
            </TouchableOpacity>
            {
                isCart && <Text style={styles.myCart}>My Cart</Text>

            }
            <View>
                <Image source={require('./assets/mee.png')}
                    style={styles.DP} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    appIcon: {
        height: 28,
        width: 28,
    },
    appIconContainer: {
        backgroundcolor: '#ffff',
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'centers'

    },
    DP: {
        height: 44,
        width: 44,
        borderRadius: 22,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    myCart: {
        fontSize: 28,
        color: 'black'
    }
})
