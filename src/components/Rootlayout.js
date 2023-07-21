
import { Outlet } from "react-router-dom";
import Header from '../pages/Header'
const Rootlayout = () => {
    return (
        <>
            <div>
                
                <Header/>
            </div>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default Rootlayout;