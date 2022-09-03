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

function esPar(lista) {
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

esPar(list)