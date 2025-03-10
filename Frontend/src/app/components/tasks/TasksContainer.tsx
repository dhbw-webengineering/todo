import styles from "./TasksContainer.module.css";

import TaskItem from "./TaskItem";
import Task from "@/Task";


interface TaskContainerProps {
  tasks: Task[];
  changeStatus: (id: number, done: boolean) => void;
}

export default function TasksContainer(props: TaskContainerProps) {

    const {tasks, changeStatus} = props;

    return (
        <div className={styles.taskList}>
            {tasks.map((task: Task) => (
                      <TaskItem key={task.id} task={task} onStatusChange={changeStatus} />
                    ))}
        </div>
    );
}