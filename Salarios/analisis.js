function findPerson(namePerson) {
  return salarios.find(person => person.name == namePerson);
}

function findSalary (namePerson) {
  const works = findPerson(namePerson).trabajos;
  return works.map(element => {return element.salario});
}

function medianaByPerson (person) {
  const salarys = findSalary (person)
  return PlatziMath.calcularMediana(salarys)
}

function predictSalary (person) {
  const salarys = findSalary (person);
  let payRasePercent = [];

  for (let i = 1; i < salarys.length ; i++) {
    const oldSalariy = salarys[i - 1];
    const newSalary = salarys[i];
    const growUp = newSalary - oldSalariy;
    const percent = growUp / oldSalariy;
    payRasePercent.push(percent);
  };

  const mediaPayRase = PlatziMath.calcularMediana(payRasePercent);
  const lastSalary = salarys[salarys.length - 1];
  const rase = Math.round(lastSalary * mediaPayRase)

  const increacedSalary = lastSalary + rase

  return increacedSalary
}

const empresas = {};

salarios.forEach(empleado => {
  empleado.trabajos.forEach(element => {
    if (!empresas[element.empresa]) {
      empresas[element.empresa] = {};
    }

    if (!empresas[element.empresa][element.year]) {
      empresas[element.empresa][element.year] = [];
    }

    empresas[element.empresa][element.year].push(element.salario);
  });
});

// Reto: predecir la mediana de sueldo de la empresa el año que viene
console.log(empresas)
predictSalaryCompany = (nameCompany) => {
  if (!empresas[nameCompany]) {
    console.warn('La compania ingresada no esta registrada en nuestra base de datos')
  } else {
    let lastValue = Object.entries(empresas[nameCompany])
    let salary = lastValue[lastValue.length - 1][1]
    let salarys = salary.sort((a,b) => {return a - b});

    let payRasePercent = [];

    for (let i = 1; i < salarys.length ; i++) {
      const oldSalariy = salarys[i - 1];
      const newSalary = salarys[i];
      const growUp = newSalary - oldSalariy;
      const percent = growUp / oldSalariy;
      payRasePercent.push(percent);
    };

    const mediaPayRase = PlatziMath.calcularMediana(payRasePercent);
    const lastSalary = salarys[salarys.length - 1];
    const rase = Math.round(lastSalary * mediaPayRase)

    const increacedSalary = lastSalary + rase

    return increacedSalary
  }
}

//  Reto: crear una funcion que calcule la mediana de la empresa y año que le digamos 

function medianaEmpresaYear (nombre, year) {
  if (!empresas[nombre]) {
    console.warn('La empresa no esta registrada en nuestra base de datos')
  } else if (!empresas[nombre][year]){
    console.warn('La empresa no tiene registros de salarios en ese año')
  } else {
    return (PlatziMath.calcularMediana(empresas[nombre][year]))
  }
}

//  Reto: calcular la mediana de cada año de las empresas

function medianaAnualEmpresas (empresa) {
  let medianaEmpresaList = []

  if (!empresas[empresa]) {
    console.warn('La empresa que ingreso no esta registrada');
  } else {
    const empresaYears = Object.keys(empresas[empresa]);
    empresaYears.forEach(year => medianaEmpresaList.push(medianaEmpresaYear(empresa , year)));
  }

  let payRasePercent = [];

  for (let i = 1; i < medianaEmpresaList.length ; i++) {
    const oldSalariy = medianaEmpresaList[i - 1];
    const newSalary = medianaEmpresaList[i];
    const growUp = newSalary - oldSalariy;
    const percent = growUp / oldSalariy;
    payRasePercent.push(percent);
  };

  const mediaPayRase = PlatziMath.calcularMediana(payRasePercent);
  const lastMediana = medianaEmpresaList[medianaEmpresaList.length - 1];
  const rase = Math.round(lastMediana * mediaPayRase)

  const increacedSalary = lastMediana + rase
  
  console.log('El proximo año la mediana sera de: ' + increacedSalary)

}

// analisis general

medianaGeneral = () => {
  const listMediana = salarios.map(persona => {return medianaByPerson(persona.name)})
  const mediana = PlatziMath.calcularMediana(listMediana);

  return mediana
}

medianaTop10 = () => {
  const listMediana = salarios.map(persona => {return medianaByPerson(persona.name)})
  listMediana.sort((a,b) => {return a - b})

  let percent = Math.round(listMediana.length * 0.1)
  listTop10 = listMediana.slice(listMediana.length - percent)
  console.log(listMediana)
  console.log(listTop10)

  const medianaTop = PlatziMath.calcularMediana(listTop10);

  return medianaTop
}