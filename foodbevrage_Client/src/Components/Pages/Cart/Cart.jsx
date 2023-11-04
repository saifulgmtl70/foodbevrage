import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import '../Home/Home.css'
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const Cart = () => {

  
    // const loadedCart = useLoaderData();
    // const [cartDatas, setCartData] = useState(loadedCart);


    const loadedCoffes = useLoaderData();
    const [cartDatas, setCartData] = useState(loadedCoffes)
    


    const handleDelete = (_id) =>{
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   

            fetch(`https://foode-server-aeermtw0h-azadgmtls-projects.vercel.app//cart/${_id}`,{
                method: 'DELETE',
                
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Cart Data has been deleted.',
                        'success'
                    )
                    // eslint-disable-next-line react/prop-types
                    const remaining = cartDatas.filter(cart => cart._id !== _id);
                    setCartData(remaining);
                }
            })

            }
        });



    }



    return (
        <main>
            <Header></Header>


            <section className="bg_banner">
                <div className="text-center">
                    <h2 className="text-5xl text-white font-bold mb-5">Your Cart</h2>
                    <h3 className="text-xl font-bold text-white"><Link to="/">Home</Link>  Cart</h3>
                </div>
            </section>


            <section className="px-12 py-10">
                <h3 className="text-center text-4xl font-medium mb-12">Your Cart</h3>
                <div className="mx-auto w-11/12">   

                <div className="">
                        {cartDatas.length === 0 ? (
                            <h2 className="text-center text-rose-500 font-medium text-3xl">Your Cart is empty</h2>
                        ) : (
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-xl text-cyan-900">
                                        <th>Product Photo</th>
                                        <th>Product Name</th>
                                        <th>Brand Name</th>
                                        <th>Product Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cartDatas.map((cartData) => (
                                        <tr className="text-lg" key={cartData._id}>
                                            <td>
                                                <img src={cartData.product_photo} className="w-24 h-20" alt="Product" />
                                            </td>
                                            <td>{cartData.product_name}</td>
                                            <td>{cartData.product_brand}</td>
                                            <td>{cartData.product_price}</td>
                                            <td>
                                                <button onClick={() => handleDelete(cartData._id)} className="px-8 py-2 bg-rose-500 rounded-sm text-white">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>  
                             
                </div>
            </section>

            <Footer></Footer>
        </main>
    );
};

export default Cart;
