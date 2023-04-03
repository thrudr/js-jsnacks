/*
Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
Modificate poi il programma in modo che venga chiesto all'utente il
numero massimo consentito, e stampare tutta la tabellina del 2 fino al
numero inserito.
*/


/*
// MULTIPLICATION TABLE
for (let i=2; i<=1000; i=i+2){
    console.log(i);
}
*/


// WITH USER NUMBER
let numberUser = prompt("Choose the maximum result what you want:");
number = parseInt(numberUser);

for (let i=2; i<=number; i=i+2){
    console.log(i);

}