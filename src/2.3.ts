{
  // Introduction to Generics

  type Generic<T> = Array<T>;

  const fruits: Generic<string> = ['apple', 'orange', 'kiwi'];

  const numbers: Generic<number> = [1, 2, 3, 4, 5, 6, 7];

  type User = { name: string; age: number };

  const user: Generic<User> = [
    {
      name: 'John Doe',
      age: 30,
    },
  ];
}
