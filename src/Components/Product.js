import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useHistory } from "react-router";
import { Button } from "../Styles/Elements";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 297px;
  height: 373px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  place-self: center;
  overflow: hidden;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
`;

const Description = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  margin: 20px auto;
`;

const Image = styled.img`
  width: 100%;
  height: 172px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 12px;
  color: #8d8d8d;
`;

const Size = styled.div`
  display: flex;
  align-items: center;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70px;
  height: 28px;
  border: 0.9px solid #e8e8e8;
  border-radius: 25px;
  margin-left: 5px;
  cursor: pointer;
`;

const ArrowDown = styled(IoIosArrowDown)`
  width: 20px;
  height: 20px;
`;

const Price = styled.p`
  display: flex;
  justify-content: center;
  font-size: 21px;
  font-weight: 600;
  margin-top: auto;
`;

const Product = ({ product }) => {
  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem("item", JSON.stringify(product));
    history.push("/checkout");
  };

  return (
    <Card>
      <Image src={product.thumbnailURL} alt="Sneakers" />
      <Description>{product.description}</Description>
      <Info>
        <Size>
          Size
          <Option>
            41
            <ArrowDown />
          </Option>
        </Size>
        <Quantity>
          Quantity
          <Option>
            1 <ArrowDown />
          </Option>
        </Quantity>
      </Info>
      <Price>$ {product.price}</Price>
      <Button maxWidth="275px" margin="auto 0 10px 0" onClick={handleClick}>
        Add to Cart
      </Button>
    </Card>
  );
};

export default Product;
