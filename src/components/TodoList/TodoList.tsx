import React, { useMemo } from "react";
import TodoItem from "../TodoItem";
import { useGlobalState } from "../../Context/CustomHooks";
import { getFiltredTodos } from "./utils";

const TodoList: React.FC = () => {
  const { todos, filterType } = useGlobalState();

  const filtredTodosList = useMemo(
    () => getFiltredTodos(todos, filterType),
    [todos, filterType]
  );

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filtredTodosList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </section>
  );
};

export default React.memo(TodoList);
