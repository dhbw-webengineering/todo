import styles from "./TaskItem.module.css";
import moment from 'moment';

import Image from "next/image";
import Task from "@/Task";


moment.locale("de")

interface TaskItemProps {
  task: Task;
  onStatusChange: (id: number, done: boolean) => void;
}


export default function TaskItem(props: TaskItemProps) {

    const {task, onStatusChange} = props;

    return (
        <div className={`${styles.taskItem} ${task.done ? styles.done : ''}`}>
        <div className={styles.taskStatus}>
            <label>
            <input
                type="checkbox"
                name="done"
                checked={task.done}
                onChange={() => onStatusChange(task.id, !task.done)}
            />
            </label>
        </div>
        <div className={styles.taskContent}>
    
            <p className={styles.taskDueDate}>fällig {moment().to(moment(task.dueDate * 1000))}  • {moment(task.dueDate * 1000).format("dd, DD.MM.YY")}</p>
            <h2 className={styles.taskTitle}>{task.title}</h2>
            <p className={styles.taskDescription}>{task.description}</p>
            {task.tags.length > 0 && (
            <div className={styles.taskTags}>
                {task.tags.map((tag: string) => (
                <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>
            )}
        </div>
        <div className={styles.taskActions}>
            <div className={styles.taskActionBtn}>
            <Image src="edit.svg" height={20} width={20} alt="" />
            </div>
            <div className={styles.taskActionBtn}>
            <Image src="trashcan.svg" height={20} width={20} alt="" />
            </div>
    
        </div>
        </div>
    );
}