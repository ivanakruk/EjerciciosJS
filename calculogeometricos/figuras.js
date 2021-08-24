//Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado (lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo (lado1 ,lado2 , base){
    return lado1 + lado2 + base;
} 
function areaTriangulo (base, altura){
    return (base * altura)/2;
}
console.groupEnd();

//Código del círculo
console.group("Círculos");
// Diámetro
function diametroCirculo (radio){
   return  radio * 2;
} 

// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circunferencia
function perimetroCirculo (radio){
   const diametro = diametroCirculo(radio);
   return diametro  * PI;
} 

// Área
function areaCirculo (radio) {
    return (radio* radio) * PI;
} 
console.groupEnd();

// triangulo isósceles
function alturaIsosceles(ladoA, ladoB, base){
    if(ladoA===ladoB && ladoA !=base){
        alert("Es un triángulo isósceles vamo a sacar la altura");
        const baseC = base /2;
        const raiz = (ladoA* ladoA) - (baseC * baseC); 
        return altura = Math.sqrt(raiz);     
    }
    else {
        alert("No es un triangulo isósceles");
    }
}
//Acá interactuamos con el HTML

function CalcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function CalcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Triángulo
function CalcularPerimetroTriangulo (){
    const lado1 = Number(document.getElementById("InputTrianguloLado1").value);
    const lado2 = Number(document.getElementById("InputTrianguloLado2").value);
    const base = Number(document.getElementById("InputTrianguloBase").value);
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}
function CalcularAreaTriangulo (){
    const altura = Number(document.getElementById("InputTrianguloAltura").value);
    const base = Number(document.getElementById("InputTrianguloBase2").value);
    const area = areaTriangulo(base,altura);
    alert(area);
}
function CalcularDiametroCirculo(){
    const radio = Number(document.getElementById("InputCirculo").value);
    const diametro = diametroCirculo (radio);
    alert(diametro);
}
function CalcularPerimetroCirculo(){
    const radio = Number(document.getElementById("InputCirculo").value);
    const perimetro = perimetroCirculo (radio);
    alert(perimetro);
}
function CalcularAreaCirculo(){
    const radio = Number(document.getElementById("InputCirculo").value);
    const area = areaCirculo (radio) ;
    alert(area);
}

function CalcularAlturaIsosceles() {
    const ladoA = Number(document.getElementById("InputTrianguloIsoscelesA").value);
    const ladoB = Number(document.getElementById("InputTrianguloIsoscelesB").value);
    const base = Number(document.getElementById("InputTrianguloIsoscelesBase").value);

    const altura = alturaIsosceles(ladoA, ladoB, base);
    alert("La altura del triángulo es: "+ altura);
}
