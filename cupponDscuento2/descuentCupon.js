function calculoDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajePrecioConDescuento / 100;

    return precioConDescuento;
}


function calcularPrecioCupon (){
    const priceUser = document.getElementById("PriceInput").value; 
    const coupons = document.getElementById("CouponInput").value;

    let descuento;

    switch(true){
        case coupons === "cupon27a":
            descuento = 15;
            break;
        case coupons ===  "cupon12d": 
            descuento = 50;
            break;
        case coupons === "cupon40d":
            descuento = 25;
            break;
        default:
            descuento = 0; 
        alert("Cupón no valido, no hay descuento");
    }
    
const precioConDescuento = calculoDescuento(priceUser, descuento);
const resultPrecio = document.getElementById("ResultPrecio");
resultPrecio.innerText = "El precio del producto son:$" + precioConDescuento;

}
