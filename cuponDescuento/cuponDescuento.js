/* function buttonPriceDiscount(){
    let inputPrice = document.getElementById("InputPrice");
    let priceValue = inputPrice.value;

    let inputDiscount = document.getElementById("InputDiscount");
    let discountValue = inputDiscount.value;

    let precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    let resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $"+precioConDescuento;
}
 */
function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  
  }
  
  function onClickButtonPriceDiscount() {
      const inputPrice = document.getElementById("InputPrice");
      const priceValue = inputPrice.value;
      
      const inputCoupon = document.getElementById("inputCoupon");
      const couponValue = inputCoupon.value;
  
      const resultCoupon = document.getElementById("priceWithCoupon")
    
      let descuento;
      let precioConDescuento; 
    
      switch(true) {
        case couponValue === "JuanDC_es_Batman":
          descuento = 15;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
        break;
        case couponValue === "pero_no_le_digas_a_nadie":
          descuento = 30;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
        break;
        case couponValue === "es_un_secreto":
          descuento = 25;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
        break;
        default:
          resultCoupon.innerText = "el cupón ingresado no es valido"
      }
  }