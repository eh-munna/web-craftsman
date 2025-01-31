{
  // Function in typescript

  const add = (a: number, b: number): number => a + b;

  add(2, 3);

  const customer: {
    name: string;
    currentBalance: number;
    addBalance(balance: number): number;
  } = {
    name: 'John Smith',
    currentBalance: 1000,
    addBalance(balance: number) {
      return this.currentBalance + balance;
    },
  };

  console.log(customer.addBalance(500));
}
