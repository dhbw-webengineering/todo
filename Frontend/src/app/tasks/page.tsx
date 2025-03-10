import { Metadata } from "next";
import Image from "next/image";

import styles from "./page.module.css";
import moment from 'moment';
import Link from 'next/link';
import TasksContainer from '../components/tasks/TasksContainer';

moment.locale("de")

export const metadata: Metadata = {
  title: "Alle Aufgaben - Todo App"
};

export default function Home() {
  const query = "http://localhost:3001/api/entry/list";

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Alle Aufgaben</h1>
        <Link href="/create"><button><Image src="card.svg" alt="" width={20} height={20} /><span>neue Aufgabe erstellen</span></button></Link>
      </div>
      <TasksContainer query={query}/>
    </div>
  );
}