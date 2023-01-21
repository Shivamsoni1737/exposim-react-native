export const PRODUCTS = [
    {
        id: 1,
        name: 'Headset',
        price: 2000,
        image: require('../assets/products/headset.jpg'),
        description: 'A headset combines a headphone with microphone',
        // reviews: {
        //     shivam: 'nice product',
        //     rahul: 'good sound',
        // }
    },
    {
        id: 2,
        name: 'Toy Car',
        price: 650,
        image: require('../assets/products/toy-car.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile'
    },
    {
        id: 3,
        name: 'SweetHome Cupcake',
        price: 20,
        image: require('../assets/products/cupcake.jpg'),
        description: 'A cupcake is a small cake designed to serve one person'
    }
];

export const getProduct = (id) => {
    return PRODUCTS.find((product) => (product.id == id));
}