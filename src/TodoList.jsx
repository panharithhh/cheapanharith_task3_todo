export default function TodoList({ todos, onToggle }) {
  if (todos.length === 0) return <p>No todos.</p>

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label className={todo.done ? 'done' : ''}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
            />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  )
}
