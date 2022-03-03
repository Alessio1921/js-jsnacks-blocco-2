/**
 *
 *
  Crea due tag div con due id diversi:
  un div avrà il testo colorato di rosso mentre l'altro di verde.
  Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
  Se sono pari li stampo nell'div "rosso",
  se sono dispari li stampo nell'div "verde".
 *
 */

document.querySelector("main").innerHTML=`<div id="red" class="text-danger"></div>
<div id="green" class="text-success"></div> 
`
const numbers=[10, 5, 9, 1, 8, 7, 11];

for (let i = 0; i < numbers.length; i++) {
  if(isEven(numbers[i])){
    document.getElementById('red').innerHTML+=`${numbers[i]} `
    // console.log(numbers[i]);
  }
  else{
    document.getElementById('green').innerHTML+=`${numbers[i]} ` 
    // console.log(numbers[i]);
  }
}
/**
 * created function that returns an even number
 * @param {*} tempNumber 
 * @returns 
 */
  function isEven(tempNumber){
      if (tempNumber % 2===0) {
        // console.log(tempNumber);
        return true;
      }
      return false;
    
  }