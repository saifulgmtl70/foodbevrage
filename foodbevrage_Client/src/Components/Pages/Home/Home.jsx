import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Home.css'
import { useEffect, useState } from "react";
import Brand from "./Brand";


const Home = () => {

    const [brands, setBrands] = useState([]);

    const [seeMore, setSeemore] = useState(null);
    const [dataLength, setDataLength] = useState(3);



    const handleSeMore = () => {
        setDataLength(brands.length);
        setSeemore(true);
    };



    useEffect(() =>{
        fetch('brands.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])



    return (
        <main >
            <Header></Header>

            <section  className="bg_banner" >
                <div className="w-full lg:w-8/12 mx-auto text-center">
                    <h1 className="text-6xl font-bold text-white">Deliciously Crafted Flavors</h1>
                    <p className="mt-10 text-lg leading-loose text-white">Savor extraordinary flavors from around the world. Explore our diverse menu, where tradition meets innovation. Join us in the artistry of food.</p>


                    <button>
                        <Link to="#" className="mt-6 inline-block px-12 py-3 text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition duration-300">View Menu</Link>
                    </button>

                </div>
            </section>



            {/* Brand Category */}
            <section className="px-12 py-10">
                <div className="text-center mb-12">
                    <span className="text-lg text-rose-500 font-normal">Brnads</span>
                    <h2 className="text-4xl mt-3 text-sky-950 font-bold">Our Brands Category</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    brands.slice(0, seeMore ? brands.length : dataLength).map(brand => <Brand key={brand.id} brand={brand}></Brand>)

                }
                </div>

                {!seeMore && brands.length > 4 && (
                    <div className="text-center mt-10">
                        <button onClick={handleSeMore} className="bg-rose-600 px-5 py-3 rounded text-white">See More</button>
                    </div>
                )}

            </section>


            {/* Why Choose Us */}
            <section className="px-12 py-10 bg-base-200">
                <h2 className="text-4xl text-center mb-12 text-cyan-950 font-medium">Why Choose Us?</h2>
                <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-base-100 px-12 py-10 mx-auto border w-full shadow-xl hover:shadow-2xl rounded-md">
                        <img src="https://i.ibb.co/Y2jDNC7/ico-mission-01.png" alt="" className="w-24 mx-auto"/>
                        <h3 className="text-xl text-center mt-5 text-cyan-800 font-medium">Fresh Products</h3>
                    </div>

                    <div className="bg-base-100 px-12 py-10 mx-auto  w-full border shadow-xl hover:shadow-2xl rounded-md">
                        <img src="https://i.ibb.co/JC3RVbd/chefs.png" alt="" className="w-24 mx-auto"/>
                        <h3 className="text-xl text-center mt-5 text-cyan-800 font-medium">Skilled Chefs</h3>
                    </div>

                    <div className="bg-base-100 px-12 py-10 mx-auto border  w-full shadow-xl hover:shadow-2xl rounded-md">
                        <img src="https://i.ibb.co/HCtR0Dn/images-removebg-preview.png" alt="" className="w-32 h-24 mx-auto"/>
                        <h3 className="text-xl text-center mt-5 text-cyan-800 font-medium">Fast Delivery</h3>
                    </div>

                    <div className="bg-base-100 px-12 py-10 mx-auto  w-full border shadow-xl hover:shadow-2xl rounded-md">
                        <img src="https://i.ibb.co/jfv0LCR/communication-social-service-center-online-support-icon-230490.png" alt="" className="w-24 mx-auto"/>
                        <h3 className="text-xl text-center mt-5 text-cyan-800 font-medium">24/7 Services</h3>
                    </div>

                </div>
            </section>

            {/* Client's Review */}
            <section className="px-12 py-10 bg-base-100">
                <h2 className="text-4xl text-cyan-950 font-medium text-center">What say our Clients?</h2>



                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg hover:shadow-xl sm:p-8">
                            <div className="flex flex-col lg:flex-row items-center gap-4">
                                <img alt="Man" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" className="h-14 w-14 rounded-full object-cover"/>

                                <div>
                                    <div className="flex justify-center gap-0.5 text-green-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                    </div>

                                    <h2 className="mt-2 text-lg font-medium text-cyan-900">John Doe</h2>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                            I recently dined at <strong>FlavorFiesta</strong> and was blown away by the incredible Italian dishes they offer. The ambiance was cozy and inviting, making it a perfect spot for a romantic date night. The pasta was cooked to perfection, and the flavors were authentic and delicious. The service was top-notch - attentive and knowledgeable about the menu. I highly recommend the lasagna; it is a must-try! I can not wait to return for more of their mouthwatering food.
                            </p>
                        </blockquote>

                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg hover:shadow-xl sm:p-8">
                            <div className="flex flex-col lg:flex-row items-center gap-4">
                                <img alt="Man" src="https://i.ibb.co/nPbzrpP/team-1.jpg" className="h-14 w-14 rounded-full object-cover"/>

                                <div>
                                    <div className="flex justify-center gap-0.5 text-green-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                    </div>

                                    <p className="mt-2 text-lg font-medium text-gray-900">Paul Stirling</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                            I am a coffee enthusiast, and <strong>FlavorFiesta</strong> has quickly become my go-to spot for a caffeine fix. Their espresso is rich and robust, and they offer a variety of unique brews that cater to different tastes. The baristas are friendly and always willing to provide recommendations. The cozy atmosphere is perfect for both work and relaxation. My only complaint is that it can get a bit crowded during peak hours, but it is worth the wait for their exceptional coffee.
                            </p>
                        </blockquote>

                        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg hover:shadow-xl sm:p-8">
                            <div className="flex flex-col lg:flex-row items-center gap-4">
                                <img alt="Man" src="https://i.ibb.co/XtrzGYF/testy3-1.png" className="h-14 w-14 rounded-full object-cover"/>

                                <div>
                                    <div className="flex justify-center gap-0.5 text-green-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                    </div>

                                    <p className="mt-2 text-lg font-medium text-gray-900">Ricky Ponting</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                            If you are a craft beer lover, you have to check out <strong>FlavorFiesta</strong>. They have an incredible selection of brews from various local and international breweries. The staff is passionate about beer and can help you find the perfect choice based on your preferences. The tasting room is spacious and welcoming, making it a great place to hang out with friends. I appreciate that they frequently rotate their beer menu, so there is always something new to try. I had a fantastic time here and will be returning soon for more beer adventures.
                            </p>
                        </blockquote>
                    </div>
                </div>


            </section>

            <Footer></Footer>
        </main>
    );
};

export default Home;