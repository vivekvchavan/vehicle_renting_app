
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';
import { Booking } from './pages/Booking';
import './App.css';
import 'antd/dist/antd';
import { Error404 } from './pages/Error404';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/login' exact element={<Login/> }/>
          <Route path='/signup' exact element={<CreateAccount/> }/>
          <Route path='/booking' exact element={<Booking/> }/>
          <Route path='*' exact element={<Error404/> }/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

export function ProtectedRoute(props){

  if(localStorage.getItem('user')){
    return <Route {...props}/>
  } else{
    //localStorage.removeItem('user');
    return Navigate('/login');
  }
}


