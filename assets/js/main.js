const numbersElement = document.getElementById('numbers');
//console.log(numbersElement)


for (let i = 1; i <= 100; i++) {
    //console.log(i);
    let remainder3 = i % 3;
    let remainder5 = i % 5;

    if (remainder3 == 0 && remainder5 == 0) {
        // console.log('FizzBuzz');
        numbersElement.insertAdjacentHTML('beforeend', `<li class="fz-bz">FizzBuzz</li>`);
    } else if (remainder3 == 0) {
        // console.log('Fizz');
        numbersElement.insertAdjacentHTML('beforeend', `<li class="fz">Fizz</li>`);
    } else if (remainder5 == 0) {
        //console.log('Buzz');
        numbersElement.insertAdjacentHTML('beforeend', `<li class="bz">Buzz</li>`);
    } else {
        //console.log(i);
        numbersElement.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
    }
}
