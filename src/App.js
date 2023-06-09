
// import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import Home from './pages/Home';
import Rootlayout from './components/Rootlayout';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Rootlayout />}>
        <Route index element={<Home/>}></Route>
        <Route path='/menu' element={<Menu />}></Route>
    </Route>
))
  return (
    <div className="App">
    
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
