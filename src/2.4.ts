{
  // Generic with Interface

  interface Developer<T> {
    name: string;
    age: number;
    skills: T[];
  }

  const pythonDeveloper: Developer<string> = {
    name: 'John Doe',
    age: 30,
    skills: ['Python', 'Django', 'React'],
  };

  const javaScriptDeveloper: Developer<string> = {
    name: 'Jane Smith',
    age: 25,
    skills: ['JavaScript', 'React', 'Node.js'],
  };
}
