import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartContext } from './cart';

const CartIcon = ({ navigation }) => {
    const { getItemsCount } = useContext(CartContext);
    console.log(getItemsCount);

    return (
        <View style={styles.container}>
            <Text style={styles.text}
                onPress={() => {
                    navigation.navigate('Cart');
                }}
            >Cart ({getItemsCount()})</Text>
        </View>
    );
}

export default CartIcon;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        backgroundColor: 'orange',
        height: 32,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 32 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});