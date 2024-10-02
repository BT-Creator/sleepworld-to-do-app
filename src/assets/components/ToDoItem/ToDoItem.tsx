import { useState } from "react"
import "./ToDoItem.module.css"

interface ToDoItemProps {
    onToggle: (completed: boolean) => void;
    title: string;
}

export default function ToDoListItem({onToggle, title}: ToDoItemProps) {
    const [completed, setCompleted] = useState(false)
    
    return (
        <li>
            <label>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => {
                    setCompleted(!completed)
                    onToggle(completed)
                }}
            />
                <span>{title}</span>
            </label>
        </li>
    )
}