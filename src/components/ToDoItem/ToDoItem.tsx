import { useState } from "react"
import "./ToDoItem.css"

interface ToDoItemProps {
    onToggle: (completed: boolean) => void;
    title: string;
    checked?: boolean;
}

export default function ToDoListItem({onToggle, title, checked=false}: ToDoItemProps) {
    const [progress, setProgress] = useState(checked)
    
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