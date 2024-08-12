import React, { useState } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'

const CustomModal = () => {
    const [show, setShow] = useState(false);
    return (
        <View style={styles.container}>
            {
                show ?
                    <View style={styles.body}>
                        <View style={styles.Modal}>
                            <Text style={{marginBottom:20}}>
                                Doallogue Box
                            </Text>
                            <Button title='Close' onPress={() => setShow(false)} />
                        </View>
                    </View>
                    : null
            }

            <Button title='open Dailogue Box' onPress={() => setShow(true)} />
        </View >

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    body: {
        backgroundColor: 'lightgray',
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    Modal: {
        backgroundColor: '#fff',
        height: 150,
        width: 150,
        padding: 20,
        alignItems:'center',
        justifyContent:'center'
    }
    })
export default CustomModal
