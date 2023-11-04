
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {  Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './Home.css';
import Swal from 'sweetalert2';


const SeeDetails = () => {


    const { id } = useParams();
    const [product, setProduct] = useState(null);
  

    useEffect(() => {

        fetch(`https://foode-server-aeermtw0h-azadgmtls-projects.vercel.app/products/${id}`)
          .then((response) => response.json())
          .then((data) => setProduct(data))
          .catch((error) => console.error("Error fetching product details: ", error));
      }, [id]);




      const handlAddToCart = () => {
        const cartItem = {
          product_id: product._id,
          product_name: product.name,
          product_brand: product.brandname,
          product_price: product.price,
          product_photo: product.photo,
        };
      
        // Check if the product already exists in the cart
        fetch('https://foode-server-aeermtw0h-azadgmtls-projects.vercel.app/cart')
          .then((response) => response.json())
          .then((data) => {
            const existingProduct = data.find((item) => item.product_id === cartItem.product_id);
            if (existingProduct) {
              Swal.fire({
                icon: 'error',
                title: 'Already Added to cart',
                text: "This product is already exist in the. It can't be added.",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              // Product doesn't exist in the cart, so add it
              fetch('https://foode-server-aeermtw0h-azadgmtls-projects.vercel.app/cart', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify(cartItem),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product Added to Cart Successfully',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                })
                .catch((error) => {
                  console.log(error);
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>',
                  });
                });
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">Why do I have this issue?</a>',
            });
          });
      };
      
      
    

    return (
        <main>
            <Header></Header>

            <section className="bg_banner">
                <div className="text-center text-white">
                {product ? (
                    <div>
                        <h2 className="text-4xl font-bold mb-4"> Details of <span className="text-rose-400 font-extrabold"> {product.name} </span> </h2>
                        <h4 className="text-lg"><Link to="/" className="font-bold">Home </Link>  Details</h4>
                    </div>
                ):(
                    <p></p>
                )}

                </div>
            </section>

            <section className="px-12 py-10">
                <div>
                    {product ? (
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                        <div className="h-full rounded-lg bg-base-200 lg:col-span-1">

                            <div className="p-4 mx-auto">
                                <img src={product.photo} className="mx-auto"/>
                            </div>
                          
                        </div>

                        <div className="h-full rounded-lg px-10 py-10 bg-gray-100">
                            <h2 className="text-3xl font-medium mb-4">Name: <span className=" text-rose-500 font-bold">{product.name}</span></h2>

                            <h2 className="text-3xl font-medium mb-4">Brand Name: <span className=" text-rose-500 font-bold">{product.brandname}</span></h2>

                            <h3 className="text-3xl font-medium mb-4">Price: <span className="text-sky-600">{product.price}</span> TK </h3>

                            <p className="mt-6 text-center text-gray-700 lg:text-start -tracking-wide leading-relaxed">{product.description}</p>

                            <div onClick={handlAddToCart} className="mt-6 text-center w-full text-white text-lg  px-12 py-2 rounded-sm bg-rose-500">
                                <button className="">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                        ) : (
                        <p className="text-center text-3xl text-cyan-900">Loading...</p>
                    )}

                </div>
            </section>

            <Footer></Footer>
        </main>
    );
};

export default SeeDetails;
