import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import TodoApp from './TodoApp.jsx'
import UserDirectory from './UserDirectory.jsx'
import UserDetail from './UserDetail.jsx'
import NotFound from './NotFound.jsx'

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodoApp />} />
          <Route path="/users" element={<UserDirectory />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
