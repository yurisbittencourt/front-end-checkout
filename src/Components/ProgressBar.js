import styled from "styled-components";
import { Row, Col } from "../Styles/Elements";

const Line = styled.div`
  display: flex;
  max-width: 860px;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  position: absolute;
  margin-top: -32.5px;
  margin-left: 12px;
  z-index: -1;
`;

const Marker = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.checked ? "#61cb46" : "#e8e8e8")};
`;

const Text = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin-top: 15px;
`;

//TODO fix line overflow

const ProgressBar = ({ receipt }) => {
  return (
    <Row
      maxWidth="900px"
      justifyContent="space-between"
      alignItems="center"
      ml="auto"
      mr="auto"
    >
      <Line />
      <Col alignItems="center">
        <Marker checked />
        <Text>Cart</Text>
      </Col>
      <Col alignItems="center">
        <Marker checked />
        <Text>Payment options</Text>
      </Col>
      <Col alignItems="center">
        <Marker checked={receipt} />
        <Text>Receipt</Text>
      </Col>
    </Row>
  );
};

export default ProgressBar;
