{
  // Utility Types

  type User = {
    name: string;
    age: number;
    role: 'user' | 'admin';
    address: string;
    isActive: boolean;
  };

  //   ************** Picking **************

  type PickedKeys = Pick<User, 'name' | 'age'>;

  type MappedPickedKeys<T> = {
    [K in keyof T as K extends 'name' | 'age' ? K : never]: T[K];
  };

  type NewPickedUser = MappedPickedKeys<User>;

  // ************** Omitting **************

  type OmittedKeys = Omit<User, 'role' | 'address' | 'isActive'>;

  type MappedOmittedKeys<T> = {
    [K in keyof T as K extends 'role' | 'address' | 'isActive'
      ? never
      : K]: T[K];
  };

  type NewOmittedUser = MappedOmittedKeys<User>;

  // ************** Optional **************

  type OptionalKeys = Partial<User>;

  type MappedOptionalKeys<T> = {
    [K in keyof T]?: T[K];
  };

  type NewOptionalUser = MappedOptionalKeys<User>;

  // ************** Readonly **************

  type ReadonlyKeys = Readonly<User>;

  type MappedReadonlyKeys<T> = {
    readonly [K in keyof T]: T[K];
  };

  type NewReadonlyUser = MappedReadonlyKeys<User>;

  // ************** Required **************

  type RequiredKeys = Required<User>;

  type MappedRequiredKeys<T> = {
    [K in keyof T]-?: T[K];
  };

  type NewRequiredUser = MappedRequiredKeys<User>;

  // ************** Record **************

  type RecordKeys = Record<string, string>;

  type MappedRecordKeys = {
    [K: string]: string;
  };

  const newRecordUser: MappedRecordKeys = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
  };

  const newRecord: RecordKeys = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
  };
}
