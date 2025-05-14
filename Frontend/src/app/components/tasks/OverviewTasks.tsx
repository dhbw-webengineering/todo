'use client'

import Task from "@/Task";
import TasksDisplay from "./TasksDisplay";
import { RefObject, useRef } from "react";
import { TasksContainerRef } from "./TasksContainer";


export default function OverviewTasks() {

    const tasksRefs: RefObject<TasksContainerRef | null>[] = [];

    for (let i = 0; i < 9; i++) {
        tasksRefs.push(useRef<TasksContainerRef>(null))
    }

    function updateTask(task: Task) {
        tasksRefs.forEach(taskRef => taskRef.current?.updateTask(task));
    }

    return (
        <>
        <TasksDisplay header="Heute" day={0} sendTaskUpdate={updateTask} tasksUpdateRef={tasksRefs[0]} />

        <TasksDisplay header="Morgen" day={1} sendTaskUpdate={updateTask} tasksUpdateRef={tasksRefs[1]} />

        <TasksDisplay header="Nächste 3 Tage" range={[0, 2]} sendTaskUpdate={updateTask} tasksUpdateRef={tasksRefs[2]} />

        <TasksDisplay header="Nächste 7 Tage" range={[0, 6]} sendTaskUpdate={updateTask} tasksUpdateRef={tasksRefs[3]} />

        <TasksDisplay header="In 1 Woche" range={[7, 13]} sendTaskUpdate={updateTask} tasksUpdateRef={tasksRefs[4]} />

        <TasksDisplay header="In 2 Wochen" range={[14, 20]} sendTaskUpdate={updateTask} tasksUpdateRef={tasksRefs[5]} />

        <TasksDisplay header="In 3 Wochen" range={[21, 27]} sendTaskUpdate={updateTask} tasksUpdateRef={tasksRefs[6]} />

        <TasksDisplay header="In 4 Wochen" range={[28, 34]} sendTaskUpdate={updateTask} tasksUpdateRef={tasksRefs[7]} />

        <TasksDisplay header="Nächste 30 Tage" range={[0, 29]} sendTaskUpdate={updateTask} tasksUpdateRef={tasksRefs[8]} />
        </>
    );
}