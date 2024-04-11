import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LockScreen from './pages/lockscreen'
import Home from './pages/home'
import Contact from './pages/contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LockScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
