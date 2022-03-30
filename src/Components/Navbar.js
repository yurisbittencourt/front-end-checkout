import styled from "styled-components";
import { Row, Text, breakpoint } from "../Styles/Elements";
import avatar from "../Images/avatar.png";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  background: #f1f1f1;
  height: 87px;
  width: 100%;
  padding: 0 30px;
  ${breakpoint.lg} {
    height: 70px;
  }
  ${breakpoint.sm} {
    padding: 0 10px;
    background: none;
  }
`;

const NavText = styled(Text)`
  ${breakpoint.md} {
    display: none;
  }
`;

const NavAvatar = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${avatar});
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const NavButton = styled.button`
  display: flex;
  visibility: ${(props) => (props.hidden ? "hidden" : "")};
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 35px;
  background-color: ${(props) => props.theme.color.navButton};
  border: none;
  border-radius: 17.4px;
  font-size: 21px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const BackArrow = styled(FiArrowLeft)`
  margin-right: 5px;
`;

const Navbar = ({ title }) => {
  const history = useHistory();
  const ifStore = title === "Sneakers" ? true : false;
  return (
    <Nav>
      <Row
        maxWidth="1300px"
        justifyContent="space-between"
        alignItems="center"
        ml="auto"
        mr="auto"
      >
        <NavButton hidden={ifStore} onClick={() => history.goBack()}>
          <BackArrow />
          Back
        </NavButton>
        <NavText Arial fontSize="26px">
          {title}
        </NavText>
        <NavAvatar />
      </Row>
    </Nav>
  );
};

export default Navbar;
