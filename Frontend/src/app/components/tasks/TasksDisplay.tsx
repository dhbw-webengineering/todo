'use client'

import { useState, createContext, Context, Ref } from 'react';

import styles from "@/app/page.module.css";

import TasksContainer, { TasksContainerRef } from "./TasksContainer";

import { ApiRoute } from "@/ApiRoute";
import Task from '@/Task';


interface TasksGroupProps {
  header: string,
  day?: number,
  range?: [number, number],
  sendTaskUpdate: (task: Task) => void,
  tasksUpdateRef: Ref<TasksContainerRef>;
}

export default function TasksDisplay(props: TasksGroupProps) {
  const { header, day, range, sendTaskUpdate, tasksUpdateRef } = props;
  const [hasData, setHasData] = useState(true);

  return (
    <>
    { hasData &&
      <>
      <h3 className={styles.timeDisplay}>{header}</h3>
      <TasksContainer apiRoute={ApiRoute.ENTRY_LIST_NEXT} day={day} range={range} setHasData={setHasData} showTasksDone={false} sendTaskUpdate={sendTaskUpdate} ref={tasksUpdateRef}/>
      </>
    }
    </>
  );
}