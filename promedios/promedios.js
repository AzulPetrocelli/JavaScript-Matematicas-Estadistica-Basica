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


// Calcular Promedio (Clases: Calculando el promedio, Metodo reduce)
function calcularPromedio (lista) {
  const cantidad = lista.length;
  const total = lista.reduce((total, num) => total + num);
  const promedio = total / cantidad;

  return promedio;
};
calcularPromedio(list);


// Calcular mediana (Clases: Calculando mediana de una lista impar, calculando mediana de una lista par, Metodo sort)
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

// Calcular moda (Clases: Calculando la moda: arrays a partir de objetos, Calculando la moda:Arrays a partir de objetos)
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

calcularModa(list)

// Calcular rango medio (Clase: Reto: calcula otros tipos de promedio)
function calcularRangoMedio(lista) {
  function menorAmayor(valorAcumulado, nuevoValor) {
    return valorAcumulado - nuevoValor;
  }
  const sortList = lista.sort(menorAmayor);

  const minValor = sortList[0];
  const maxValor = sortList[sortList.length - 1];

  const rangoMedio = (minValor + maxValor) / 2;

  return rangoMedio
}

calcularRangoMedio(list)

// Calcular promedio ponderado: ((nota1 + credito1) + (nota2 + credito2) + (nota3 + credito3)) / (credito1 + credito2 + credito3)

const notes = [
  {
    course: "Educación Física",
    note: 10,
    credit: 2,
  },
  {
    course: "Programación",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas personales",
    note: 7,
    credit: 5,
  },
];

function calcularPromedioPonderado(list) {
  let notaCredito = [];
  let credito = [];

  list.forEach(element => {
    notaCredito.push(element['note'] + element['credit']);
    credito.push(element['credit']);
  })

  let notaCreditoTotal = notaCredito.reduce((total, num) => total + num);
  let creditoTotal = credito.reduce((total, num) => total + num);

  const promedioPonderado = (notaCreditoTotal / creditoTotal).toFixed(1)
  console.log(promedioPonderado)
}

calcularPromedioPonderado(notes)
