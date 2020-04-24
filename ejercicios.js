//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//1)R/
const contadorString = function(nameString){
    //variable de return
    let value;
    //tipo de datos 
    let tipo = typeof(nameString);
    //debe ser de tipo string
    if(tipo==='string'){
        value = `El numero de caracteres: ${nameString.length}`;
    }else{
        value = `El parametro es de tipo: ${tipo}`; 
    }
    //devuelve valores
    return value;
}