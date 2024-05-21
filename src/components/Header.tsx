import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';
import todoLogo from '../assets/todo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logos}>
                <img src={rocketLogo} alt="" />
                <img src={todoLogo} alt="" />
            </div>
        </header>
    )
}