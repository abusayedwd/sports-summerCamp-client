 
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
        const location = useLocation() 
        const noHeaderFooter =  location.pathname.includes('login') || location.pathname.includes('signup');
        return (
                <div>
                        { noHeaderFooter ||<Navbar></Navbar>}
                        <Outlet></Outlet>
                        { noHeaderFooter ||<Footer></Footer>}
                </div>
        );
};

export default Main;