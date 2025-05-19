'use client';

import styles from "./TasksContainer.module.css";

import { useState, useEffect, Dispatch, SetStateAction, useImperativeHandle, forwardRef, Ref } from 'react';
import TaskItem from "./TaskItem";

import Task from "@/Task";
import { ApiRoute } from "@/ApiRoute";

export type TasksContainerRef = {
  updateTask: (task: Task) => void;
};

interface TasksContainerProps {
  apiRoute: ApiRoute;
  day?: number;
  range?: [number, number];
  setHasData?: Dispatch<SetStateAction<boolean>>;
  showTasksDone: boolean;
  sendTaskUpdate?: (task: Task) => void;
}

function TasksContainer(props: TasksContainerProps, ref: Ref<TasksContainerRef>) {
  const {apiRoute, day, range, setHasData, showTasksDone, sendTaskUpdate} = props;
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    updateTask
  }));

  const loadTasks = async (start?: number, end?: number) => {
    useEffect(() => {
      async function fetchTasks() {
        try {
          const query = (apiRoute == ApiRoute.ENTRY_LIST_NEXT) ? `${apiRoute}?start=${start}&end=${end}` : apiRoute;
          const response = await fetch(query);
          if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
          }
          const data: Task[] = await response.json();
          updateTasks(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
          setLoading(false);
        }
      }
      fetchTasks();
    }, []);
  }

  if ((day === undefined) && (range === undefined)) {
    loadTasks();
  } else {
    const start = (day !== undefined) ? day : range?.[0];
    const end = (day !== undefined) ? day : range?.[1];
    loadTasks(start, end);
  }

  const updateTasks = (newTasks: SetStateAction<Task[]>) => {
    setTasks(newTasks);
    if (setHasData !== undefined) {
      setHasData(newTasks.length > 0);
    }
  }

  const updateTask = (task: Task) => {
    let count = tasks.filter(cTask => !cTask.done).length;
    if (tasks.filter(fTask => fTask.id === task.id).length !== 1) {
      return;
    }
    count += (task.done ? -1 : 1);

    updateTasks(prevTasks => prevTasks.map(oldTask =>
      oldTask.id === task.id ? task : oldTask
    ));

    if (setHasData !== undefined && count === 0) {
      setHasData(false);
    }
  }

  const filteredTasks = showTasksDone ? tasks : [...tasks].filter(task => !task.done);

  // Sort tasks: offene tasks zuerst, dabei frühestes fälligkeitsdatum zuerst
  const sortedTasks = [...filteredTasks].sort((a, b) => {
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

      const task = {...tasks.filter(task => task.id === id)[0], done};

      if (sendTaskUpdate !== undefined) {
        sendTaskUpdate(task);
      } else {
        updateTask(task);
      }
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
};

export default forwardRef(TasksContainer);