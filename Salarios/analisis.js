console.log(salarios)

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
  salarys = findSalary (person)

  calculate = (salaryList) => {
    const oldSalary = salaryList[0]
    const newSalary = salaryList[salaryList.length -1 ]
    const percentageIncrement = (((newSalary - oldSalary) / (oldSalary * 100))) + 1
    

    const salaryIncrease = (newSalary * percentageIncrement)
    console.log("Tu salario mensual del proximo año deberia ser: " + salaryIncrease)
  }

  calculate(salarys)
}