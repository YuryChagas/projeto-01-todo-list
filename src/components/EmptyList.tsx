import styles from './EmptyList.module.css'
import Clipboard from '../assets/Clipboard.svg'

export function EmptyList (){
  return (
    <div  className={styles.listZero}>
          <img src={Clipboard} alt="" />
          <p>Você ainda não tem tarefas cadastradas
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
  )
}