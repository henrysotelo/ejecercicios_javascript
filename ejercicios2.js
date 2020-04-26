//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

//5)R/
 const invertirString = (cadena) => {
    //Definicion de variables
    let invString='';
    //Valdiar que cadena contega datos y el tipo sea string
    if(!cadena || typeof(cadena) !== 'string') return console.warn('Favor Ingresar un texto valido');
     //rRecorre la cadena
     for(let i = cadena.length; i>=0; i--)invString = invString + cadena.charAt(i);
     //salida log
     console.log(invString);
    };

//6)R/
 const contarString = (cadenaString, search ) => {
    //Definicion de variables
    let contar = 0;
    let index  = cadenaString.indexOf(search);
    //validación 1 texto valida
    if(!cadenaString || !search) 
        return console.warn('Favor Ingresar un texto valido');
    
    //validación 2 que sea tipo string
    if(typeof(cadenaString) !== 'string' || typeof(search) !== 'string') 
        return console.error(`Ingresar parametros de tipo string ${cadenaString}, ${search}`);
    
        //while hasta que no se cumpla la condicion
    while(index !== -1) {
        //actualiza index
        index = cadenaString.indexOf(search, index+1);
        //contador
        contar++;
    }
    console.log(contar);  
 }

 //7)R/
const palindromo = (frase)  => (!frase) 
    //validación 1 texto valida
    ? console.warn('Favor Ingresar un texto valido') 
    //validación 2 que sea tipo string
    : (typeof(frase) !== 'string') 
    ? console.error('Ingresar parametros de tipo string')
    //validación 3 que mas de dos caraacters
    : (frase.length <= 2)
    ? console.warn('Ingrese mas de dos caracter')
    //validación 4 si es de tipo palindromo 
    : frase.toLowerCase() !== frase.split("").reverse().join('').toLowerCase()
    ? console.log(false)
    : console.log(true);

//8)R/
const eliminarString = (cadenaString, patron) => (!cadenaString || !patron ) 
    //Validacion 1 uno de los dos paramentros esta vacio
    ? console.warn('Favor Ingresar un texto valido en los parámetros')
    //Validacion 2 los tipos deben ser string
    :(typeof(cadenaString) !== 'string' || typeof (patron) !== 'string')
    ? console.error('Ingresar parametros de tipo string')
    //resultado
    :console.log(cadenaString.replace(new RegExp(patron, 'gi'), ''));
//eliminarString('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');
//eliminarString('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');