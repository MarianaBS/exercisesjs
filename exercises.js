//1-Variables y Operadores

//a-Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma 
//de ambos números en una 3er variable.

var numero1=4;
var numero2=6;
var suma=numero1 + numero2;

console.log('La suma de ' + numero1 + ' más ' + numero2 + ' tiene como resultado ' + suma);

//b-Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

var nombre='Mariana ';
var apellido='Sanchez';
var nya = nombre + apellido;

console.log(nya);

//c-Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
//guardando el resultado la suma una 3er variable (utilizar length).

var palabra1='Supercalifragilistico';
var palabra2='Espialidoso';
var longTotal= palabra1.length + palabra2.length;

console.log('Las palabras suman un total de: ' + longTotal + ' letras');

//2-Strings

//a-Crear una variable de tipo string con al menos 10 caracteres y convertir 
//todo el texto en mayúscula (utilizar toUpperCase).

var palabraMinusc='supercalifragilisticoespialidoso'

console.log(palabraMinusc.toUpperCase());

//b-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
//con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var frase='Sé fiel, sé fuerte, Dios no falla'
var fraseReduc=frase.substring(0,5);

console.log(fraseReduc);

//c-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
//con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var fraseReduc2=frase.substring(frase.length-3);

console.log(fraseReduc2);

//d-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con la primera letra en mayúscula y las demás en minúscula. 
//Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var frase2='jesús Te AMA';
var fraseModif= frase2.substring(0,1).toUpperCase()+frase2.substring(1).toLowerCase();

console.log(fraseModif);

//e-Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var frase3='Dios es fiel';
var pos=frase3.indexOf(' ');

console.log(pos);

//f-Crear una variable de tipo string con al menos 2 palabras largas 
//(10 caracteres y algún espacio entre medio). 
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string 
//que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
//(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var frase4='indudaBlemEnte espeRANzador'
console.log(frase4);
var posic=frase4.indexOf(' ');
console.log(posic);
var frase4=frase4.toLowerCase();
console.log(frase4);
var fraseNew=frase4.substring(0,1).toUpperCase() + frase4.substring(1,posic+1) + frase4.substring(posic+1,posic+2).toUpperCase()+frase4.substring(posic+2);

console.log(fraseNew);


//3-Arrays

//a-Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
//"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]);
console.log(meses[10]);

//b-Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log(meses.sort());

//c-Agregar un elemento al principio y al final del array (utilizar unshift y push).
var meses1=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses1.push('Vacaciones');
meses1.unshift('Necesito');

console.log(meses1);

//d-Quitar un elemento del principio y del final del array (utilizar shift y pop).

meses1.shift();
meses1.pop();

console.log(meses1);

//e-Invertir el orden del array (utilizar reverse)

console.log(meses.reverse());

//f-Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var mesesJuntos=meses1.join('-');
console.log(mesesJuntos);

//g-Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var meses2=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copiaMeses2=meses2.slice(4,11);

console.log(copiaMeses2);


//If Else

/*a-Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
y sino un alerta con el mensaje “Lower than 0,5”*/

var aleatorio=Math.random();
console.log(aleatorio);

if (aleatorio >= 0.5){
    alert('Greater than 0.5');
}else{
    alert('Lower than 0.5');
}


/*b-Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años*/

var Age=Math.floor(Math.random()*101); //esta formula la googlee para no tener que dejar un valor fijo
console.log(Age);

if(Age<2){
    alert('Bebé');
}else if (Age >= 2 && Age <= 12){
    alert('Niño');
}else if(Age>12 && Age <=19){
    alert('Adolescente');
}else if(Age>19 && Age<=30){
    alert('Joven');
}else if(Age>30 && Age <=60){
    alert('Adulto');
}else if(Age>60 && Age<=75){
    alert('Adulto mayor');
}else if(Age>75){
    alert('Anciano');
}


//For

/*a-Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
para mostrar una alerta utilizando cada una de las palabras.*/

var dias=["lunes","martes","miércoles","jueves","viernes"];
for(var i=0; i<dias.length;i++){
    alert(dias[i]);
}


/*b-Al array anterior convertir la primera letra de cada palabra en mayúscula 
y mostrar una alerta por cada palabra modificada.*/

for(var i=0; i<dias.length;i++){
    /*dias[i]=dias[i].substring(0,1).toUpperCase()+dias[i].substring(1);   
    alert(dias[i]);*/
    alert(dias[i].substring(0,1).toUpperCase()+dias[i].substring(1));
}


/*c-Crear una variable llamada “sentence” que tenga un string vacío, 
luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
Al final mostrar una única alerta con la cadena completa.*/

var sentence='';
for(var i=0; i<dias.length;i++){
    sentence+=dias[i];
}
alert(sentence);


/*d-Crear un array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, 
es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, 
desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).*/

var arreglo= new Array;
for(var i=0;i<10;i++){
    arreglo[i]=i;
}
console.log(arreglo);


//Funciones

/*a-Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, 
mostrando el valor de dicha variable en la consola del navegador.*/

function sumar1(num1,num2){
    return num1+num2;
}
var resultado1=sumar1(10,27);
console.log(resultado1);


/*b-A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function sumar2(num1,num2){
    if(typeof(num1)!='number' || typeof(num2)!='number'){
        alert('Uno de los parámetros no es un número');
        return NaN;
    }else{
        return num1+num2;
    }
}
var resultado2=sumar2(10,27);
console.log(resultado2);
var resultado2=sumar2('mariana',27);
console.log(resultado2);

/*c-Crear una función validate integer que reciba un número como parámetro 
y verdadero si es un número entero.*/

function validate_integer(numero){
    if (numero % 1 == 0) {
        return true;
     } else {
        return false;
     }
}
console.log(validate_integer(10.5));
console.log(validate_integer(21));

/*d-A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

function sumar3(num1,num2){
    if(typeof(num1)!='number' || typeof(num2)!='number'){
        alert('Uno de los parámetros no es un número');
        return NaN;
    }else{
        if (!validate_integer(num1)){
            num1=Math.round(num1);
            alert('El primer número ingresado no es entero. Se ha redondeado al más próximo: ' + num1);
        }
        if(!validate_integer(num2)){
            num2=Math.round(num2);
            alert('El segundo número ingresado no es entero. Se ha redondeado al más próximo: ' + num2);
        }
        return num1+num2;
    }  
}
console.log(sumar3(2.5,7.3));
console.log(sumar3(9.5,8));
console.log(sumar3(11,0.3));
console.log(sumar3(22,28));

//***********Otra interpretacion del problema******************

function sumar5(num1,num2){
    if(typeof(num1)!='number' || typeof(num2)!='number'){
        alert('Uno de los parámetros no es un número');
        return NaN;
    }else{
        if (!validate_integer(num1)){
            num1=Math.round(num1);
            alert('El primer número ingresado no es entero. Se ha redondeado al más próximo' );
            return num1;
        }else if(!validate_integer(num2)){
            num2=Math.round(num2);
            alert('El segundo número ingresado no es entero. Se ha redondeado al más próximo');
            return num2;
        }else {
            return num1+num2;
        }
    }  
}
console.log(sumar5(2.5,7.3));
console.log(sumar5(9.5,8));
console.log(sumar5(11,0.3));
console.log(sumar5(22,28));


/*E-Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma
 probando que todo siga funcionando igual.*/

 function esNumero(n){
     if(typeof(n)!='number'){
        return false;
     }else{
         return true;
     }
 }
 function sumar4(n1,n2){
     if(!esNumero(n1) || !esNumero(n2)){
        alert('Uno de los parámetros no es un número');
        return NaN;
     }
     else{
         return n1+n2;
     }
 }
console.log(sumar4(4,9));
console.log(sumar4('m','a'));
