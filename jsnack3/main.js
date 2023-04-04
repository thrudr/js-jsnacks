/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// ARRAY
let numbers =[];
let sum = 0;

// CICLE FOR
for (let i=0; i<10; i++){
    const number = prompt ("Choose a number:");
    number=parseInt(number);
    numbers.push(number);
    sum += numbers[i];
    
    console.log(sum);
}  


        
        
 