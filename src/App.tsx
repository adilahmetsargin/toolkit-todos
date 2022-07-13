import { useState } from "react";
import { add } from "./features/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";


function App() {
  return (
    <div>App</div>
  )

  // const dispatch = useAppDispatch()
  // const todos = useAppSelector(state => state.todos)
  // const [title, setTitle] = useState('')



  // const onSave = () => {
  //   dispatch(add(title))
  //   setTitle('')
  // }

  // return (
  //   <div className="App">
  //     <input type="text" value={title} name="title" onChange={(e) => setTitle(e.currentTarget.value)} />
  //     <button onClick={onSave}>Save</button>
  //     <ul>
  //       {todos.map((todo => <li key={todo.id}>{todo.title}</li>))}

  //     </ul>
  //   </div>
  // );
}

export default App;
