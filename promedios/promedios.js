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
  const promedio = total / cantidad;
  
  let total
  for (let i = 0; i < cantidad; i++) {
    total = total + lista[i]
  }
  
  return promedio;
};

