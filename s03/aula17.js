// . ? * + - ^ | $ [ ] { } ( ) \ :
const texto = "1,2,3,4,5,6,7,8, a.b c!d?e";
const regexPonto = /\./g;
const regexSimbolos = /,|\.| |!|\?/;

console.log(texto.split(regexPonto));
console.log(texto.split(regexSimbolos));