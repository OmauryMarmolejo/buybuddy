import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    console.log(filters);
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || filters.category === product.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilter} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
