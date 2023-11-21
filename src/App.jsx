import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import HospitalPage from './components/Hospital.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospital" element={<HospitalPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
