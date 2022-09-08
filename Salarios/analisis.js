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

for (persona of salarios) {
  for (trabajo of persona.trabajos) {

    //aca estamos preguntando dentro de empresas si NO existe una propiedad
    //con el nombre de la empresa que este iterando en ese momento entonces que cree
    // una en forma de objeto
   
    if (!empresas[trabajo.empresa]){
      empresas[trabajo.empresa] = {};
      //{LexCorp: {},...}
    }

    //si dentro del objeto empresa no se encuentra la 
    //propiedad año que la cree en forma de un array
    
    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
       //{LexCorp: {2018: [],...}}
    }

    //te estamos agregando el valor de cada salario de la lista
    // a la empresa correspondiente
  
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    //{LexCorp: {2018: [1050,1500,2040],...}}
  }
}

console.log(empresas)