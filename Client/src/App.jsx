import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ListUsers, AddUser, EditUser, ViewUser } from './pages'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>

          <Route path='/' element={ <ListUsers/> }/>
          <Route path='/adduser' element={ <AddUser/> }/>
          <Route path='/viewuser/:id' element={ <ViewUser/> }/>
          <Route path='/edituser/:id' element={ <EditUser/> }/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
