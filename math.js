// Cuadrado
function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: Math.pow(lado, 2),
  }
}

console.log(calcularCuadrado(5));

// Triangulo
function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: base + lado1 + lado2,
    area: (base * altura) / 2,
  }
}

console.log(calcularTriangulo( 6, 6, 4, 5));

// Circulo
function calcularCirculo(radio) {
  const diametro = radio * 2;
  const PI = Math.PI;

  return {
    circunferencia: diametro * PI,
    area: (radio ** 2) * PI,
  }
}

calcularCirculo(3)