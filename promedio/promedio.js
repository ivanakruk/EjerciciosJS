const lista1 = [
    100, 
    200,
    300,
    500,
];


function calcularMediaAritmetica(lista){
    /* let sumaLista1 = 0;
     for (let i=0; i < lista.length; i++){
    sumaLista1 = sumaLista1 + lista[i]// lista 1 vale cero
    } */

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoELemento) {
            return valorAcumulado + nuevoELemento;
        }
    )
    const promedioLista = sumaLista1 / lista.length;
    
    return promedioLista
}

ca