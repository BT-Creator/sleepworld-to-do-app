import { useState } from 'react'
import './App.css'
import ToDoListItem from './components/ToDoItem/ToDoItem'

/**
 * TODO: Move task insertion to own component
 */
interface ToDo {
  name: string
  completed: boolean
}


function App() {
  const [toDos, setToDos] = useState<ToDo[]>([])
  const [newTaskName, setNewTaskName] = useState<string>("")

  function addTask(e:React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault()
    setToDos([...toDos, {name: newTaskName, completed: false}])
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
        <input type="text" placeholder="Task name" onChange={(e) => setNewTaskName(e.target.value)} />
        <input type="submit" value="Add task" onClick={(e) => addTask(e)}/>
      </section>
      <section>
        <h2>To-Do list</h2>
        <ul>
          {toDos.map((toDo, index) => <ToDoListItem key={index} title={toDo.name} onToggle={(completed) => console.log(completed)} />)}
        </ul>
      </section>
      <section>
        <h2>Completed tasks</h2>
        <ul>
          <li>Get bread</li>
        </ul>
      </section>
    </main>
    </>
  )
}

export default App
