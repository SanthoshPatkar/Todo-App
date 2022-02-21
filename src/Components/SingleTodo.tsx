import React from 'react'
import "./style.css";
import {Todo} from './model';
import {AiFillEdit,AiFillDelete} from "react-icons/ai";
import {MdDownloadDone} from "react-icons/md";

type Props ={
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;

}

const SingleTodo = ({todo,todos,setTodos}:Props) => {
  return (
      <form className='todo_single'>
        <span className='todo_item'>{todo.todo}</span>
        <div className='icons'>
          <span className='icon'>
            <AiFillEdit />
          </span>
          <span className='icon'>
            <AiFillDelete />
          </span>
          <span className='icon'>
            <MdDownloadDone />
          </span>
        </div>
      </form>
  )
}

export default SingleTodo