/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.
*/

// ARRAY
let oddArray = [];
let evenArray = [];

// USER NUMBER
for (let i = 0; i < 6; i++){
    let number =prompt("Choose a number:");
    number = parseInt(number);
    
    if (number % 2 != 0){
        oddArray.push(number);

    } else {
        evenArray.push(number);

    }

}
console.log("Your numbers is: " + oddArray + "," + evenArray);
console.log("Your odd numbers is: " + oddArray);
