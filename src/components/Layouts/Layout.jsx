import { Outlet } from 'react-router-dom';
import Navbar from './Landing/master/Navbar';
import Footer from './Landing/master/Footer';
function Layout() {
    return (
        <>
            <Navbar/>
            <div id="main">
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
