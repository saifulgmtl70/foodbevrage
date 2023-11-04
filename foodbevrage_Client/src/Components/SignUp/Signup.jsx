import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Swal from 'sweetalert2'
import {  AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import {  useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const Signup = () => {

    // const {createUser} = useContext(AuthProvider);
    const { createUser } = useContext(AuthContext)
    // const [showPass, setShowPass] = useState(null);
    const location = useLocation();
    const naviGate = useNavigate();

    // const { createUser } = useContext(AuthProvider);
    const [showPass, setShowPass] = useState(null)


    const handleSIgnUp = (e) =>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = e.target;

        const name = form.username.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.value;
        console.log(name, photo, email, password, terms);


        if(password.length < 6){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your password should be at least 6 characters or more longer than',
               
              })
            return;
        }

        else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your password should contain with uppercae,lowercase,num and speical character.',
               
              })
            return;
        }

        else if(!terms){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please accept our terms and conditions',
               
              })
        }



        createUser(email, password, name, photo)
        .then((result) =>{
            console.log(result.user);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Account created successfully',
                showConfirmButton: false,
                timer: 1500
              })

                console.log(result.user);
                naviGate(location?.state ? location.state : '/login');
            
            const createdAt = result.user?.metadata?.creationTime;
            const user  = {  email, createdAt: createdAt}

            fetch('https://food-bevrage-server.vercel.app//user',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
            })
        })

        .catch(error =>{
            console.log(error);
        })

        

        form.reset();
   
        
    }




    return (
        <section>

    
        <Header></Header>


        {/* Sign Up  */}

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">


                <form onSubmit={handleSIgnUp}  action="" className="mb-0 mt-6 space-y-8 bg-slate-50 rounded-lg p-4 shadow-2xl px-10 py-14">
                    <p className="text-center text-2xl mb-12  font-medium">Sign in to your account</p>

                    <div>
                        <label htmlFor="username" className="sr-only">Username</label>

                        <div className="relative">
                            <input type="text" name="username" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your username here" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="photo" className="sr-only">Photo</label>

                        <div className="relative">
                            <input type="text" name="photo" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your photo url here" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input type="email" name="email" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your email here" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input type={showPass ? "text" : "password"} name="password" className="w-full mb-5 rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm" placeholder="Enter your password here"/>

                            <span onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer inset-y-0 -mt-3 end-0 grid place-content-center px-4">
                            
                            {
                                showPass ? <AiTwotoneEyeInvisible></AiTwotoneEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                            }

                            </span>

                        </div>
                    </div>

                    <div className="col-span-6">
                    <label className="flex gap-4">
                        <input type="checkbox" id="MarketingAccept" name="terms" className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"/>

                        <span className="text-sm text-gray-700">
                           I accept your tearms & conditions
                        </span>
                    </label>

                </div>

                    <button type="submit" className="block w-full mt-12 rounded-lg bg-rose-600 px-5 py-3 text-lg font-medium text-white">Sign Up </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?
                        <Link to="/login" className="text-rose-600 text-medium" href=""> Login</Link>
                    </p>
                </form>
            </div>
        </div>


    </section>
    );
};

export default Signup;
