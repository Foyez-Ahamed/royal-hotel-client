import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className='pt-24 min-h-[calc(100vh-68px)]'>
            <Outlet></Outlet>
            </div>

           <div className="mt-10">
           <Footer></Footer>
           </div>
        
            
        </div>
    );
};

export default MainLayout;