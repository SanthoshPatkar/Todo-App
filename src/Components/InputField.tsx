import React,{ useRef }  from 'react'
import './style.css';
interface props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}
const InputField = ({todo,setTodo,handleAdd}:props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) =>{ handleAdd(e); inputRef.current?.blur() }}>
        <input type="input" 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder='Enter a Task' className='input_box' />
        <button className='input_submit' type='submit'>Go</button>

    </form>
  )
}



export default InputField