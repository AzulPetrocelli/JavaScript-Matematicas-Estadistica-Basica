console.log(salarios)

function findPerson(namePerson) {
  return salarios.find(person => person.name == namePerson);
}

function medianByPerson (person) {
  const works = findPerson(person).trabajos;
  const salaryList = works.map(element => {return element.salario});
//let salaryList = []
//works.forEach(element => salaryList.push(element.salario));

  PlatziMath.calcularMediana(salaryList)
}