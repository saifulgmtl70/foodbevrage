/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Update.css';
import Swal from 'sweetalert2';


const Update = () => {

    const products = useLoaderData();

    

    const {_id,  name, brandname, product_type, photo, price, description} = products;

    
    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;

        
        const name = form.name.value;
        const brandname = form.brandname.value;
        const product_type = form.product_type.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;

        const updatedProducts = {name, brandname, product_type, photo, price, description};

        console.log(updatedProducts);



        fetch(`https://foode-server-aeermtw0h-azadgmtls-projects.vercel.app//products/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProducts)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Products Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })



        form.reset();
    }

    return (
        <main>
            <Header></Header>

            <section className="px-12 py-12 bg_brandDetails">
                <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Products Details</h2>
                    <h4 className="text-lg"><Link to="/" className="font-bold">Home </Link>  Details</h4>
                </div>
            </section>


            <section className="px-12 py-10">
                <div className=" border max-w-7xl mx-auto my-12 p-3 shadow-2xl">
                    <form onSubmit={handleUpdate} className="mx-auto px-6 py-12 ">
                        <div className="flex flex-col lg:flex-row items-center gap-6 mb-7 lg:mb-12">
                            <input type="text" name="name" defaultValue={products.name} placeholder="Enter Product Name here" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-sky-950 font-medium focus:outline-0"/>

                            <input type="text" name="brandname" defaultValue={products.brandname} placeholder="Enter Brand Name here" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-sky-950 font-medium focus:outline-0"/>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-6 mb-7 lg:mb-12">

                            <select name="product_type" defaultValue={products.product_type} id="" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-slate-500 font-medium focus:outline-0">
                                <option value="Technology and Electronics">Technology and Electronics</option>
                                <option value="Automotive">Automotive</option>
                                <option value="Fashion and Apparel">Fashion and Apparel</option>
                                <option value="Food and Beverage">Food and Beverage</option>
                                <option value="Retail and E-commerce">Retail and E-commerce</option>
                                <option value="Entertainment and Media">Entertainment and Media</option>
                                <option value="Cosmetics and Beauty">Cosmetics and Beauty</option>
                            </select>
                            
                            <input type="text" name="photo" defaultValue={products.photo} placeholder="Enter Photo url  here" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-sky-950 font-medium focus:outline-0"/>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-6 mb-7 lg:mb-12">
                            <input type="number" name="price" defaultValue={products.price} placeholder="Enter Product Price here" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-sky-950 font-medium focus:outline-0"/>

                            <input type="text" name="description" defaultValue={products.description} placeholder="Enter Short description here" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-sky-950 font-medium focus:outline-0"/>
                        </div>


                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4 bg-rose-500 text-center py-2 font-medium text-white w-full">
                                <button className="mx-auto"> Add Product</button>
                            </div>

                    </form>
                </div>
            </section>


            <Footer></Footer>
        </main>
    );
};

export default Update;
