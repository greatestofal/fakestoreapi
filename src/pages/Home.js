import React, { useContext } from "react";

// import product
import { ProductContext } from "../contexts/ProductContext";
const Home = () => {
  //get product from product context
  const { products } = useContext(ProductContext);

  // get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "Men's Clothing" || item.category === "Women's Clothing"
    );
  });

  return (
    <section>
      <div className="container mx-auto">
        <div>
          {filteredProducts.map((product) => {
            return <div key={product.id}>{product.title}</div>;
          })}
        </div>
      </div>
      <div> Homepage </div>
    </section>
  );
};

export default Home;
