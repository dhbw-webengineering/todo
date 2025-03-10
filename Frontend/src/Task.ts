export default interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: number;
  tags: string[];
  done: boolean;
}