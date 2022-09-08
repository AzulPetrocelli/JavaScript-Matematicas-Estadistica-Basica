function findPerson(namePerson) {
  return salarios.find(person => person.name == namePerson);
}

function findSalary (namePerson) {
  const works = findPerson(namePerson).trabajos;
  return works.map(element => {return element.salario});
}

function medianaByPerson (person) {
  salarys = findSalary (person)
  PlatziMath.calcularMediana(salarys)
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
    let salarys = lastValue[lastValue.length - 1][1]
    return predictSalary(salarys)
  }
  
  function predictSalary (salarys){
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
    console.log(PlatziMath.calcularMediana(empresas[nombre][year]))
  }
}

//  Reto: calcular la mediana de cada año de las empresas

const medianaEmpresas = {};

for (elemento in empresas) {
  for (year in empresas[elemento]) {
    if (!medianaEmpresas[elemento]) {
      medianaEmpresas[elemento] = {};
    }

    if (!medianaEmpresas[elemento][year]) {
      medianaEmpresas[elemento][year] = PlatziMath.calcularMediana(empresas[elemento][year]);
    }
  }
}