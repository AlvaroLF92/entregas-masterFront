// Tipado

interface User {
  name: string;
  surname: string;
  id: number;
  country: string;
}

// Objeto de prueba

const user: User = {
  name: "Juan",
  surname: "Sanchez",
  id: 407,
  country: "Spain",
};

console.log(`El objeto inicial: ${JSON.stringify(user)}`);

// Función Clone

function clone(source: User): User {
  return Object.assign({}, source);
}

console.log(`Función Clone: ${JSON.stringify(clone(user))}`);

// Función Merge

interface PersonA {
  name: string;
  surname: string;
  country: string;
}

interface PersonB {
  name: string;
  age: number;
  married: boolean;
}

interface PersonC extends PersonB , PersonA {}; 

const personA: PersonA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const personB: PersonB = { name: "Luisa", age: 31, married: true };

function merge(source: PersonA, target: PersonB): PersonC {
    const newObject = Object.assign({}, target, source)
  return newObject
};

const merged = merge(personA,personB)

console.log(personA);
console.log(personB);

console.log(`Función Merge: ${JSON.stringify(merged)}`);
