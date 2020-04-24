//1) Programa una función que cuente el número de caracteres de una c.to, pe. miFuncion("Hola Mundo") devolverá 10.
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

//2)R/
const recortadoString = function(nameString, valor){
    //variable de return
    let value;
    //tipo de datos 
    let tipoString = typeof(nameString);
    let tipoValor  = typeof(valor);

    if(tipoString==='string' && tipoValor === 'number'){
        value = nameString.substring(0, valor);
    }else{
        value = `Los parámetros no son validos son de tipo: ${tipoString}, ${tipoValor}`;
    }
    //Retornar valor
    return value;
}

//3)R/
const arrayString = function(nameString, argumento){
    //Variable de return
    let value;
    //tipo de datos 
    let tipoString = typeof(nameString);
    let tipoArgume = typeof(argumento);
    //valida los tipos de entrada
    if(tipoString==='string' && tipoArgume === 'string'){
        value = nameString.split(argumento)
    }else{
        value = `Los parámetros no son validos son de tipo: ${tipoString}, ${tipoValor}`;
    }
    //Retornar valor
    return value;
}

//4)//R
const repetirString = function(nameString, valor){
    //Variable de return
    let value = '';
    //tipo de datos 
    let tipoString = typeof(nameString);
    let tipoValor  = typeof(valor);
    //valida los tipos de entrada
    if(tipoString==='string' && tipoValor === 'number'){
        //recorre el valor ingresaro
        for(let i = 0; i < valor; i++ ){
            //add
            value = value + nameString + ' ';
        };
    }else{
        value = `Los parámetros no son validos son de tipo: ${tipoString}, ${tipoValor}`;
    };
    //Retornar valor
    return value;
}