import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ListUsers, AddUser } from './pages'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>

          <Route path='/' element={ <ListUsers/> }/>
          <Route path='/adduser' element={ <AddUser/> }/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
