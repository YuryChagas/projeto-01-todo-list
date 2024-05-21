import styles from './Task.module.css';
import {Trash} from '@phosphor-icons/react';
import {TaskType, } from './Tasks';

interface Props {
  propsTask: TaskType;
  updateIsChecked: ({id, value}: {id: number, value: boolean}) => void;
  deleteTask : (id:number) => void;
}

export function Task({propsTask, updateIsChecked,deleteTask}: Props) {
  function verifyStatus (){
    updateIsChecked({id: propsTask.id, value: !propsTask.isChecked});
  }

  function handleDeleteTask (){
    deleteTask(propsTask.id)
  }

  return (
    <div className={styles.listTasks}>  
          <div className={styles.task}>
            <input type="checkbox" name="" id="" onClick={verifyStatus}/>
            <p>{propsTask.title}</p>
            <a href="#" onClick={handleDeleteTask}>
              <Trash/>
            </a>
          </div>
        </div>
  )
}