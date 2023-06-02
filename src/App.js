// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
// import Rootlayout from './components/Rootlayout';
import Dashboard from './components/Dashboard';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Header from './pages/Header';
// import Home from './pages/Home';
// import Newsletter from './pages/Newsletter';
// import Menu from './components/Menu';
// import Transactions from './components/Transactions';
// import Booking from './components/Booking';

function App() {
//   const router = createBrowserRouter(createRoutesFromElements(

//     <Route path='/' element={<Rootlayout />}>
//         <Route index element={<Menu />}></Route>
//         <Route path='/transactions' element={<Transactions />}></Route>
//         <Route path='/booking' element={<Booking />}></Route>
//     </Route>
// ))
  return (
    <div className="App">
       {/* <RouterProvider router={router} /> */}
      {/* <Header />
      <Home />
      <Newsletter />
      <About />
      <Contact /> */}
      <Dashboard/>
    </div>
  );
}

export default App;
