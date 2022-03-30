import styled from "styled-components";
import { PaymentOptions, ProgressBar } from "../";
import {
  Wrapper,
  Row,
  Col,
  Text,
  Gap,
  Button,
  breakpoint,
} from "../../Styles/Elements";
import { ItemInfo, UserInfo, CostInfo } from "../ElementGroups";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  ${breakpoint.lg} {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 533px;
  object-fit: cover;
  height: auto;
  border-radius: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.cartBG};
`;

const CheckoutCartDesktop = ({ item, handleClick, setOption }) => {
  return (
    <Wrapper>
      <Gap height="10px" />
      <ProgressBar checkout />
      <Gap height="30px" />
      <Container>
        <Image src={item.maxresURL} />
        <Gap width="50px" height="50px" />
        <Card>
          <Row mb="40px">
            <Col width="50%">
              <Text fontSize="22px" mb="15px">
                Cart total
              </Text>
              <ItemInfo
                description={item.description}
                color={item.color}
                id={item.id}
              />
            </Col>
            <Col width="50%">
              <Text fontSize="20px" mb="15px">
                Delivery details
              </Text>
              <UserInfo />
              <Gap height="20px" />
              <CostInfo price={item.price} />
            </Col>
          </Row>
          <Text fontSize="22px" mb="20px">
            Select your payment method
          </Text>
          <PaymentOptions setOption={setOption} />
          <Button maxWidth="300px" margin="20px 0 0 auto" onClick={handleClick}>
            Continue
          </Button>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default CheckoutCartDesktop;
