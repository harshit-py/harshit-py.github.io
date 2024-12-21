import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Index from './pages/Index'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="relative"> {/* Added relative positioning container */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/notebooks" element={<Projects />} /> {/* Temporarily pointing to Projects until Notebooks page is created */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;