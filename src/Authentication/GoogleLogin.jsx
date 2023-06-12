import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
 

const GoogleLogin = () => {

        const {googleSignIn} = useContext(AuthContext)
          
        const location = useLocation()
      const navigate = useNavigate();

      const from = location.state?.from?.pathname || '/';

        const Logingoogle = () => {
                googleSignIn()
                .then( result => {
                        const loggedUsr = result.user;
                        console.log(loggedUsr)
                          navigate(from, {replace: true})
                          })  
                .catch(error => console.log(error))
        }

        return (
                <div>
                <div className="divider">OR</div>
                <div className='text-center'>
                   
                 <button onClick={Logingoogle}  className="btn btn-circle btn-outline hover:bg-gray-400">
                 <FaGoogle className='h-8'></FaGoogle>
               </button>
                 
                </div>
      </div>
        );
};

export default GoogleLogin;