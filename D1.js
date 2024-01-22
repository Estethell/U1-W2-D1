/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
-Stringhe: sono variabili di testo che devono essere compresi tra virgolette"" o apici '' e che vengono letti tali anche se contengono numeri;
-Number: sono variabili numeriche che vengono lette come numeri, possono essere scritte anche sottoforma di decimali (quindi accettano il punto tra i numeri);
-Boolean: sono variabili che prevedono come risposta soltanto true (vero) e false (falso), non è possibile avere altre possibilità;
-Underfined: questa dicitura indica un'assenza di valore nella variabile, ovvero non c'è una variabile e quindi il valore è vuoto;
-Null: questa variabile indica un'assenza di valore ma contrariamente a Underfined, Null è stato volontariamente inserito dallo sviluppatore che ha svuotato la variabile del suo contenuto/valore;
-NaN: questa variabile indica l'assenza nel proprio valore di operazioni numeriche;
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName;
myName = "Ilaria";
console.log(myName);

const my_name = "Ilaria";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x;
x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Rosati";
console.log(myName);

console.log(my_name);

// let my_name = "Rosati";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
console.log(name1 === name2.toLowerCase());
