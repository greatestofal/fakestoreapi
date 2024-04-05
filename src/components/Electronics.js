import React, { useContext } from "react";

// import product
import { ProductContext } from "../contexts/ProductContext";

import Product from "../components/Product";
import ElectronicsHero from "../heros/ElectronicsHero";

const Electronics = () => {
  //get product from product context
  const { products } = useContext(ProductContext);

  // get only electronics category
  const filteredProducts = products.filter((item) => {
    return item.category === "electronics";
  });

  return (
    <div>
      <ElectronicsHero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electronics;
