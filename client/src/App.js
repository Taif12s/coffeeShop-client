import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {BrowserRouter, Router, Routes, Link, Route} from 'react-router-dom';
import { store } from './store';
import Home1 from './Component/Home1';
import Home2 from './Component/Home2';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import AboutUs from './Component/AboutUs';
import Menue from './Component/Menu';
import Profile from './Component/Profile';
import Coffee from './Component/Coffee';
import Sweet from './Component/Sweet';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home1/>}></Route>
          <Route path='/home' element={<Home2/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/menu' element={<Menue/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/coffee' element={<Coffee/>}></Route>
          <Route path='/sweet' element={<Sweet/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
