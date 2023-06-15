import TodoItems from "./TodoItem";

export default function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ui className="list">
      {todos.length === 0 && "NO Todo"}
      {todos.map((todo) => {
        return (
            <TodoItems {...todo} key = {todo.id} toggleTodo= { toggleTodo} deleteTodo={deleteTodo}/>
        )
      })}
    </ui>
  );
}
