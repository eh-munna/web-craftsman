{
  // keyof Constraints

  interface Vehicle {
    name: string;
    model: string;
    year: number;
  }

  const car: Vehicle = { name: 'Toyota', model: 'ToyotaCar', year: 2025 };

  const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  const result = getValue(car, 'model');

  // Error: "make" is not a key of `car`
  //   const carMake = getValue(car, 'make');
}
