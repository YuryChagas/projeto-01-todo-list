import styles from './App.module.css';

import './Global.css';
import { Header } from './components/Header';

import { Tasks } from './components/Tasks';

export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Tasks/>
      </div>
    </>
  )
}

