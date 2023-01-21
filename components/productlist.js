import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Product from './product.js';
import { PRODUCTS } from './dummyProducts.js';


const ProductList = ({ navigation }) => {
    const renderProduct = ({ item: product }) => {
        return (
            <Product {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', {
                        productId: product.id,
                    });
                }}
            />
        );
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(PRODUCTS);
    });

    return (
        <FlatList
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    );
}

export default ProductList;


const styles = StyleSheet.create({
    productsList: {
        backgroundColor: '#eeeeee',
    },
    productsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
});