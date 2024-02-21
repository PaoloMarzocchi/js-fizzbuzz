## TRACCIA

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
:lampadina:Si, lo abbiamo intravisto mentre facevamo la lezione sulle stringhe e i numeri (Cerco un operatore che fa al caso mio)

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
:insetto: Ricordate di usare il console.log() sia in fase di preparazione e verifica dei dati che ovviamente durante il degugging per scovare potenziali errori!

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## STEPS

- creo un elemento in html che funga da "contenitore" per il mio output
- salvo l'elemento nel file html in una variabile in js
- creo un ciclo for da 1 a 100
- controllo se l'indice del ciclo è divisibile per 3 o 5 oppure 3 e 5 tramite l'operatore % che mi restituisce il resto di una divisione
- SE divisibile per 3 stampo Fizz
- ALTRIMENTI SE divisibile per 5 stampo Buzz
- ALTRIMENTI SE divisibile per 3 e 5 stampo FizzBuzz
- ALTRIMENTI stampo l'indice del ciclo 

## TOOLS

- tag html
- let / const
- for(){}
- if/else if
- .insertAdjacentHTML