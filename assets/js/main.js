const numbersElement = document.getElementById('numbers');
//console.log(numbersElement);

/* let remainder5 = i % 5;
console.log(remainder5); */

for (let i = 1; i <= 10; i++) {
    //console.log(i);
    let remainder3 = i % 3;
    console.log(remainder3);
    numbersElement.insertAdjacentHTML('beforeend',`<li>${i}<li>`);
    /*  if (remainder3 == 0 && remainder5 == 0) {
        // console.log('FizzBuzz');
        numbersElement.innerHTML = `<li>FizzBuzz<li>`
        //numbersElement.insertAdjacentHTML('beforeend',`<li>FizzBuzz<li>`);
     } else if (remainder3 == 0) {
         // console.log('Fizz');
         numbersElement.innerHTML = `<li>Fizz<li>`
         //numbersElement.insertAdjacentHTML('beforeend',`<li>Fizz<li>`);
     } else if (remainder5 == 0 ) {
         //console.log('Buzz');
         numbersElement.innerHTML = `<li>Buzz<li>`
         //numbersElement.insertAdjacentHTML('beforeend',`<li>Buzz<li>`);
     } else{
         //console.log(i);
         numbersElement.innerHTML = `<li>${i}<li>`
         //numbersElement.insertAdjacentHTML('beforeend',`<li>${i}<li>`);
     }
      */

}
