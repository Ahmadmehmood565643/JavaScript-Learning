/**
 * 📼 Video 60 — Strings
 * 🗂️ File: tut60-strings.js
 */

 // -----------------------------------------------------------------------------
 // Core
 // [ ] 📏 length & char access via [i]
 // [ ] ✂️ slice / substring
 // [ ] 🔠 toUpperCase / toLowerCase
 // [ ] 🔎 indexOf / includes
 // [ ] 🧵 split, 🧽 trim, 🪄 replace

 // -----------------------------------------------------------------------------
 // Mini-Tasks
 // [ ] 🧰 slugify('Hello World!') → 'hello-world'
 // [ ] 🔎 Case-insensitive "contains" check for a word

 // -----------------------------------------------------------------------------
 // Practice Ideas
 // - Extract first name from "First Last"
 // - Replace spaces with underscores in a sentence
 // -----------------------------------------------------------------------------




let text = "I love JavaScript";
console.log(text);
console.log(text.indexOf("love"));
console.log(text.indexOf("python"));
console.log(text.includes("love"));
console.log(text.includes("python"));
let names = "Ali, Ahmed, Sara";
console.log(names.split(" , "))
let textt = "Hello World"
console.log(textt.split(" , "));
let messy = "   Ahmed   ";
console.log(messy.trim());
let messyy = " JavaScript "
console.log(messyy.trim());
let texttt = "I like Java";
console.log(texttt.replace("Java" , "javascript"));
let helloW = "Hello World"
console.log(helloW.replace("Hello","Ahmad"));
let input = "   i love coding   ";
console.log(input.trim().toLocaleUpperCase().replace("CODING","Javascript"));
let prectice = "javascript"
console.log = (prectice.toLocaleUpperCase());
let worlddd = "HELLO WORLD"
console.log = (worlddd.toLocaleLowerCase());
console.log = (worlddd.toLocaleUpperCase());
let Love = "I love JavaScript"
console.log = (Love.indexOf("love"))
