import {
  decrement,
  increment,
} from '../../redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { Button } from '../ui/button';

export default function Counter() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="flex flex-col justify-center items-center container mx-auto min-h-[50vh] space-y-3">
      <p className="">{value}</p>
      <div className="flex items-center gap-2">
        <Button onClick={handleIncrement} className="bg-indigo-400">
          Increment
        </Button>
        <Button onClick={handleDecrement} className="bg-indigo-400">
          Decrement
        </Button>
      </div>
    </div>
  );
}
