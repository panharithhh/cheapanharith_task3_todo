import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function UserDetail() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setUser(null)
    setError(null)

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('User not found')
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setUser(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })

    return () => {
      cancelled = true
    }
  }, [id])

  let content
  if (error) {
    content = <p className="error">{error}</p>
  } else if (!user) {
    content = <p>Loading...</p>
  } else {
    content = (
      <>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.company.name}</p>
      </>
    )
  }

  return (
    <>
      <Link to="/users">Back to users</Link>
      {content}
    </>
  )
}
