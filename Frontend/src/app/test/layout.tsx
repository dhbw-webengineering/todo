import FilterNavBar from '../components/FilterNavBar';
import styles from './layout.module.css';

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <FilterNavBar/>
        <div id={styles.childrenRoot}>
            {children}
        </div>
    </>
  );
}