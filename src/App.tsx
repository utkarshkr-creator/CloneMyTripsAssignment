import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './components/Signin'
import { Dashboard } from './components/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
