import Header from "../Pages/Header/Header";
import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProducts= (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const product_type = form.product_type.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;

        const products = {name, brandname, product_type, photo, price, description};

        console.log(products);



        
        // Send Data to the server
        fetch('https://food-bevrage-server.vercel.app//products',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
        
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Products Added Successfully',
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

            {/* Adding Product Form */}

            <section className="px-12 py-10">
                <div className=" border max-w-7xl mx-auto my-12 p-3 shadow-2xl">
                    <form onSubmit={handleAddProducts} className="mx-auto px-6 py-12 ">
                        <div className="flex flex-col lg:flex-row items-center gap-6 mb-7 lg:mb-12">
                            <input type="text" name="name" placeholder="Enter Product Name here" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-sky-950 font-medium focus:outline-0"/>

                            <input type="text" name="brandname" placeholder="Enter Brand Name here" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-sky-950 font-medium focus:outline-0"/>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-6 mb-7 lg:mb-12">

                            <select name="product_type" id="" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-slate-500 font-medium focus:outline-0">
                                <option value="Technology and Electronics">Technology and Electronics</option>
                                <option value="Automotive">Automotive</option>
                                <option value="Fashion and Apparel">Fashion and Apparel</option>
                                <option value="Food and Beverage">Food and Beverage</option>
                                <option value="Retail and E-commerce">Retail and E-commerce</option>
                                <option value="Entertainment and Media">Entertainment and Media</option>
                                <option value="Cosmetics and Beauty">Cosmetics and Beauty</option>
                            </select>
                            
                            <input type="text" name="photo" placeholder="Enter Photo url  here" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-sky-950 font-medium focus:outline-0"/>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-6 mb-7 lg:mb-12">
                            <input type="number" name="price" placeholder="Enter Product Price here" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-sky-950 font-medium focus:outline-0"/>

                            <input type="text" name="description" placeholder="Enter Short description here" className="w-full lg:w-6/12 px-4 py-3 rounded-sm border border-rose-200 text-sky-950 font-medium focus:outline-0"/>
                        </div>


                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4 bg-rose-500 text-center py-2 font-medium text-white w-full">
                                <button className="mx-auto"> Add Product</button>
                            </div>
                    </form>
                </div>
            </section>

        </main>
    );
};

export default AddProduct;
