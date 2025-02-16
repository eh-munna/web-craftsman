import { ITask } from '@/types/types';

interface TaskProp {
  task: ITask;
}

export default function TaskCard({ task }: TaskProp) {
  const { title, description, dueDate, priority, isCompleted } = task;

  return (
    <div
      className={`border p-4 my-4 rounded-lg shadow-lg ${
        isCompleted ? 'bg-green-100' : 'bg-white'
      }`}
    >
      <h3
        className={`text-xl font-semibold ${
          priority === 'high'
            ? 'text-red-500'
            : priority === 'medium'
            ? 'text-yellow-500'
            : 'text-green-500'
        }`}
      >
        {title}
      </h3>
      <p className="text-gray-700">{description}</p>
      <p className="text-gray-500">
        <strong>Due:</strong> {dueDate}
      </p>
      <p
        className={`font-bold ${
          isCompleted ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {isCompleted ? 'Completed' : 'Not Completed'}
      </p>
      <p
        className={`inline-block text-white px-3 py-1 rounded-full mt-2 ${
          priority === 'high'
            ? 'bg-red-500'
            : priority === 'medium'
            ? 'bg-yellow-500'
            : 'bg-green-500'
        }`}
      >
        {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
      </p>
    </div>
  );
}
