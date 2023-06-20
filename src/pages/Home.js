import Front from "./Front";
import Newsletter from './Newsletter';
import About from './About';
import Contact from './Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  

    const showToastMessage = () => {
      toast.success('Success Notification !', {
          position: toast.POSITION.TOP_RIGHT
      });
  };
  return (
    <div>
        <div>
            <ToastContainer />
        </div>
      <Front />
      <Newsletter />
      <About />
      <Contact />
    </div>
  )
}
export default Home;