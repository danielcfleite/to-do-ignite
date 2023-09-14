import style from "./Task.module.css";
import Trash from "../../assets/Trash.svg";
import NotFilled from "../../assets/notFilled.svg";
import Checked from "../../assets/checked.svg";
import { useState } from "react";

interface TaskProps {
  value: string;
  completed: boolean;
  onDelete: (taskValue: string, isCompleted: boolean) => void;
  id: number;
  onCompleted: (isCompleted: boolean) => void;
}

export function Task({ value, completed, onDelete, onCompleted }: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(completed);

  function changeStatus() {
    setIsCompleted((current) => !current);
  }

  return (
    <div className={isCompleted ? style.completed : style.task}>
      <img
        src={isCompleted ? Checked : NotFilled}
        onClick={() => {
          onCompleted(!isCompleted); // Invert the value
          changeStatus();
        }}
      />
      <p>{value}</p>
      <img
        src={Trash}
        alt="Delete"
        onClick={() => onDelete(value, isCompleted)}
      />
    </div>
  );
}
