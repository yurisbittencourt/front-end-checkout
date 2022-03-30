import styled from "styled-components";
import Product from "./Product";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(297px, 1fr));
  gap: 70px;
  min-width: 300px;
  max-width: 1100px;
  margin: auto;
`;

const ProductGrid = ({ products, description }) => {
  return (
    <Grid>
      {products &&
        products.length > 0 &&
        products
          .filter((item) =>
            item.description.toLowerCase().includes(description.toLowerCase())
          )
          .map((p) => <Product key={p.id} product={p} />)}
    </Grid>
  );
};

export default ProductGrid;
