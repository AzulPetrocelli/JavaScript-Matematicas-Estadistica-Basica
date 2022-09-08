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

    empresas[element.empresa][element.year].push(element.salario)
  })
})

console.log(empresas);