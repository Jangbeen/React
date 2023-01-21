import Button from "./Button";
import styles from "./App.module.css"
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((current) => current + 1)

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
