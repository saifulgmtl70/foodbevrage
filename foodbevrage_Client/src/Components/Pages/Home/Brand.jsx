// This is Brand.jsx

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Brand = ({ brand }) => {
  // eslint-disable-next-line react/prop-types
  const { brand_name, brand_image } = brand;

  // Link to the brand using its 'id'
  return (
    <Link to={`/brands/${brand_name}`}>
      <div className="card py-3 w-full lg:w-96 bg-base-100 shadow-2xl rounded-sm">
        <img src={brand_image} className="w-11/12 mx-auto h-52 rounded-sm" alt={brand_name} />
        <div className="card-body">
          <h2 className="text-center text-xl -tracking-tighter font-medium text-sky-950">{brand_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
