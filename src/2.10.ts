{
  // Mapped Type in TypeScript

  type Person = {
    name: string;
    age: number;
    role: 'user' | 'admin';
  };

  type Stringified<T> = {
    [K in keyof T]: string;
  };

  type StringPerson = Stringified<Person>;

  const person: StringPerson = {
    name: 'John',
    age: '30',
    role: 'user',
  };

  type ExactType<T> = {
    [K in keyof T]: T[K];
  };

  type User = {
    address: string;
    isNew: boolean;
  };

  type ExactUser = ExactType<User>;
}
