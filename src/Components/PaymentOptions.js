import { useState, Fragment } from "react";
import styled from "styled-components";
import { Col, Text, Gap, DiscountFlag, breakpoint } from "../Styles/Elements";
import BannerImg1 from "../Images/image 5.png";
import BannerImg2 from "../Images/image 6.png";
import BannerImg3 from "../Images/image 7.png";

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  padding: 25px;
  border: ${(props) => (props.checked ? "1px solid #5DAC50" : "none")};
`;

const BannerImage = styled.img`
  width: ${(props) =>
    props.ob ? "175px" : props.cp ? "85px" : props.ap ? "56px" : ""};
  height: auto;
  ${breakpoint.sm} {
    width: ${(props) =>
      props.ob ? "130px" : props.cp ? "80px" : props.ap ? "50px" : ""};
  }
`;

const Payment = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const PaymentOptions = ({ setOption }) => {
  const [selectedPayment, setSelectedPayment] = useState("online");

  const handleChange = (e) => {
    setSelectedPayment(e.target.id);
    setOption(e.target.id);
  };

  return (
    <Fragment>
      <Label for="online" checked={selectedPayment === "online"}>
        <Col>
          <Text>Online Banking</Text>
          <DiscountFlag>SAVE 10$</DiscountFlag>
        </Col>

        <BannerImage src={BannerImg1} alt="online banking" ob />
      </Label>
      <Payment
        id="online"
        onChange={handleChange}
        checked={selectedPayment === "online"}
      />
      <Gap height="15px" />
      <Label for="card" checked={selectedPayment === "card"}>
        <Text>Card payment</Text>
        <BannerImage src={BannerImg3} alt="card payment" cp />
      </Label>
      <Payment
        id="card"
        onChange={handleChange}
        checked={selectedPayment === "card"}
      />
      <Gap height="15px" />
      <Label for="apple" checked={selectedPayment === "apple"}>
        <Text>Apple Pay</Text>
        <BannerImage src={BannerImg2} alt="apple pay" ap />
      </Label>
      <Payment
        id="apple"
        onChange={handleChange}
        checked={selectedPayment === "apple"}
      />
    </Fragment>
  );
};

export default PaymentOptions;
