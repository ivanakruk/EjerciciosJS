function descuentoPorcentaje (precio, descuento){
    const precioPorcentaje = 100 - descuento;
    const precioConDescuento = precio * precioPorcentaje / 100;

    return precioConDescuento;
}

function calcularPrecioCupon (){
    const priceValue = document.getElementById("PriceInput").value;
    const couponValue = document.getElementById("CouponInput").value;

    const coupons = ["JuanDC_es_Batman", "pero_no_le_digas_a_nadie", "es_un_secreto"];
    let descuento;

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
     } else if (couponValue === "es_un_secreto") {
        descuento = 25;
     }
    
     const precioConDescuento = descuentoPorcentaje(priceValue, descuento);
     const resultPrecio = document.getElementById("ResultPrecio");
     resultPrecio.innerText = "El precio del producto son:$" + precioConDescuento;

}