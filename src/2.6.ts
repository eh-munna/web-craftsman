{
  // Constraints in TypeScript

  interface Person {
    name: string;
    age: number;
  }

  function getPerson<T extends Person>(person: T): string {
    return `Hello ${person.name}, you are ${person.age} years old`;
  }

  const person = { name: 'John', age: 30 };
  const result = getPerson(person);
  console.log(result);
}
