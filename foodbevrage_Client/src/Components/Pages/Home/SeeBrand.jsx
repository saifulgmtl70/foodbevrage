import { useLoaderData,  useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import SeeBrandProduct from "./SeeBrandProduct";
// import { useEffect, useState } from "react";


const SeeBrand = () => {

    
    const [brandsProducts, setBrandsProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(true);

    const {brand} = useParams();

    const allProducts = useLoaderData();


    useEffect(() =>{
        const filteredProducts = allProducts.filter( product => product.brandname === brand);
        if(filteredProducts.length > 0){
            setBrandsProducts(filteredProducts);    
            setErrorMessage(false)    
        }
        else{
            setErrorMessage(true)
        }

        
    },[allProducts, brand])

    // console.log(errorMessage);

    // console.log(brandsProducts);

   

      
 


   



    return (
        <main>
            <Header></Header>




            {/* Slider Section */}
            
            
            <section >
                <div className="carousel w-full ">

                    <div id="slide1" className="carousel-item relative w-full">

                        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/yQRYxNF/Food-Beverage-CLuster.png)"}}>
                            <div className="hero-overlay bg-opacity-70"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg ">
                                    <h1 className="mb-5 text-7xl font-bold"> Delicious Dishes Galore  </h1>
                                    <p className="mb-5">Indulge in a world of flavor with our mouthwatering dishes. From savory to sweet, we have got it all. Explore our extensive menu and tantalize your taste buds today! </p>
                                    <button className="px-8 py-3 bg-rose-500 hover:bg-rose-500 text-white  font-medium rounded-md">Find this Brand </button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle hover:bg-rose-500 hover:text-white">❮</a> 
                            <a href="#slide2" className="btn btn-circle hover:bg-rose-500 hover:text-white">❯</a>
                        </div>
                    </div> 


                    <div id="slide2" className="carousel-item relative w-full">

                        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/HC6kdpf/drink-2-1.jpg)" }}>
                            <div className="hero-overlay bg-opacity-70"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg ">
                                    <h1 className="mb-5 text-7xl font-bold"> Sip & Savo </h1>
                                    <p className="mb-5"> Discover a symphony of tastes with our exquisite beverages. From rich coffees to refreshing cocktails, we have the perfect drink for every moment. Cheers to the good life! </p>
                                    <button className="px-8 py-3 bg-rose-500 hover:bg-rose-500 text-white  font-medium rounded-md"> Find this Brand  </button>
                                </div>
                            </div>
                        </div>  


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle hover:bg-rose-500 hover:text-white">❮</a> 
                            <a href="#slide3" className="btn btn-circle hover:bg-rose-500 hover:text-white">❯</a>
                        </div>
                    </div> 



                    <div id="slide3" className="carousel-item relative w-full">

                        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/cwGjVJs/ingredients-grilled-wood-flame-plate-generative-ai-188544-8881.jpg)" }}>
                            <div className="hero-overlay bg-opacity-70"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-lg">
                                    <h1 className="mb-5 text-7xl font-bold"> Foodies Paradise </h1>
                                    <p className="mb-5"> Step into a culinary wonderland where every bite is an adventure. Our chefs create magic on your plate. Dive into a world of culinary delights and savor the extraordinary. </p>
                                    <button className="px-8 py-3 bg-rose-500 hover:bg-rose-500 text-white  font-medium rounded-md"> Find this Brand  </button>
                                </div>
                            </div>
                        </div>  

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle hover:bg-rose-500 hover:text-white">❮</a> 
                            <a href="#slide1" className="btn btn-circle hover:bg-rose-500 hover:text-white">❯</a>
                        </div>
                    </div> 
    
                </div>
            </section> 



            <section className="px-12 py-10">
                <h2 className="text-center text-4xl font-medium mb-10">ALl Products Here</h2>

                {
                    errorMessage ? 
                    <div className="text-center">
                        <h1 className="text-5xl my-4 font-bold text-rose-500">No Data Found of <span className="text-cyan-600">{brand}</span> </h1>
                    </div>
                    :
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                       
                       {
                            brandsProducts.map(brandProduct => <SeeBrandProduct key={brandProduct._id} brandProduct={brandProduct} ></SeeBrandProduct>)
                       }
                    </div>
                }
                

                    


            </section>






            <Footer></Footer>
        </main>
    );
};

export default SeeBrand;