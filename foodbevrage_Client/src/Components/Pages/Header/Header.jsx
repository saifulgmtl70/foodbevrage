import {  useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import Swal from 'sweetalert2'
import { FaUserCircle,  } from 'react-icons/fa';
import { AuthContext } from "../../Provider/AuthProvider";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user, logOut} = useContext(AuthContext);

    const navLinks = (
        <>
            <li><NavLink to="/" className="bg-transparent hover:bg-transparent text-lg">Home</NavLink></li>
            <li><NavLink to="/addproduct" className="hover:bg-transparent text-lg">Add Product</NavLink></li>
            <li><NavLink to="/cart" className="hover:bg-transparent text-lg">My Cart</NavLink></li>

        </>
    );


    const handleLogOut = () =>{
        logOut()
        .then(() =>{

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User has successfully logged out',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(() =>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong',
               
              })
        })
    }
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className="navbar top-0 sticky px-7 lg:px-14 bg-slate-100 shadow-xl z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="cursor-pointer lg:hidden"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? ( // Conditional rendering for menu icon or close icon
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                            </svg>
                        )}
                    </label>
                    <ul className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-base-100 rounded-md gap-5 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/" className="normal-case text-xl ms-7">
                    <img src="https://i.ibb.co/b2KW6Xm/flavorfiesta-low-resolution-logo-color-on-transparent-background.png" className="w-48 h-16 " alt="" />
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5 px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end lg:flex">
                
                            {
                    user ?
               
                    
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">

                                <div className="rounded-full">
                                    {/* <img src={user.photo} alt="" /> */}
                                    <FaUserCircle className="text-4xl"></FaUserCircle>


                                </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-auto p-5  space-y-5">
                            <h3 className="text-xl font-medium text-center mt-3">{user.email}</h3>

                            <button onClick={handleLogOut} className="btn bg-rose-500 hover:bg-rose-600 px-12 py-1 rounded-md text-white ">Log Out</button> 
                        </ul>
                    </div>

                    :
        
                    <Link to="/login">
                        <button className="btn bg-pink-600 px-6 ms-2 hover:bg-rose-600 rounded-md text-white">Login</button>
                    </Link>

                }
           
                
            </div>

           
        </div>
    );
};

export default Header;