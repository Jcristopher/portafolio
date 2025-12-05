import styles from "./custom-header.module.css";
export default function CustomHeader() {
    return (
        <header className={styles.customHeader}>
            <ul  className={styles.customUl}>
                <li className={styles.customLi}>Homes</li>
                <li className={styles.customLi}>About me</li>
                <li className={styles.customLi}>Projects</li>
                <li className={styles.customLi}>Contact</li>
                <li className={styles.customLi}>Skills</li>
            </ul>
        </header>
    );
}