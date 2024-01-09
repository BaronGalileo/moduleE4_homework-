// Практика 3

function createObjectNoProtatype() {
  const name = Object.create(null);
  return name
}

let name = createObjectNoProtatype()

console.log(name)//console.log(persons)