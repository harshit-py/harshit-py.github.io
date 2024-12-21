import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Index from './pages/Index'

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Navbar />
        <div className="pt-16"> {/* Add padding to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App