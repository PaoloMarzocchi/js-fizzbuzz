const numbersElement = document.getElementById('numbers');
//console.log(numbersElement);

for (let i=1; i <= 100; i++){
    //console.log(i);
    let remainder3 = i % 3;
    let remainder5 = i % 5;

    if (remainder3 == 0 && remainder5 == 0) {
        console.log('FizzBuzz');
    } else if (remainder3 == 0) {
        console.log('Fizz');
    } else if (remainder5 == 0 ) {
        console.log('Buzz');
    } else{
        console.log(i);
    }
    
}
