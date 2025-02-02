{
  // Type assertion / type narrowing

  let anything;

  //   treat as string

  anything = 'just some text' as string;

  //   treat as number

  anything = 90 as number;

  //   type narrowing

  function printLength(value: string | number) {
    if (typeof value === 'string') {
      console.log(value.length); // value is treated as string here
    } else {
      console.log(value.toFixed(2)); // value is treated as number here
    }
  }

  printLength('Hello'); // prints 5
}
