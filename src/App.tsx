import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './Components/model';
import TodoList from './Components/TodoList';

const App: React.FC = ()=> {
  const [todo,setTodo]=useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodo, setCompletedTodo] = useState<Todo[]>([]);

  const handleAdd=(e: React.FormEvent)=>{
     e.preventDefault();
     if(todo)
     {
       setTodos([...todos,{id: Date.now(),todo,isDone:false}]);
       setTodo("");
     }
  }
const onDragEnd = (result:DropResult) =>{
  // console.log(result)
  const {source,destination}=result;
  if(!destination)
  return;
  if(destination.droppableId===source.droppableId && destination.index===source.index ) return ;
  let add,
      active=todos,
      complete=completedTodo;
  if(source.droppableId==='TodosList')
  {
    add=active[source.index];
    active.splice(source.index,1)
  }
  else
  {
    add=complete[source.index];
    complete.splice(source.index,1)
  }

if(destination.droppableId==='TodosList')
  {
    active.splice(destination.index,0,add)
  }
  else
  {
    complete.splice(destination.index,0,add)
  }

  setCompletedTodo(complete);
  setTodos(active)
}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
    <span className='heading'>Task</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos} completedTodo={completedTodo} setCompletedTodo={setCompletedTodo}/>
    </div>
    </DragDropContext>
  );
}

export default App;
