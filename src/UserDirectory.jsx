import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserDirectory() {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(`https://jsonplaceholder.typicode.com/users?q=${encodeURIComponent(query)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setUsers(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [query])

  let content
  if (loading) {
    content = (
      <ul>
        {[1, 2, 3, 4].map((n) => (
          <li key={n} className="skeleton" />
        ))}
      </ul>
    )
  } else if (error) {
    content = <p className="error">Something went wrong: {error}</p>
  } else if (users.length === 0) {
    content = <p>No users match "{query}".</p>
  } else {
    content = (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <h1>Users</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users"
      />
      {content}
    </>
  )
}
