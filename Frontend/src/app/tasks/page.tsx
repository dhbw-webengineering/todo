'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

import styles from "./page.module.css";
import moment from 'moment';
moment.locale("de")

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: number;
  tags: string[];
  done: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/entry/list');
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const data: Task[] = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const changeStatus = async (id: number, done: boolean) => {
    try {
      const response = await fetch(`http://localhost:3001/api/entry/${id}/set`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "done": done }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      setTasks(prevTasks => prevTasks.map(task =>
        task.id === id ? { ...task, done } : task
      ));
    } catch (err) {
      console.error('Failed to update task status:', err);
    }
  };

  if (loading) return <div className={styles.loading}>Loading tasks...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  // Sort tasks: offene tasks zuerst, dabei frühestes fälligkeitsdatum zuerst
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.done !== b.done) {
      return a.done ? 1 : -1;
    }
    return a.dueDate - b.dueDate;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Alle Aufgaben</h1>
      <div className={styles.taskList}>
        {sortedTasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} onStatusChange={changeStatus} />
        ))}
      </div>
    </div>
  );
}


interface TaskItemProps {
  task: Task;
  onStatusChange: (id: number, done: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange }) => (
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
