import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Swal from 'sweetalert2'
import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {  AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {



    
    const {auth, signIn, signInWithGoogle } = useContext(AuthContext);

    const [showPass, setShowPass] = useState(null);


    const location = useLocation();
    const naviGate = useNavigate();


    const emailRef = useRef();

    const handleLogIn = (e) =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
        .then(() =>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User Logged in successfully',
                showConfirmButton: false,
                timer: 1500
              }) 
              
              naviGate(location?.state ? location.state : '/');
              
        })
        .catch(() =>{
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'An error occurred ',
            //     footer: '<a href="">Why do I have this issue?</a>'
            // })
            
        })

        // form.reset();
    }


    const handleForgetPass = async () => {
        try {
          const email = emailRef.current.value;
      
          if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email address.',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            return;
          }
      
          await sendPasswordResetEmail(auth, email);
           
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Password reset link sent to your email.',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
          console.error("Password reset error:", error);
            // Swal.fire({
            // icon: 'error',
            // title: 'Oops...',
            // text: 'An error occurred while sending the reset link.',
            // footer: '<a href="">Why do I have this issue?</a>'
            // })
        }
        };
      

        

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Account created successfully',
                showConfirmButton: false,
                timer: 1500
              }) 
            naviGate(location?.state ? location.state : '/');
        } catch (error) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'An error occurred while sending the reset link.',
            //     footer: '<a href="">Why do I have this issue?</a>'
            //     })
        }
    };
   


    return (
        <section>


            {/* hHader */}
            <Header></Header>
            {/* Login Form */}

             <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">


                    <form onSubmit={handleLogIn} action="" className="mb-0 mt-6 space-y-8 bg-slate-50 rounded-lg p-4 shadow-2xl px-10 py-14">
                        <p className="text-center text-2xl mb-12  font-medium">Sign in to your account</p>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input type="email" ref={emailRef} name="email" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your email here" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input type={showPass ? "text" : "password"} name="password" className="w-full mb-5 rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm" placeholder="Enter your password here"/>

                                <span onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer inset-y-0 -mt-10 end-0 grid place-content-center px-4">
                                
                                {
                                    showPass ? <AiTwotoneEyeInvisible></AiTwotoneEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                                }

                                </span>
                                <button onClick={handleForgetPass} href="" className='justify-start text-left'>Forgot Password?</button>

                            </div>
                        </div>

                        <button type="submit" className="block w-full mt-12 rounded-lg bg-rose-600 px-5 py-3 text-lg font-medium text-white">Login </button>

                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider">OR</div>

                        </div>

                        <button onClick={handleGoogleSignIn} className="w-full flex items-center gap-3  justify-center px-5 py-3 rounded-md border border-rose-500 hover:bg-rose-400 hover:text-white hover:border-0">
                            <FcGoogle className="text-xl text-teal-900 "></FcGoogle>
                            Continue with google
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Do not have any account?
                            <Link to="/signup" className="text-rose-600 text-medium" > Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;