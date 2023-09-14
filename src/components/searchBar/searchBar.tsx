import Plus from "../../assets/plus.svg";
import style from "./SearchBar.module.css";
import { FormEvent, useState } from "react";

interface SearchBarProps {
  addTodo: (newTodo: { value: string; completed: boolean; id: number }) => void;
}

export function SearchBar({ addTodo }: SearchBarProps) {
  const [taskValue, setTaskValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      value: taskValue,
      completed: false,
      id: 0,
    });
    setTaskValue(""); // Clear the input field after submission
  };

  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={taskValue}
          onChange={handleChange}
        />
        <button type="submit">
          Criar <img src={Plus} alt="" />
        </button>
      </form>
    </div>
  );
}
