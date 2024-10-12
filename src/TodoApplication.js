import { useState } from "react";
import FilterButton from "./FilterButton";
import Task from "./Task";

function TodoApplication({ initialList }) {
  const [todos, setTodos] = useState(initialList);
  const [hideDone, setHideDone] = useState(false);
  const filteredTodos = hideDone ? todos.filter(({ done }) => !done) : todos;

  function markDone(list, index) {
    return list.map((item, i) =>
      i === index ? { ...item, done: true } : item
    );
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <FilterButton current={hideDone} flag={false} setFilter={setHideDone}>
          Show all
        </FilterButton>
        <FilterButton current={hideDone} flag={true} setFilter={setHideDone}>
          Hide done
        </FilterButton>
      </div>

      <ul style={{listStyle: "none"}}>
        {filteredTodos.map((todo) => (
          <Task
            key={todo.index}
            task={todo.task}
            done={todo.done}
            markDone={() => setTodos((value) => markDone(value, todo.index))}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoApplication;
