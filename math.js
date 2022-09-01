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

function calcularTrianguloEquilatero(lados, base) {
  if (lados === base) {
    console.warn('Este no es un triangulo isoceles')
  } else {
    return Math.sqrt(( Math.pow (lados, 2) ) - ( Math.pow (base, 2) / 4 ));
  }
}

function calcularTrianguloEscaleno(lado1, lado2, base) {
  const x = (lado2 ** 2 - lado1 ** 2 + base ** 2) / (2 * base);
  const altura = Math.sqrt(lado2 ** 2 - x ** 2);

  return altura;
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