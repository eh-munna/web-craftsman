import React, { useState } from 'react';
import Button from '../ui/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-2xl font-bold text-center mb-6">
          Counter: {count}
        </h1>
        <div className="flex justify-center gap-4">
          <Button
            text={'Increment'}
            onSmash={increment}
            className={
              'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition'
            }
          />
          <Button
            text={'Decrement'}
            onSmash={decrement}
            className={
              'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
