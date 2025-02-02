{
  // Function with generic

  // receiving single value to return as an array
  const createArray = <T>(param: T): T[] => {
    return [param];
  };

  // receiving multiple values to return as an array

  //   const createArray = <T>(...param: T[]): T[] => {
  //     return param;
  // };

  interface User {
    name: string;
    age: number;
  }
  const arrayOfObjects = createArray<User>({
    name: 'John Doe',
    age: 30,
  });
  console.log(arrayOfObjects);

  const arrayOfString = createArray<string>('Just a string');
  console.log(arrayOfString);
}
