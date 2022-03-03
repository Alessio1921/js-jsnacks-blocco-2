/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */
    // const n=parseInt( prompt("inserisci un numero"));
    // const array=[];
    
    // for(let i = 0; i < n; i++){
    //   const tempArray=[];
    //   while (tempArray.length < 10) {
    //     tempArray.push(Math.floor((Math.random()*4528)+4));
    //   }
    // console.log(tempArray);
    // array.push(tempArray);
    // }
// 
// BONUS 1
/** Ultimo snack di oggi versioni custom
 *
 * § BONUS 1
 *
    Fai inserire due numeri, che chiameremo N & M, all'utente.
    Genera N array, ognuno formato da M numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.

 *
 */
const n=parseInt( prompt("inserisci un numero"));
const m=parseInt( prompt("inserisci un numero"));

const array=[];
    
for(let i = 0; i < n; i++){
  const tempArray=[];
  while (tempArray.length < m) {
    tempArray.push(Math.floor((Math.random()*4528)+4));
  }
console.log(tempArray);
array.push(tempArray);
}
  /**
 *
 * # BONUS 2
 *
    Fai inserire tre numeri, che chiameremo N & M & L, all'utente.
    Genera N array, ognuno formato da M numeri casuali tra 4 e 4532 che sommati diano almeno L.
    Ogni volta che ne crei uno, stampalo a schermo.

 *
//  */
//     const n=parseInt( prompt("inserisci un numero"));
//     const m=parseInt( prompt("inserisci un numero"));
//     const l=parseInt( prompt("inserisci un numero"));
//     let sum=0;
    
//     const array=[];
    
//     for(let i = 0; i < n; i++){
//       const tempArray=[];
//       let tempSum=0;
//       while (tempArray.length < m) {
//         tempArray.push(Math.floor((Math.random()*4528)+4));
//         tempSum+=tempArray[i];
//       }
//       console.log(tempArray);
//       array.push(tempArray);
//       sum+=tempSum;
//       tempSum=0;
//       console.log(sum)
//     }