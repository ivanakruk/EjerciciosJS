let nombre = "Ivana";
let apellido = "Kruk";
let usuario = "ivana.k";
let edad = 30;
let email = "ivana.kruk@gmail.com";
let ahorrado = 30000;
let deudas = 2500;
let dineroReal= ahorrado - deudas;

console.log("Nombre Completo: "+ nombre +""+ apellido);
console.log(dineroReal);



function datospersonales( naname,lastname,nickname ){   
    return 'Mi nombre es ' + naname + ' ' + lastname + ', pero prefiero que me digas ' + nickname;

}
console.log(datospersonales("Ivana Giselle", "Kruk", "Iva"));

let tipoSuscripcion = "basic";

if (tipoSuscripcion==="free"){
    console.log("Puede tomar cursos gratis");
}
else if(tipoSuscripcion==="basic"){
    console.log("Puede tomar casi todos los cursos por un mes");
}
else if(tipoSuscripcion==="expert"){
    console.log("Puede tomar casi todos los cursos por un año");
}
else if(tipoSuscripcion==="expert+"){
    console.log("Puede tomar todos los cursos por un año con alguien más!");
}

if (tipoSuscripcion==="free"){
    console.log("Puede tomar cursos gratis");
}
if(tipoSuscripcion==="basic"){
    console.log("Puede tomar casi todos los cursos por un mes");
}
if(tipoSuscripcion==="expert"){
    console.log("Puede tomar casi todos los cursos por un año");
}
if(tipoSuscripcion==="expert+"){
    console.log("Puede tomar todos los cursos por un año con alguien más!");
}

let valor=0;

while(valor<5){
    console.log("El valor es: " + valor);
    valor++;
}

while(valor>=2){
    console.log("El valor es: " + valor);
    valor--;
}

let frutas = ["anana", "banana", "manzana"];

function elementUno(elements){
    console.log(elements[0]);
}

function allElement(frutas) {
    frutas.forEach(element => {
      console.log(element);
    });
  }
  
let usuario = {
    nombre:'Ivana',
    apellido:'Kruk',
    edad:30,
}

function printObject(object) {
    Object.values(object).forEach(element => {
      console.log(element);
    });
  };
  


imprimirObjeto(usuario)