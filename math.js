function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  }
}

console.log(calcularCuadrado(5));

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: base + lado1 + lado2,
    area: (base * altura) / 2,
  }
}

console.log(calcularTriangulo( 6, 6, 4, 5));