import { useState } from 'react';

export default function Player() {
  const [player, setPlayer] = useState(1);
  const handleAddPlayer = () => {
    setPlayer((prevPlayer) => {
        return prevPlayer + 1;
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold my-4">
        Updating Player's Number Using State
      </h1>

      <p className="py-4">Current Player: {player}</p>

      <div className="flex flex-col gap-6">
        <button
          className="self-start rounded-md border border-gray-200 text-indigo-400 p-1.5"
          onClick={handleAddPlayer}
        >
          Add Player
        </button>
        <button
          className="self-start rounded-md border border-gray-200 text-indigo-400 p-1.5"
          onClick={() => {
            setPlayer((prevPlayer) => prevPlayer - 1);
          }}
        >
          Remove Player
        </button>
      </div>
    </>
  );
}
