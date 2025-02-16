import { RootState } from '@/redux/store';
import { ITask } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  tasks: ITask[];
  filter: 'all' | 'high' | 'medium' | 'low';
}

const initialState: InitialState = {
  tasks: [
    {
        id: 1,
        title: 'Finish React project',
        description: 'Complete the project and submit it.',
        dueDate: '2025-02-20',
        priority: 'high',
        isCompleted: false,
      },
      {
        id: 2,
        title: 'Buy groceries',
        description: 'Pick up fruits and vegetables.',
        dueDate: '2025-02-18',
        priority: 'medium',
        isCompleted: true,
      },
      {
        id: 3,
        title: 'Call mom',
        description: 'Catch up with family.',
        dueDate: '2025-02-16',
        priority: 'low',
        isCompleted: false,
      },
  ],
  filter: 'all',
};
export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.tasks.tasks;
};

export const selectFilteredTasks = (state: RootState) => {
  return state.tasks.filter;
};

export default taskSlice.reducer;
