import { PaymentOptions } from "../";
import {
  Wrapper,
  Row,
  Col,
  Text,
  Gap,
  Button,
  Img,
  Card,
} from "../../Styles/Elements";
import { ItemInfo, UserInfo, CostInfo } from "../ElementGroups";

const CheckoutCartMobile = ({ item, handleClick, setOption }) => {
  return (
    <Wrapper>
      <Col alignItems="center">
        <Col maxWidth="600px">
          <Text fontSize="24px" mb="10px">
            Checkout
          </Text>
          <Card>
            <Row mb="25px" justifyContent="space-between">
              <Col mr="20px">
                <Img src={item.maxresURL} alt="Sneakers" />
              </Col>
              <Col minWidth="200px">
                <ItemInfo
                  description={item.description}
                  color={item.color}
                  id={item.id}
                />
                <Gap height="10px" />
                <Text>Delivery details</Text>
                <UserInfo />
              </Col>
            </Row>
            <Row>
              <CostInfo price={item.price} />
            </Row>
          </Card>
          <Text fontSize="20px" mt="20px" mb="10px">
            Payment method
          </Text>
          <Card>
            <PaymentOptions setOption={setOption} />
          </Card>
          <Button mt="15px" height="50px" onClick={handleClick}>
            Continue
          </Button>
        </Col>
      </Col>
    </Wrapper>
  );
};

export default CheckoutCartMobile;
