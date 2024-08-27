// import { useState } from 'react';


// function App() {
//   const [text, setText] = useState("")
//   const [todo, setTodo] = useState([])


// function addTodo(event){
//   event.preventDefault();
 
//   setTodo([...todo , text]) 
  
//   setText("")

// }

//   return (
//     <>
//     <h1> "TODO-APP"</h1>
//     <form  onSubmit={addTodo} >
//       <input id='input' type="text" placeholder='Enter Text'
//       onChange={(e) => setText (e.target.value)} value={text} />
//       <button id='button' type='submit'>ADD TODO</button>
//     </form>
//     <ol id='ul'>
//       {todo.map((item ,index)=>{
//           return <li key={index} >{item} </li>
//         })
//       }
//     </ol>
    
    







//     </>
//   )
// }

// export default App





import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState([]);
  const todoVal = useRef();

  const addTodo = (event) => {
    event.preventDefault()
    todo.push(todoVal.current.value);
    setTodo([...todo]);
    console.log(todo)


    todoVal.current.value = ""
  }

  const deleteTodo = (index)=>{
    console.log("todo deleted" , index)
    todo.splice(index , 1);
    setTodo([...todo]);
  }
  const editTodo = (index)=>{
    console.log("todo edited" , index);
    const editedVal = prompt("enter edited value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);
  }
  return (
    <>
      <h1>"TODO-APP"</h1>
      <form onSubmit={addTodo}>
        <input id='input' type="text" placeholder='Enter Todo value' ref={todoVal} />
        <button id='button' type='submit'>ADD TODO</button>
      </form>
      <ol id='ol'>
        {todo.length > 0 ? todo.map((item, index) => {
          return <div key={index}>
            <li id='li'>{item}</li>
            <button id='button' onClick={()=> deleteTodo(index)}>Delete</button>
            <button id='button' onClick={()=> editTodo(index)}>Edit</button>
          </div>
        }) : <p>No TODO Found!</p>}
      </ol>

    </>
  )
}

export default App