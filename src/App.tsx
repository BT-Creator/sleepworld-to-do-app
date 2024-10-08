import { useState } from 'react'
import './App.css'
import ToDoListItem from './components/ToDoItem/ToDoItem'

interface ToDo {
  name: string;
  completed: boolean;
}


function App() {
  const [toDos, setToDos] = useState<ToDo[]>([])
  const [newToDoName, setToDoName] = useState<string>("")
  const [completedToDos, setCompletedToDos] = useState<ToDo[]>([])
  const [error, setError] = useState<string>("")

  function addTask(e:React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault()
    if(newToDoName === '') {
      setError('Please enter a task name')
    } else {
      setError("");
      setToDos([...toDos, {name: newToDoName, completed: false}])
    }
  }

  function moveToDoItem(index: number, isCompleted: boolean) {
    // Determine which array to move the item from
    const targetState = isCompleted ? completedToDos : toDos
    const targetToDo = targetState.splice(index, 1)[0]
    targetToDo.completed = !targetToDo.completed

    if(isCompleted) {
      setCompletedToDos([...targetState]) 
      setToDos([...toDos, targetToDo])
    } else {
      setToDos([...targetState])
      setCompletedToDos([...completedToDos, targetToDo])
    }
  }
  return (
    <>
    <header>
      <h1>Sleepworld To-Do list</h1>
      { error && <p className='error'>{error}</p>}
    </header>
    <main>
      <section className='add-task'>
        <h2>Add a task</h2>
        <p>Add a task here to add it to the list:</p>
        <input type="text" placeholder="Task name" onChange={(e) => setToDoName(e.target.value)} />
        <input type="submit" value="Add task" onClick={(e) => addTask(e)}/>
      </section>
      <section className='to-do'>
        <h2>To-Do list</h2>
        <ul>
          {toDos.map((toDo, index) => <ToDoListItem key={index} title={toDo.name} onToggle={() => moveToDoItem(index, toDo.completed)} />)}
        </ul>
      </section>
      <section className='completed'>
        <h2>Completed tasks</h2>
        <ul>
          {completedToDos.map((toDo, index) => <ToDoListItem key={index} title={toDo.name} checked={toDo.completed} onToggle={() => moveToDoItem(index, toDo.completed) }/>)}
        </ul>
      </section>
    </main>
    </>
  )
}

export default App
