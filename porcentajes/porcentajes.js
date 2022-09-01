const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const discountButton = document.querySelector('.discount-button');
const pResult =  document.querySelector('.result');

discountButton.addEventListener('click', calcularMonto);

function calcularMonto() {
  const price = inputPrice.value;
  const discount = inputDiscount.value;

  let result = ( price * (100 - discount)) / 100;

  if (price == "" || discount == "") {
    alert("You have to put both values")
  } else if (discount >= 100 ){
    alert("The discount can't be greater than 100")
  } else {
    pResult.innerText = '$' + result;
  }
  
}