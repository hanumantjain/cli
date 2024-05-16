import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LockScreen from './pages/lockscreen'
import Home from './pages/home'

function App() {
  return (
    <div className="App h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LockScreen />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
