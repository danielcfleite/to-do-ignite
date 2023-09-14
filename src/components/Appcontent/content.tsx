import style from "./Content.module.css";
import { Task } from "../task/task";
import { NoTasks } from "../noTasks/noTasks";
import { useState } from "react";
import { SearchBar } from "../searchBar/searchBar";
export function AppContent() {
  const [taskCount, setTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todos, setTodos] = useState<Task[]>([]);
  interface Task {
    value: string;
    completed: boolean;
    id: number;
  }
  const addTodo = (newTodo: Task) => {
    setTodos([...todos, newTodo]);
    setTaskCount((current) => current + 1); // Increment taskCount
  };
  function handleOnCompleted(isCompleted: boolean) {
    if (isCompleted) {
      setCompletedTaskCount((current) => current + 1);
    } else {
      setCompletedTaskCount((current) => current - 1);
    }
  }
  const handleDeleteTask = (taskValue: string, isCompleted: boolean) => {
    const newTodos = todos.filter((todo) => todo.value !== taskValue);
    setTodos(newTodos);

    if (!isCompleted) {
      setTaskCount((current) => current - 1);
    }

    if (isCompleted) {
      setTaskCount((current) => current - 1);
      setCompletedTaskCount((current) => current - 1);
    }
  };

  return (
    <div className={style.content}>
      <SearchBar addTodo={addTodo} />
      <header>
        <strong>
          Tarefas criadas
          <span className={style.numberDisplay}>{taskCount}</span>
        </strong>
        <strong>
          Concluídas
          <span className={style.numberDisplay}>
            {completedTaskCount}/{taskCount}
          </span>
        </strong>
      </header>
      <section>
        {todos.length === 0 ? (
          <NoTasks />
        ) : (
          todos.map((todo, index) => (
            <Task
              value={todo.value}
              completed={todo.completed}
              onDelete={(value, isCompleted) =>
                handleDeleteTask(todo.value, isCompleted)
              }
              key={index}
              id={index}
              onCompleted={handleOnCompleted}
            />
          ))
        )}
      </section>
    </div>
  );
}
