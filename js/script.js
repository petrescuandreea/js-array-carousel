/*
Dati tre array contenenti: - una lista ordinata di 5 immagini, - una lista ordinata dei relativi 5 luoghi e - una lista di 5 news, creare un carosello.
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi - titolo e - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.
*/

// Array 
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// Selezione degli elementi utili 
const itemsContainer = document.querySelector(".items");
const thumbsContainer = document.querySelector(".thumbs");

let item = "";
let thumb = "";


// Stampa degli elementi in pagina 
for (let i = 0; i < items.length; i++ ) {

    item += 
    `
    <div class="item">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div>
    `;

    thumb +=
    `
    <div class="thumb">
        <img src="${items[i]}" alt="${title[i]}">
    </div>

    `;

}


// Output 
itemsContainer.innerHTML = item;
// Aggiunta classe active 
document.getElementsByClassName("item")[0].classList.add("active");

thumbsContainer.innerHTML += thumb;
// Aggiunta classe active 
document.getElementsByClassName("thumb")[0].classList.add("active");



let activePosition = 0;

// next 
document.querySelector(".next").addEventListener("click",

    function () {

        // Ciclo infinito 
        // Se non sono alla fine degli
        if (activePosition < items.length - 1) {
            ++activePosition;
            console.log(activePosition);
            // activePosition = activePosition + 1; 
        } else { //se sono alla fine degli elementi 
            // resetto la posizione -resetto la posizione di indice
            activePosition = 0;
        }

        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");

    }

);


// prev 
document.querySelector(".prev").addEventListener("click",

    function() {

        // Ciclo infinito 
        // Se indice/posizione è 0
        if(activePosition === 0) {
            // faccio tornare all'ultimo elemento 
            activePosition = items.length - 1;
        } else {
            // altrimenti 
            --activePosition;
            // activePosition = activePosition - 1;
        }


        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
    }

);


