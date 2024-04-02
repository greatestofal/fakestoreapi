import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
//import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
const Product = ({ product }) => {
  // destructure produts
  const { id, title, price, image, category } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* Image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transtion duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Product;
