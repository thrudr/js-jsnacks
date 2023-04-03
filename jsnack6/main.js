/*
Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso.
*/

// THE NUNBERS
let userNumber = prompt("Choose a number between 1 and 10:");
let computerNumber = Math.floor(Math.random() * 11);

// CONDITIONS
if (userNumber == computerNumber){
    console.log("Your number:" + userNumber);
    console.log("My number:" + computerNumber);
    console.log("CONGRATULATIONS! YOU WIN!");

} else {
    console.log("Your number:" + userNumber);
    console.log("My number:" + computerNumber);
    console.log("SORRY.. YOU LOSE.. TRY AGAIN.");
}