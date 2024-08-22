import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";


export const Navbar = () => {
    const {user,logout} = useContext(AuthContext);
    const navigate= useNavigate();
   // console.log(user?.name);
   // console.log(logout);
    const onLogout=()=>{
          console.log('logout');
          logout();
          console.log(logout)
          navigate('/login',{
            replace:true
          });


    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <NavLink
                className={({isActivate}) => `nav-link ${isActivate ? 'active':''}`} 
                to="/"
            >
                Asociaciones
                </NavLink>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                       className={({isActivate}) => `nav-link ${isActivate ? 'active':''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                       className={({isActivate}) => `nav-link ${isActivate ? 'active':''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                       className={({isActivate}) => `nav-link ${isActivate ? 'active':''}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>{user?.name}</span>
                    <button
                    className='nav-item nav-link btn'
                    onClick={onLogout}
                    >
                            Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}