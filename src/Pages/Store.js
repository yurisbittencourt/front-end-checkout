import { useState, useEffect, Fragment } from "react";
import { getData } from "../Utils/Data";
import { useLocalStorage } from "../Utils/useLocalStorage";
import { Wrapper } from "../Styles/Elements";
import { ProductGrid, Navbar, SearchBar } from "../Components";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [description, setDescription] = useLocalStorage("");

  useEffect(() => {
    getData().then((data) => setProducts(data));
  }, []);

  return (
    <Fragment>
      <Navbar title="Sneakers" />
      <Wrapper>
        <SearchBar description={description} setDescription={setDescription} />
        <ProductGrid
          products={products && products}
          description={description}
        />
      </Wrapper>
    </Fragment>
  );
};

export default Store;
