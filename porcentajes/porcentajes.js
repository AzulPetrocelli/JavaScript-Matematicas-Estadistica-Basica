const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const discountButton = document.querySelector('.discount-button');
const pResult =  document.querySelector('.result');

discountButton.addEventListener('click', calcularMonto);

function calcularMonto() {
  const price = inputPrice.value;
  const discount = inputDiscount.value;

  if (!price || !discount) {
    alert('You have to complete both boxes');
  }
  else {
    calcularPorcentaje ();
  }

  function calcularPorcentaje () {
    const voucherArray = [
      'voucher %5',
      'voucher %10',
      'voucher %15',
      'voucher %20',
      'voucher %25',
      'voucher %30',
      'voucher %40',
      'voucher %50',
      'voucher %60',
    ];
  
    const discountArray = [
      5,
      10,
      15,
      20,
      25,
      30,
      40,
      50,
      60,
    ]

    for(let i = 0; voucherArray.length > i;i++) {
      if (voucherArray[i] == inputDiscount.value) {
        let result = ( price * (100 - discountArray[i])) / 100;
        pResult.innerText = '$' + result;
      }
    }
  }
}