
// import Dashboard from './components/Dashboard';

import Home from './pages/Home';
import Rootlayout from './components/Rootlayout';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import OurBlog from './pages/OurBlog';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Bookings from './components/Bookings';
import Menu from './components/Menu';


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
    </Route>

  ))
  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
