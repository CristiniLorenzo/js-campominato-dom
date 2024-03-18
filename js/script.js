// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// bottone cliccabile 
const btn = document.querySelector('#play-button');
// popolo la glriglia con i quadrati
btn.addEventListener('click', function() {
    const grid = document.querySelector('#grid'); 
    for(let i = 1; i <= 100; i++) {
        const newSquare = generateSquare(i);
        grid.append(newSquare);
    }
});

// FUNCTIONS 

// funzione che popola la griglia 
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    // newSquare.innerHTML = `<span>${number}</span>`;
    newSquare.innerHTML = number;


    // eventi al click sul quadrato 
    newSquare.addEventListener('click', function() {
        // cambio colore 
        newSquare.classList.add('click');
        // alert 
        alert(number);
    });

    return newSquare
}