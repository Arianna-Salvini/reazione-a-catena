console.log('It works');

const product = [
    {
        image: 'burger.png',
        nome: 'burger',
        quantità: 1,
        price: 8.50, 
    },
    {
        image: 'burger.png',
        nome: 'burger',
        quantità: 1,
        price: 8.50, 
    },
    {
        image: 'burger.png',
        nome: 'burger',
        quantità: 1,
        price: 8.50, 
    },
    {
        image: 'burger.png',
        nome: 'burger',
        quantità: 1,
        price: 8.50, 
    },
    {
        image: 'burger.png',
        nome: 'burger',
        quantità: 1,
        price: 8.50, 
    },
    {
        image: 'burger.png',
        nome: 'burger',
        quantità: 1,
        price: 8.50, 
    },
];
console.log(product);
    
let itemElemets = document.getElementById('items')
console.log(itemElemets);

itemElemets.innerHTML = `${product.length} items`;
console.log(itemElemets);