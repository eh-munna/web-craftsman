import {
  decrement,
  increment,
} from '../../redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

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
    <div>
      <div>
        <span>{value}</span>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}
