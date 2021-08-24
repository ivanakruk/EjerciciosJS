//const lista1 = [ 1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];


function sacarModa(listado){
    const lista1Count = {};

    listado.map( //nos recorre el array
        function (elemento){//le damos una funcion anonima, osea sin nombre
            if (lista1Count[elemento]){
                lista1Count[elemento] += 1;//Esto va hacer que sume el valo que ya estaba guardado
            }else{
                lista1Count[elemento] = 1;
            }
            
        }    
       
    );    
    /* const lista1ArrayA = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor){
            valorAcumulado - nuevoValor
        }
    );
 */
    const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
    )

    const moda = lista1Array[lista1Array.length - 1]; // Me va a mostrar el numero que se repitio mas veces y al lado cuantas veces

    return moda;
}

function calcularMediaArmonica(velocidad, distancia){

    velocidad = [];
    
    const sumaVelocidad = velocidad.reduce(
        function (valorAcumulado = 0, nuevoELemento) {
            return valorAcumulado + nuevoELemento;
            }
        )
    const promedioVelocidad = (sumaVelocidad / 1)/5;
    
    console.log(`El promedio de la velocidad es ${promedioVelocidad} en la distancia de ${distancia}km`);

    return promedioVelocidad;


}

