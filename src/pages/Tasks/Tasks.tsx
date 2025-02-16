import {
  selectFilteredTasks,
  selectTasks,
} from '@/redux/features/task/taskSlice';
import { useAppSelector } from '@/redux/hook';
import AddTaskModal from './AddTaskModal';
import TaskCard from './TaskCard';

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);

  const filteredTasks = useAppSelector(selectFilteredTasks);
  console.log(filteredTasks);

  return (
    <>
      <div>
        <h1 className="text-2xl">All The Tasks</h1>

        <div className="flex justify-end">
          <AddTaskModal />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}
