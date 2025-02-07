const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Red Dress', price: '$49.99', image: 'red-dress.jpg' },
        { id: 2, name: 'Blue Jeans', price: '$39.99', image: 'blue-jeans.jpg' },
        { id: 3, name: 'White T-Shirt', price: '$19.99', image: 'white-tshirt.jpg' },
        { id: 4, name: 'Black Skirt', price: '$29.99', image: 'black-skirt.jpg' },
    ];
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});