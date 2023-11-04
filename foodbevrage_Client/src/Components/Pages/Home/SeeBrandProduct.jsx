import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SeeBrandProduct = ({brandProduct}) => {

    // eslint-disable-next-line react/prop-types
    const {_id, photo,name,brandname,price} = brandProduct;

    return (
       

        <div className="card w-auto lg:w-96 glass shadow-2xl rounded-sm">
        <img src={photo} className="w-auto lg:w-11/12 h-auto lg:h-56 mx-auto p-3"/>
        <div className="card-body text-center">
            <h2 className=" -mt-4 mb-2 text-2xl text-cyan-900 text-center"> {name} </h2>
            <div className="flex justify-center  items-center gap-12 mb-3">
                <span className="text-white px-3 py-1 bg-pink-500 inline-block">{brandname}</span>
                <span className="text-rose-400"> {price} TK</span>
            </div>

            <div className="rating mx-auto">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>

            <div className="card-actions justify-center mt-5 gap-5">
                

                <Link to={`/details/${_id}`}>
                    <button className="px-7 py-2 rounded-sm bg-rose-500 text-white">Details</button>
                </Link>

                <Link to={`/update/${_id}`}>
                    <button className="px-7 py-2 rounded-sm bg-rose-500 text-white">Update</button>
                </Link>
            </div>
        </div>
        </div>

    );
};

export default SeeBrandProduct;


