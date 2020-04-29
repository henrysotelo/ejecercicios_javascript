//9)  Programa una función que obtenga un numero aleatorio entre 501 y 600.
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

//9)R/
const aleatorio = (min, max)=>(typeof(min) !== "number" || typeof(max) !== "number")
    ? console.error('Ingrese valores numerico')
        :(min > max)
            ? console.log('El valor min no debe ser mayor al max')
                : console.log(Math.round(Math.random() * (max - min)) + min);
//aleatorio(501, 600);

//10)R/
const capicua = (numero) =>(typeof(numero) !== "number") 
    ? console.error('Ingrese valores numerico')
        :numero.toString().split('').reverse().join('') != numero
            ? console.log('No es numero capicua:false')
                : console.log('Es numero capicua:true');          
//capicua(123);

//11)R/
 const factorial = (numero) =>{
    //iniciar variables
    let x = 1;
    //Valida1
    if (typeof(numero) !== "number"){console.error('Ingrese valores numerico'); return;}
    //valida2
    if (Math.sign(numero) === -1){console.error('Ingrese un numero positivo'); return;}
    //recorrer el numero para multiplicarlo
    for(let i=1; i<numero; i++){ x = x * (i+1) }
    //salida
    console.log(x);
 }
 factorial(-13);