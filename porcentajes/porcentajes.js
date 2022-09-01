const precio = document.querySelector('#precio');
const descuento = document.querySelector('#descuento');
const botonDescuento = document.querySelector('.boton-descuento');
const monto =  document.querySelector('.monto');

botonDescuento.addEventListener('click', calcularMonto);

function calcularMonto() {
  resultado = ( precio.value * (100 - descuento.value)) / 100;
  monto.innerText = '$' + resultado;
}