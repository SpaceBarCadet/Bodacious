document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Red Dress', price: '$49.99', image: 'red-dress.jpg' },
        { id: 2, name: 'Blue Jeans', price: '$39.99', image: 'blue-jeans.jpg' },
        { id: 3, name: 'White T-Shirt', price: '$19.99', image: 'white-tshirt.jpg' },
        { id: 4, name: 'Black Skirt', price: '$29.99', image: 'black-skirt.jpg' },
    ];

    const productContainer = document.querySelector('.products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
});