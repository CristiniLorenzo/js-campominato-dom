// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// griglia 
const grid = document.querySelector('#grid'); 
// bottone cliccabile 
const btn = document.querySelector('#play-button');
// popolo la glriglia con i quadrati
btn.addEventListener('click', startGame);
const bombArray = [];
console.log(bombArray);

// FUNCTIONS 

// funzione che popola la griglia 
function startGame() {
    // svuoto la griglia per far partire nuova partita 
    grid.innerHTML = '';

    // Reset bombArray e points
    bombArray.length = 0;
    let points = 0;
    
    // ciclo per popolare array bombe 
    for(let i = 0; i < 16; i++){
        // creo 16 numeri random che sono le bombe 
        const randomNumber = getRndInteger(1, 100);

        bombArray.push(randomNumber);
        console.log(randomNumber);

    }
    for(let i = 1; i <= 100; i++) {
        const thisNumber = i;

        const square = generateSquare(thisNumber);
        square.addEventListener('click', function(){
            
            // cambio colore della cella al click 
            this.classList.add('click');
            // alert del numero al click 
            alert(thisNumber);

            
            if (bombArray.includes(thisNumber)){
                this.classList.add('lose');
                alert('hai perso il tuo punteggio è: ' + points);
                resetGame();
            }
            points++;


        })
        grid.append(square);
    }
}
// generazione div dei quadrati 
function generateSquare(number){
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = number;

    return newSquare;
}
// generatore numeri casuali 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione di reset del gioco
function resetGame() {
    // Reset bombArray
    bombArray.length = 0;
    // Rinizia gioco
    startGame();
}

