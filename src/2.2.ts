{


  // Extending in TypeScript

  type Role = 'user' | 'admin';

  interface User {
    id: string | number;
    name: string;
    role: Role;
  }

  // extending interface

  interface Admin extends User {
    permissions: string[];
  }

  const admin: Admin = {
    id: '0000A1',
    name: 'John Smith',
    role: 'admin',
    permissions: ['read', 'write', 'delete'],
  };

  // extending type

  type Customer = User & { purchaseHistory: string[] };

  const user: Customer = {
    id: '0000U1',
    name: 'Bobby Smith',
    role: 'user',
    purchaseHistory: ['item1', 'item2'],
  };

  //   array definitions

  //   with type

  type ArrWithType = string[];
  const arr: ArrWithType = ['item1', 'item2'];

  // with interface

  interface ArrWithInterface {
    [key: number]: string;
  }

  const arr2: ArrWithInterface = ['item1', 'item2'];
}
