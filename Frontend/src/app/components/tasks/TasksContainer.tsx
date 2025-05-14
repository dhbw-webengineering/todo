'use client';

import styles from "./TasksContainer.module.css";

import { useState, useEffect } from 'react';
import TaskItem from "./TaskItem";
import Task from "@/Task";


export default function TasksContainer({query}: {query: string}) {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const response = await fetch(query);
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

    // Sort tasks: offene tasks zuerst, dabei frühestes fälligkeitsdatum zuerst
    const sortedTasks = [...tasks].sort((a, b) => {
      if (a.done !== b.done) {
        return a.done ? 1 : -1;
      }
      return a.dueDate - b.dueDate;
    });

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

    return (
        <div className={styles.taskList}>
            {sortedTasks.map((task: Task) => (
                      <TaskItem key={task.id} task={task} onStatusChange={changeStatus} />
                    ))}
        </div>
    );
}