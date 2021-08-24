const lista1 = [
    100, 
    200,
    500,
    800,
    4000,
];
/* function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoELemento) {
            return valorAcumulado + nuevoELemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista
} */

/* 
const mitadLista1 = parseInt(lista1.length /2); // se divide el largo por 2 para tener la mitad y parseado para que no nos de un numero con coma
 */


/* let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ])

    mediana = promedioElemento1y2;
}else{
    mediana = lista1[mitadLista1]
}
 */



//ordenar la lista de menos a mayor
    //sacar la mitad de la lista
    //verificar si la lista es par
    //Si es par se buscan los 2 numeros que esten por la mitad y se saca un promedio, usando la funcion para sacar el promedio
    //Si es impar toma el numero que justo este por la mitad, y que ya ha sido pasado a entero cuando se lo busco con la division x 2 de la lista

function sacarMediana(listaNum){    

    function ordenarLista(listaNum){
        listaNum.sort((a, b) => a - b);// ordena de menor a mayor
        return listaNum;
    }

    ordenarLista(listaNum);
    const mitadLista = parseInt(listaNum.length /2);

    function esPar(numerito){
        if(numerito % 2 === 0){
        //si el residuo es cero, es par
        return true; 
        } 
        else {
            return false;
        }   
    }       

    let mediana;

    if (esPar(listaNum.length)){
        const elemento1 = listaNum[mitadLista - 1];
        const elemento2 = listaNum[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ])
    
        mediana = promedioElemento1y2;
        return mediana;
    }else{
        mediana = listaNum[mitadLista]
        return mediana;
    }
    
}


function calcularMediaAritmetica(listaNum){
    const sumaLista = listaNum.reduce(
        function (valorAcumulado = 0, nuevoELemento) {
            return valorAcumulado + nuevoELemento;
        }
    )
    const promedioLista = sumaLista / listaNum.length;
    
    return promedioLista
}    
