import { Row, Col, Text } from "../../Styles/Elements";

const CostInfo = ({ price }) => {
  return (
    <Row justifyContent="space-between" alignItems="center">
      <Col>
        <Text>Total cost</Text>
        <Text gray>Delivery included</Text>
      </Col>
      <Col>
        <Text fontSize="34px" fontWeight="700">
          ${price}
        </Text>
      </Col>
    </Row>
  );
};

export default CostInfo;
