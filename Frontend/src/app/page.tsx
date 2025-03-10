import type { Metadata } from "next";
import styles from "./page.module.css";

import TasksContainer from "./components/tasks/TasksContainer";


export const metadata: Metadata = {
  title: "Übersicht - Todo App"
};

export default function Home() {

  const query = "http://localhost:3001/api/entry/list";

  return (
    <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Übersicht</h1>
    </div>

    <h3 className={styles.timeDisplay}>Heute</h3>
    <TasksContainer query={query}/>
    
    <h3 className={styles.timeDisplay}>Morgen</h3>
    <TasksContainer query={query}/>
    
    <h3 className={styles.timeDisplay}>Nächste 3 Tage</h3>
    <TasksContainer query={query}/>
  </div>
  );
  }