"use client";
import Image from "next/image";
import styles from "./page.module.css";
import moment from 'moment';
import Link from 'next/link';
import TasksContainer from '../components/tasks/TasksContainer';
import MultiSelectDropdown from "../components/MultiselectDropdown/MultiselectDropdown";
import DateRange from "../components/DateRange/DateRange";

moment.locale("de")

//beispieldaten für Dropdowns
const kategorieOptionen1 = [
  { value: "Kat1A", label: "Kategorie 1A" },
  { value: "Kat1B", label: "Kategorie 1B" }
];

const kategorieOptionen2 = [
  { value: "Kat2A", label: "tag1" },
  { value: "Kat2B", label: "tag2" }
];

const kategorieOptionen3 = [
  { value: "Kat3A", label: "Kategorie 3A" },
  { value: "Kat3B", label: "Kategorie 3B" }
];


export default function Home() {
  const query = "http://localhost:3001/api/entry/list";

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Alle Aufgaben</h1>
        <Link href="/create"><button><Image src="card.svg" alt="" width={20} height={20} /><span>neue Aufgabe erstellen</span></button></Link>
      </div>
      <div className={styles.menuBar}>
        <div className={styles.dropdown}>
          <MultiSelectDropdown options={kategorieOptionen1} placeholder="Kategorien"/>
          <MultiSelectDropdown options={kategorieOptionen2} placeholder="Tags"/>
        </div>
        <div className={styles.dateRangeWrapper}>
          <span className={styles.dateRangeLabel}>Select date range</span>
          <div className={styles.dateRangePicker}>
            <DateRange/>
          </div>
        </div>
      </div>
      <TasksContainer query={query}/>
    </div>
  );
}