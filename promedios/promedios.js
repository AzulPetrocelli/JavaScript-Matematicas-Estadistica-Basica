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