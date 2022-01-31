import './App.css';
import Contactlist from './components/Contactlist';
import {Routes,Route, Link} from 'react-router-dom'
import Add from './components/Add';
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { toggleFalse } from './js/actions/edit';
function App() {
 const  dispatch=useDispatch()
  return (
    <div className="App">
      <h1>mern app</h1>
      <Link to="/add"> <Button variant="primary" onClick={()=>dispatch(toggleFalse())}>add</Button></Link>
      <Link to="/"> <Button variant="primary" >contact list</Button></Link>
      <Routes>
        <Route exact path='/' element={<Contactlist/>}/>
        <Route exact path='/add' element={<Add/>}/>
        <Route exact path='/edit/:id' element={<Add/>}/>

      </Routes>
    </div>
  );
}

export default App;
