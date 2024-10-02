import { useState } from 'react'
import './App.css'
import ToDoListItem from './components/ToDoItem/ToDoItem'

/**
 * TODO: Move task insertion to own component
 */
interface ToDo {
  name: string;
  completed: boolean;
}


function App() {
  const [toDos, setToDos] = useState<ToDo[]>([])
  const [newToDoName, setToDoName] = useState<string>("")
  const [completedToDos, setCompletedToDos] = useState<ToDo[]>([])

  function addTask(e:React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault()
    setToDos([...toDos, {name: newToDoName, completed: false}])
  }

  function moveToDoItem(index: number) {
    const currentToDos = toDos
    const completedToDo = currentToDos.splice(index, 1);
    setToDos([...toDos])
    setCompletedToDos([...completedToDos, ...completedToDo])
  }
  return (
    <>
    <header>
      <h1>Sleepworld To-Do list</h1>
    </header>
    <main>
      <section>
        <h2>Add a task</h2>
        <p>Add a task here to add it to the lis:</p>
        <input type="text" placeholder="Task name" onChange={(e) => setToDoName(e.target.value)} />
        <input type="submit" value="Add task" onClick={(e) => addTask(e)}/>
      </section>
      <section>
        <h2>To-Do list</h2>
        <ul>
          {toDos.map((toDo, index) => <ToDoListItem key={index} title={toDo.name} onToggle={() => moveToDoItem(index)} />)}
        </ul>
      </section>
      <section>
        <h2>Completed tasks</h2>
        <ul>
          {completedToDos.map((toDo, index) => <li key={index}>{toDo.name}</li>)}
        </ul>
      </section>
    </main>
    </>
  )
}

export default App
