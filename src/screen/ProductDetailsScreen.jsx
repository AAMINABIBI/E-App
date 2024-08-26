import React, { useContext, useState } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Header from '../componets/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';


const ProductDetailsScreen = () => {

    const sizes = ['S', 'M', 'L', 'XL'];
    const colorsArray = [
        "#91A1B0",
        "#B11D1D",
        "#1F44A3",
        "#9F632A",
        "#1D752B",
        "#000000",
    ];
const navigation=useNavigation();
    const { addToCart } = useContext(CartContext)
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const route = useRoute();
    const item = route.params.item;
    const handleAddToCart = (item) => {
        item.size=selectedSize;
        item.color=selectedColor;
        addToCart(item);
        navigation.navigate('CART')
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={[styles.title, styles.price]}>${item.price}</Text>
            </View>

            {/* Size Container */}
            <Text style={[styles.title, styles.sizeText]}>Size</Text>
            <View style={styles.sizeContainer}>
                {sizes.map((size, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.sizeValueContainer}
                        onPress={() => setSelectedSize(size)}
                    >
                        <Text
                            style={[
                                styles.sizeValue,
                                selectedSize === size && { color: '#E55B5B' },
                            ]}
                        >
                            {size}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Color Container */}
            <Text style={[styles.title, styles.colorText]}>Colors</Text>
            <View style={styles.colorContainer}>
                {colorsArray.map((color, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedColor(color)}
                        style={[
                            styles.circleBorder,
                            selectedColor === color && {
                                borderColor: color,
                                borderWidth: 2,
                            },
                        ]}
                    >
                        <View
                            style={[styles.circle, { backgroundColor: color }]}
                        />
                    </TouchableOpacity>
                ))}
            </View>

            {/* Button Container */}
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    handleAddToCart(item);
                }}
            >
                <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 20,
    },
    coverImage: {
        width: '100%',
        height: 420,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    title: {
        fontSize: 20,
        color: '#444444',
        fontWeight: '500',
    },
    price: {
        color: '#4D4C4C',
    },
    sizeText: {
        marginHorizontal: 20,
    },
    sizeContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    sizeValueContainer: {
        backgroundColor: '#FFFFFF',
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    sizeValue: {
        fontSize: 18,
        fontWeight: '600',
    },
    colorText: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    circle: {
        height: 36,
        width: 36,
        borderRadius: 18,
        marginHorizontal: 10,
    },
    colorContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleBorder: {
        height: 48,
        width: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    button: {
        backgroundColor: '#E96E6E',
        padding: 10,
        height: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 10,
    },
    buttonText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: '700',
    },
});

export default ProductDetailsScreen;
