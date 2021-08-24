const inputNum = document.getElementById("numberMovies");

const checkNetflix = document.getElementById("inputNetflix");
const checkHbo = document.getElementById("inputHbo");
const checkDisney = document.getElementById("inputDisney");

const botonComparar = document.getElementById("calcButton");
botonComparar.addEventListener("click",hacerComparacion);

function hacerComparacion(e){
    e.preventDefault()
    const precioCine = 600;
    const preciosPlataformas = [];
    const cantidadPelis = inputNum.value;
    if(checkNetflix.checked){
        const netflixOption = Number(checkNetflix.value);
        preciosPlataformas.push(netflixOption);        
    }
    if(checkDisney.checked){
        const disneyOption = Number(checkDisney.value);
        preciosPlataformas.push(disneyOption);
    }
    if(checkHbo.checked){
        const hboOption = Number(checkHbo.value);
        preciosPlataformas.push(hboOption);
    }

    const sumaTarifas = preciosPlataformas.reduce((acumulador,numero )=> acumulador + numero,0)
    const totalCine = precioCine * cantidadPelis;

    divPintarResul.innerHTML = `Usted gasta ${totalCine}$ si va ${cantidadPelis} veces al cine y si paga la subscripción seleccionada ${sumaTarifas}$ al mes`



 

    console.log(cantidadPelis);
    console.log(preciosPlataformas);
    console.log(sumaTarifas);
}