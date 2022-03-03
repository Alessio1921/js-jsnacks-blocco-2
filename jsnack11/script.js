/* creo un'altra funzione che controlla che la somma di due numeri x e y sia pari
*
* sommaPari(24214, 12451241) ==> true se la somma mi dà un numero pari
*                            ==> false se la somma mi dà un numero dispari
*/ 
let num1=parseInt( prompt("inserisci un numero"));
let num2=parseInt( prompt("inserisci un numero"));

console.log(isEven(num1 + num2));

function isEven(number){
  if (number % 2===0) {
    return true;
  }
  return false;
}