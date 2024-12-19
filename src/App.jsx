import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold text-center py-8">Welcome to React</h1>} />
      </Routes>
    </div>
  )
}

export default App
