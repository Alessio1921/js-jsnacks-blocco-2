/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */


let total=0;
let number=[];
while ( total<=200) {
  number=parseInt( prompt("inserisci un numero"));  
  total+=number;
}
console.log(total);