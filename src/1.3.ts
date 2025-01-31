{
  // object in ts, and Literal Type

  const user: {
    gitHubRepo: 'https://github.com/eh-munna/web-craftsman'; // Literal Type
    name: string;
    age: number;
    // optional property
    address?: {
      city: string;
      postalCode: string;
      state?: string;
      country: string;
    };
    isUser: boolean;
  } = {
    gitHubRepo: 'https://github.com/eh-munna/web-craftsman',
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      postalCode: '10001',
      country: 'USA',
    },
    isUser: true,
  };
}
