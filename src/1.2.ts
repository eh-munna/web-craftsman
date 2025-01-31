{
  // Declare a variable with the type string
  const name: string = 'Walter White';

  // Declare a variable with the type number
  const age: number = 55;

  // Declare a variable with the type boolean
  const isMarried: boolean = true;

  // Declare a variable with the type any (which can hold any type of value)
  const anything: any = 'Hello, TypeScript!';

  // Declare an array with string type
  const names: string[] = ['Alice', 'Bob', 'Charlie'];

  // Declare an array with number type 
  const numbers: number[] = [10, 11, 12, 13, 14, 15, 16, 17];

  // Declare a variable with the type tuple (fixed-length array)
  const person: [string, number, boolean] = ['Walter White', 55, false];

  // Declare a variable with the type enum (a set of named constants)
  enum Gender {
    Male = 'Male',
    Female = 'Female',
  }
  const male: Gender = Gender.Male;
  console.log(male);
}
