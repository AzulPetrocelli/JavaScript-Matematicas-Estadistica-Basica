const list = [
  820,
  542,
  325,
  564,
  456,
  895,
  981,
  472,
  153,
];

function calcularPromedio (lista) {
  const cantidad = lista.length;
  const total = lista.reduce((total, num) => total + num);
  const promedio = total / cantidad;

  return promedio;
};
calcularPromedio(list);

function calcularMediana(lista) {
  let mediana ;
  let index ;
  const sortList = lista.sort(function(valorAcumulado, nuevoValor){
    return valorAcumulado - nuevoValor
  });

  if (lista.length % 2 === 0) {
    index = (sortList.length / 2);
    mediana = (sortList[index] + sortList[index - 1]) / 2;
  } else {
    index = Math.floor((sortList.length) / 2);
    mediana = sortList[index];
  }

  console.log('La mediana de la lista es: ' + mediana);
}
calcularMediana(list)

function calcularModa(list) {
  const listCount = {};
  
  list.forEach(element => {
    if (listCount[element]) {
      listCount[element] = listCount[element] + 1;
    } else {
      listCount[element] = 1;
    }
  });

  const listCountArray = Object.entries(listCount)
  const sortListCountArray = listCountArray.sort(function(valorAcumulado , nuevoValor){
    return valorAcumulado[1] - nuevoValor[1]
  });
  
  const maxNumber = sortListCountArray[sortListCountArray.length - 1];
  const moda = maxNumber[0]

  console.log('La moda es ' + moda)
} 

