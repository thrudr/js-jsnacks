/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// CICLE FOR
for (let i = 0; i < 10; i+10){
    const number = prompt ("Choose a number of 1 to 10:");

    if (i > 10){
        i = parseInt(number);
        console.log("This number is invalid. Please try again.")
       
    } else if ( i <= 10){
        i = parseInt(number);
        let arrayNumbers = [i];
        arrayNumbers.push(i);
        let sum = 0 + arrayNumbers;
        console.log("The sum between every number is:" + sum);

    } else {
        console.log("Error. Try again.")
    }
}  


        
        
 