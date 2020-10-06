/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(sum(3, 4, 5));

const addingUp = (num1, num2, num3) => {
    return num1 + num2 + num3;
}
console.log(sum(11, 3, 9));


/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"
function concat(var1, var2) {
    return var1 + var2;
}
console.log(concat('abra', 'cadabra'));


/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

const enclose = (word, char) => char + word + char;

console.log(enclose('bril', '*'));
console.log(enclose('beep', '_'));
console.log(enclose('kaas', 'Q'));


/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"

function concatArray(words) {
    let glued = '';
    for (let i = 0; i < words.length; i++) {
        glued += words[i];
    }
    return glued;
}
console.log(concatArray(['abra', 'cadabra']));
console.log(concatArray(['a', 'b', 'c']));


/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick, Nova, Mitchel, Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E, en F!"

