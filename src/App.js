import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cine from './components/Cine';
import Peliculas from './components/Peliculas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Cine/>}/>
        <Route path='/Peliculas' element={<Peliculas/>}/>
      </Routes>
    </Router>
  );
}
export default App;