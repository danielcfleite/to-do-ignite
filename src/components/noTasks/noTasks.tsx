import Clipboard from "../../assets/Clipboard.svg";
import style from "./NoTasks.module.css";

export function NoTasks() {
  return (
    <div className={style.contentWrapper}>
      <img src={Clipboard} alt="Clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
