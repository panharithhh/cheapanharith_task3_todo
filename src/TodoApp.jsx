import { useState } from 'react'
import AddTodo from './AddTodo.jsx'
import TodoList from './TodoList.jsx'
import FilterBar from './FilterBar.jsx'
import WindowWidth from './WindowWidth.jsx'

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const addTodo = (text) =>
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), text, done: false }])

  const toggleTodo = (id) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const clearCompleted = () => setTodos((prev) => prev.filter((t) => !t.done))

  const visibleTodos = todos.filter((t) => {
    if (filter === 'active') return !t.done
    if (filter === 'completed') return t.done
    return true
  })

  return (
    <>
      <h1>Todos</h1>
      <AddTodo onAdd={addTodo} />
      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
      />
      <TodoList todos={visibleTodos} onToggle={toggleTodo} />
      <WindowWidth />
    </>
  )
}
