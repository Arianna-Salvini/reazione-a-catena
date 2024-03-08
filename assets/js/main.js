console.log('It works');

const products = [
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
console.log(products);

let itemElemets = document.getElementById('items')
console.log(itemElemets);

itemElemets.innerHTML = `${products.length} items`;
console.log(itemElemets);

const tableEl = document.querySelector("table > tbody");
console.log(tableEl);


function render (products){
   
    const markup = `<tr>
        <td class="df"> <img src="./assets/img/burger.png" alt="">
            <div class="align-self-center">
                <h3>Burger</h3>
                <div><a href="#">Remove</a></div>
            </div>
        </td>
        <td class="textalign-center">
            <button class="quantity_button">-</button>
            <input type="number" disabled class="quantity_input" value="1">
                <button class="quantity_button">+</button>
        </td>
        <td class="textalign-center">8.50€</td>
        <td class="textalign-center">8.50€</td>
    </tr>`
    tableEl.innerHTML += markup;
}



products.forEach((product) =>{
    render(products)
})