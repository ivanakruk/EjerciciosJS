function descuentoPorcentaje (precio, descuento){
    const precioPorcentaje = 100 - descuento;
    const precioConDescuento = precio * precioPorcentaje / 100;

    return precioConDescuento;
}

function calcularPrecioCupon (){
    const priceValue = document.getElementById("PriceInput").value;
    const couponValue = document.getElementById("CouponInput").value;

    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = descuentoPorcentaje(priceValue, descuento);
    
        const resultP = document.getElementById("ResultPrecio");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}