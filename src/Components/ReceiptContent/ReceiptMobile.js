import {
  Wrapper,
  Row,
  Col,
  Text,
  Gap,
  Button,
  Img,
  Card,
  BankIcon,
  Hr,
} from "../../Styles/Elements";
import { ItemInfo, CostInfo } from "../ElementGroups";

const ReceiptMobile = ({ item }) => {
  return (
    <Wrapper>
      <Col alignItems="center">
        <Col maxWidth="600px">
          <Text fontSize="24px" mb="10px">
            Review and confirmation
          </Text>
          <Card>
            <Text fontSize="20px" fontWeight="700" mb="15px">
              Order summary
            </Text>
            <Row alignItems="center">
              <Col mr="20px">
                <Img src={item.maxresURL} alt="Sneakers" />
              </Col>
              <Col minWidth="50%">
                <ItemInfo
                  description={item.description}
                  color={item.color}
                  id={item.id}
                />
              </Col>
            </Row>
          </Card>
          <Gap height="30px" />
          <Card padding="30px">
            <Text fontSize="20px" fontWeight="700" mb="15px">
              Payment method
            </Text>
            <Row alignItems="center">
              <BankIcon />
              <Text fontSize="17px" ml="10px">
                Online banking
              </Text>
            </Row>

            <Hr margin="30px 0" />
            <CostInfo price={item.price} />
          </Card>
          <Button mt="25px" height="50px">
            Place order
          </Button>
        </Col>
      </Col>
    </Wrapper>
  );
};

export default ReceiptMobile;
