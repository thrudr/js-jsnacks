/*
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/

let invited = ["Thrudr", "Brunilde", "Hervor", "Hildr", "Hladgudr", "Sigrdrifa", "Sigrun", "Svava", "Hnos"];
// Variabile FLAG: 
let remberThatIHaveToldYes = false;

let userName = prompt("Your name, please:");

for (let i = 0; i < invited.length; i++){
    if (userName == invited[i]){  
        console.log("WELCOME TO VALHALLA! SKALL!!");
        remberThatIHaveToldYes = true;
        break;
    }   
   
}

if (!remberThatIHaveToldYes){
    console.log("You are still not worthy to enter the Hall of the AllFather!");
}
