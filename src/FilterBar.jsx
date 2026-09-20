const FILTERS = ['all', 'active', 'completed']

export default function FilterBar({ filter, onFilterChange, onClearCompleted }) {
  return (
    <div>
      {FILTERS.map((name) => (
        <button
          key={name}
          className={name === filter ? 'active' : ''}
          onClick={() => onFilterChange(name)}
        >
          {name}
        </button>
      ))}
      <button onClick={onClearCompleted}>Clear completed</button>
    </div>
  )
}
