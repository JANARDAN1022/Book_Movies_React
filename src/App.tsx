import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import MovieDetails from './Components/MovieDetails'
import MovieDisplay from './Components/MovieDisplay'
import './App.css'

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<MovieDisplay />} />
      <Route path='/movies/:name/:id' element={<MovieDetails />} />
    </Routes>
  </Router>
    )
}

export default App