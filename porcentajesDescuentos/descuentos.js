/* let precioOriginal = 100;
let descuento = 15; */

function calcularPrecioConDescuento(precio, descuento){
    let porcentajePrecioConDescuento = 100 - descuento;

    let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
function buttonPriceDiscount(){
    let inputPrice = document.getElementById("InputPrice");
    let priceValue = inputPrice.value;

    let inputDiscount = document.getElementById("InputDiscount");
    let discountValue = inputDiscount.value;

    let precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    let resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $"+precioConDescuento;
}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */