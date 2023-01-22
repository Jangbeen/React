import { useState, useEffect } from "react"
import styles from "./App.module.css"

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    // This prevent form tag's submit event which is default event
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos((currentArr) => [toDo, ...currentArr]) // Spread Opreator to expand elements in an array
    setToDo("");  // When submoit button clicked reset input box
    console.log("h")
  }

  const deleteClick = index  => {
    setToDos((currentArr) => currentArr.filter((_,curIndex) => curIndex !== index))
  }
  return (
    <div className={styles.body}>
      <h1 className={styles.head}>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input 
        value={toDo} 
        onChange={onChange} 
        type="text" 
        placeholder='Write your to do' />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) =>
          <li key={index}> {item} <button onClick={() => deleteClick(index)}>Delete</button></li>)
        }
      </ul>
    </div>
  );
}

export default App;
