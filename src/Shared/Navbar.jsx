 
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
        const { logOut, user } = useContext(AuthContext)

        const handleLogout = () => {
                logOut()
                  .then(() => { })
                  .catch(error => console.log(error))
              }

        const nabitem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/instructor'>Instructors</Link> </li>
    <li><Link to='/classes'>Classes</Link> </li>
    
   {user ?  
   <li><Link to='/dashboard/home'>DashBoard</Link> </li>
  : ''
  }

   
      
  </>

  return (
    <>
      <div className="navbar fixed z-20 bg-opacity-20 bg-black text-white max-w-screen-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {nabitem}
            </ul>
          </div>
          <Link to = '/'>
          <img className='md:h-12 h-10 rounded-full' src={logo} alt="" />
          </Link>
          <Link to = '/' className="btn btn-ghost normal-case text-xl">Sports Camp</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nabitem}
          </ul>
        </div>
        <div className="navbar-end">
        {
      user ?
        <>
          <button onClick={handleLogout} className="btn btn-active btn-ghost">Logout</button>
          <img className='h-10 rounded-full' title={user.displayName} src={user?.photoURL} alt="" />
        </> :
        <>

           <Link className='btn' to='/login'>Login</Link>  
        </>
    }
        </div>
      </div>
    </>
  );
};

export default Navbar;