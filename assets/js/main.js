console.log('It works');

const products = [
    {
        image: 'burger.png',
        name: 'burger',
        quantity: 1,
        price: 8.50,
    },
    {
        image: 'burger.png',
        name: 'burger',
        quantity: 2,
        price: 8.50,
    },
    {
        image: 'burger.png',
        name: 'burger',
        quantity: 3,
        price: 8.50,
    },
    {
        image: 'burger.png',
        name: 'burger',
        quantity: 1,
        price: 8.50,
    },
    {
        image: 'burger.png',
        name: 'burger',
        quantity: 1,
        price: 8.50,
    },
    {
        image: 'burger.png',
        name: 'burger',
        quantity: 1,
        price: 8.50,
    },
];
console.log(products);

let itemElemets = document.getElementById('items')
console.log(itemElemets);

itemElemets.innerHTML = `${products.length} items`;
console.log(itemElemets);

const tableEl = document.querySelector("table > tbody");
console.log(tableEl);

// const 

// la funzione render stampa una riga nuova all'interno della mia table(@todo :attenzione: è ancora statica)
function render (product){
   
    const {image, name, quantity, price} = product

    const markup = `<tr>
        <td class="df"> <img src="./assets/img/${image}" alt="">
            <div class="align-self-center">
                <h3>${name}</h3>
                <div><a href="#">Remove</a></div>
            </div>
        </td>
        <td class="textalign-center">
            <button class="quantity_button">-</button>
            <input type="number" disabled class="quantity_input" value="${quantity}">
                <button class="quantity_button">+</button>
        </td>
        <td class="textalign-center">${(price).toFixed(2)}€</td>
        <td class="textalign-center">${(price * quantity).toFixed(2)}€</td>
    </tr>`
    tableEl.innerHTML += markup;
    console.log(product);
}


products.forEach((product) =>{
    render(product)
})