import {
  Wrapper,
  Row,
  Col,
  RowToCol,
  Gap,
  Text,
  Img,
  Card,
  Button,
  BankIcon,
} from "../../Styles/Elements";
import { ProgressBar } from "../";
import { ItemInfo, CostInfo } from "../ElementGroups";

const ReceiptDesktop = ({ item }) => {
  return (
    <Wrapper pt="40px">
      <ProgressBar receipt />
      <Row maxWidth="1300px" margin="70px auto 0 auto" height="562px">
        <Col maxWidth="533px" mr="20px">
          <Img src={item.maxresURL} alt="Sneakers" />
        </Col>
        <Card minWidth="500px" padding="80px 50px">
          <RowToCol mb="50px">
            <Col minWidth="50%">
              <Text fontSize="20px" mb="15px">
                Order summary
              </Text>
              <ItemInfo
                description={item.description}
                color={item.color}
                id={item.id}
              />
            </Col>
            <Gap width="150px" height="30px" />
            <Col mr="auto" minWidth="50%">
              <Text fontSize="20px" mb="15px">
                Payment method
              </Text>
              <Row alignItems="center">
                <BankIcon />
                <Text fontSize="17px" ml="10px">
                  Online banking
                </Text>
              </Row>
            </Col>
          </RowToCol>
          <RowToCol>
            <CostInfo price={item.price} />
            <Gap width="40px" height="30px" />
            <Button>Place order</Button>
          </RowToCol>
        </Card>
      </Row>
    </Wrapper>
  );
};

export default ReceiptDesktop;
