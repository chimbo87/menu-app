
// import Dashboard from './components/Dashboard';

import Home from './pages/Home';
import Rootlayout from './components/Rootlayout';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import OurBlog from './pages/OurBlog';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Bookings from './components/Bookings';
import Menu from './components/Menu';
import Admin from './pages/Admin';
import MenuForm from './components/MenuForm';
import BlogForm from './components/BlogForm';
import Login from './pages/Login';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
     
      <Route path='/blog' element={<OurBlog />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route index element={<Menu />} />
        <Route path="menu" element={<Menu />} />
        <Route path="booking" element={<Bookings />} />
        <Route path="transaction" element={<Transactions />} />
      </Route>
      
        <Route path='/admin' element={<Admin/>}>
           <Route index element={<MenuForm />} />
           <Route path="menuform" element={<MenuForm/>} />
           <Route path="blogform" element={<BlogForm/>} />
        </Route>
        <Route path="/login" element={<Login />}>
            <Route index element={<LoginForm/>} />
            <Route path="loginform" element={<LoginForm/>} />
            <Route path="registerform" element={<RegisterForm/>} />
        </Route>
      
    </Route>

  ))
  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
