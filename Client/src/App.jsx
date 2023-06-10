import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ListUsers } from './pages'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>

          <Route path='/' element={ <ListUsers/> }/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
