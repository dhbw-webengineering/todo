import styles from './FilterNavBar.module.css';

export default function FilterNavBar() {
    return (
        <div id={styles.root}>
            <p>Filter 1</p>
            <p>Filter 2</p>
            <p>Filter 3</p>
            <p>Filter 4</p>
        </div>
    );
}