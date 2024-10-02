import { useState } from "react"
import "./ToDoItem.module.css"

interface ToDoItemProps {
    onToggle: (completed: boolean) => void;
    title: string;
}

export default function ToDoListItem({onToggle, title}: ToDoItemProps) {
    const [progress, setProgress] = useState(false)
    
    return (
        <li>
            <label>
            <input
                type="checkbox"
                checked={progress}
                onChange={() => {
                    setProgress(!progress)
                    onToggle(progress)
                }}
            />
                <span>{title}</span>
            </label>
        </li>
    )
}