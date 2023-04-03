/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// THE USER WORDS
let word1 = prompt("Write me a word:");
let word2 = prompt("Write me another word:");

// CONDITION
if (word1.length > word2.length){
    console.log("The longest word is:" + word1);

} else if (word2.length > word1.length){
    console.log("The longest word is:" + word2);
    
} else {
    console.log("Words are the same long.");
}