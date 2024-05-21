import plus from '../assets/plus.svg';
import styles from './Tasks.module.css';
import { Task } from './Task';
import { ChangeEvent, FormEvent, useState } from 'react';
import { EmptyList } from './EmptyList';

export interface TaskType {
  id: number;
  title: string;
  isChecked: boolean;
}

export function Tasks () {

  const [tasks, setTasks] = useState<TaskType[]>([])// o TaskType está tipando o estado
  const [newTaskText, setNewTaskText] = useState('');

  const noTask = tasks.length === 0

  const counterTaskChecked = tasks.reduce((valuePrev, valueCurrent) => {
    if(valueCurrent.isChecked){
      return valuePrev + 1
    }
    return valuePrev
  },0)

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    if(!newTaskText){
      return
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTaskText,
      isChecked: false
    }

    setTasks([...tasks, newTask])
    setNewTaskText('');//limpa o input
  }

  function handleNewtaskTextChange (event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);//busca o texto do input
  }

  function updateIsChecked ({id, value }: { id: Number; value: boolean}){
    const taskUpdate =  tasks.map((task) => {
      if(task.id === id){
        return {...task, isChecked: value}
      }
      return {...task}
    })
    setTasks(taskUpdate)
  }

  function deleteTask (id: number){
     const tasksWithoutDeleteOne =  tasks.filter(task => task.id !== id)
     return setTasks(tasksWithoutDeleteOne)
  }

  return (
    <>
      <form  onSubmit={handleAddTask}>
        <div className={styles.newTask}>
              <input type="text" placeholder='Adicione uma nova tarefa'
                onChange={handleNewtaskTextChange}
                value={newTaskText}
                required
              />
              <button type='submit'>
                Criar 
                <img src={plus} alt="" />
              </button>
            </div>
      </form>

      <div className={styles.Tasks}> 

        <div className={styles.inforTasks}>
          <strong>Tarefas criadas <p>{tasks.length}</p></strong>
          <strong> Concluídas
            <p>{tasks.length === 0 
              ? tasks.length
              : `${counterTaskChecked}de${tasks.length}`}
            </p>
          </strong>
        </div>

        <div className={styles.list}>

          {noTask && (
            <EmptyList/>
          )}

          {tasks.map(task => {
            return (
              <Task
              key={task.id}
              propsTask={task}
              updateIsChecked={updateIsChecked}
              deleteTask={deleteTask}
              />
            )
          })}

        </div>
      </div>

    </>
  )
}

