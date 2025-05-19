import type { Metadata } from "next";
import React from "react";

import styles from "./page.module.css";

import OverviewTasks from "./components/tasks/OverviewTasks";


export const metadata: Metadata = {
  title: "Übersicht - Todo App"
};

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Übersicht</h1>
      </div>

      <OverviewTasks/>

    </div>
  );
}