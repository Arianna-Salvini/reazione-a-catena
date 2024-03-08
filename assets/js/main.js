console.log('It works');

const products = [
    {
        image: 'burger.png',
        name: 'Burger',
        quantity: 1,
        price: 8.50,
    },
    {
        image: 'french fries.png',
        name: 'French Fries',
        quantity: 2,
        price: 5.50,
    },
    {
        image: 'kebab.png',
        name: 'Kebab',
        quantity: 3,
        price: 7.00,
    },
    {
        image: 'pizza.png',
        name: 'Pizza',
        quantity: 1,
        price: 10.00,
    }
];
console.log(products);

let itemElemets = document.getElementById('items')
console.log(itemElemets);

itemElemets.innerHTML = `${products.length} items`;
console.log(itemElemets);

const tableEl = document.querySelector("table > tbody");
console.log(tableEl);

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
            <button class="remove-button" class="quantity_button" data-name="${name}" data-quantity="${quantity}">-</button>
            <input type="number" disabled class="quantity_input" value="${quantity}">
            <button class="add-button" class="quantity_button" data-name="${name}" data-quantity="${quantity}">+</button>
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

// variabili per accedere ai tasti + e -
let addButton = document.getElementsByClassName("add-button");
addButton = addButton.from(addButton);
const removeButton = document.getElementsByClassName(".remove-button");
console.log(typeof addButton);

// accesso al tasto + del quantity
addButton.forIn((button, index) => {
    button.addEventListener('click', function (e) {
        const button = e.target; // ho selezionato il bottone sul qualche ho cliccato e l'ho salvato nel button
        let quantity = Number(button.dataset.quantity); // salva la quantià nella variabile prendendola dal bottone renderizzato in pagina
        quantity++; // incremento la quantità della variabile presa dal bottone 

        // dobbiamo aumentare la quantità del prodotto 
        products[index].quantity = products[index].quantity +1; // selezioniamo la quantità dell'oggetto e assegniamo il nuovo valore
        tableEl.innerHTML = "";
        products.forEach((product) =>{
            render(product)
        })

        // dobbiamo aggiurnare la DOM
        console.log(products);
    })
});

// accesso al tasto - del quantity
removeButton.forEach ((button) => {
    button.addEventListener('click', function (e) {
        const button = e.target;
        console.log(button.dataset.name);
    })
});
