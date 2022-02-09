import { useState } from 'react';
import Reservation from './components/Reservation';
import Confirmation from './components/Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Route, Routes} from 'react-router-dom'

function App() {
  const [order, setOrder] = useState({
    date: '',
    time: '',
    people: '',
    table: '',
    fName: '',
    lName: '',
    phone: '',
    email: ''
})

  return (
    <div>
      <Routes>
        <Route path='/' element={<Reservation order={order} setOrder={setOrder}/> }></Route>
        <Route path='/confirmation' element={<Confirmation orderDetails={order}/>} />
      </Routes>

    </div>
  );
}

export default App;
