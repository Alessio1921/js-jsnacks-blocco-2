/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */
const n=parseInt( prompt("inserisci un numero"));
const array=[];

for(let i = 0; i < n; i++){
  while (array.length < 10) {
    array.push(Math.floor((Math.random()*4528)+4));
  }
console.log(array);

}
  
  
  