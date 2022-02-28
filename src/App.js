import 'flowbite'
import './assets/styles/app.scss'
import LandingPage from './pages/Landing'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
      </Routes>
    </div>
  )
}

export default App
