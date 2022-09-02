const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const discountButton = document.querySelector('.discount-button');
const pResult =  document.querySelector('.result');

discountButton.addEventListener('click', calcularMonto);

function calcularMonto() {
  const price = Number(inputPrice.value);
  const discount = inputDiscount.value;
  
  
  
  //Esta es una forma de solucionarlo con arrays de objetos
  const voucherArray =[
    {
      coupon: 'voucher %5',
      discount: 5,
    },
    {
      coupon: 'voucher %10',
      discount: 10,
    },
    {
      coupon: 'voucher %15',
      discount: 10,
    },
    {
      coupon: 'voucher %20',
      discount: 20,
    },
    {
      coupon: 'voucher %25',
      discount: 25,
    },
    {
      coupon: 'voucher %30',
      discount: 30,
    },
    {
      coupon: 'voucher %40',
      discount: 40,
    },
    {
      coupon: 'voucher %50',
      discount: 50,
    },
    {
      coupon: 'voucher %60',
      discount: 60,
    },
  ]

  const isVoucherTrue = voucherArray.find(function(voucher){
    return voucher.coupon == discount;
  })

  if (isVoucherTrue && price) {
    let result = ( price * (100 - isVoucherTrue.discount)) / 100;
    pResult.innerText = '$' + result;
  } 
  else if (!price || !discount) {
    alert('You have to complete both boxes');
  } 
  else {
    alert("The voucher doesn't exist")
    pResult.innerText = '';
  }

  //Esta es una forma de solucionarlo con objetos
  /*
  const voucherObject = {
    'voucher %5': 5,
    'voucher %10': 10,
    'voucher %15': 15,
    'voucher %20': 20,
    'voucher %25': 25,
    'voucher %30': 30,
    'voucher %40': 40,
    'voucher %50': 50,
    'voucher %60': 60,
  }

  if (voucherObject[discount]){
    let result = ( price * (100 - voucherObject[discount])) / 100;
    pResult.innerText = '$' + result;
  }
  else {
    alert("The voucher doesn't exist")
  }
  */
}