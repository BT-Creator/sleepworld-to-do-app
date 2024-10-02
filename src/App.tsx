import './App.css'
import ToDoListItem from './assets/components/ToDoItem/ToDoItem'

function App() {
  
  return (
    <>
    <header>
      <h1>Sleepworld To-Do list</h1>
    </header>
    <main>
      <section>
        <h2>Add a task</h2>
        <p>Add a task here to add it to the lis:</p>
        <input type="text" placeholder="Task name" />
      </section>
      <section>
        <h2>To-Do list</h2>
        <ul>
          <ToDoListItem title="Buy milk" onToggle={(completed) => console.log(completed)} />
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
