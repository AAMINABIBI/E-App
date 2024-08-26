import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

const catogory = ({ item, selectedCategory, setSelectedCategory }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text style={[styles.catogoryText,
            selectedCategory === item && {
                color: '#ffff',
                backgroundColor: '#E96E6E',
            }
            ]}
            >
                {item}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    catogoryText: {
        fontSize: 16,
        fontWeight: '600',
        // color:'#ffff',
        // backgroundColor:'#E96E6E',
        color: '#938F8F',
        backgroundColor: '#DFDCDC',
        padding: 10,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: "center",
        borderRadius: 16,

    }
})
export default catogory
