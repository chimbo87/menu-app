
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
const Rootlayout = () => {
    return (
        <>
            <div>
                <NavBar/>
            </div>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default Rootlayout;