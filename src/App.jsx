import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function useFilters() {
  const [filters, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || filters.category === product.category)
      );
    });
  };

  return { setFilter, filterProducts, filters };
}

function App() {
  const [products] = useState(initialProducts);
  const { setFilter, filterProducts, filters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilter} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  );
}

export default App;
