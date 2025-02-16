export interface ITask {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  isCompleted: boolean;
}
