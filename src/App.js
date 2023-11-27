
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';
import { Booking } from './pages/Booking';
import './App.css';
import 'antd/dist/antd';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/login' exact element={<Login/> }/>
          <Route path='/signup' exact element={<CreateAccount/> }/>
          <Route path='/booking' exact element={<Booking/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
