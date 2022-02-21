import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import "./style.css";
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodo: Todo[];
  setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos,completedTodo,setCompletedTodo }: props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided,snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver? 'dragactive': ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Active Task</span>
            {todos.map((todo,index) => (
              <SingleTodo
               index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {
              provided.placeholder
            }
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided,snapshot) => (
          <div className={`todos remove ${snapshot.isDraggingOver? 'dragactive': ''}`}  ref={provided.innerRef}
          {...provided.droppableProps}>
            <span className="todos_heading">Completed Task</span>
            {completedTodo.map((todo,index) => (
              <SingleTodo
               index={index}
                todo={todo}
                todos={completedTodo}
                key={todo.id}
                setTodos={setCompletedTodo}
              />
            ))}
            {provided.placeholder }
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
