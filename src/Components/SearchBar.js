import styled from "styled-components";
import { Row } from "../Styles/Elements";
import { IoSearchOutline } from "react-icons/io5";

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  border-radius: 5px 5px 0 0;
  &::placeholder {
    color: #a8a8a8;
    font-weight: 300;
  }
  :focus {
    outline: none;
    border-bottom: 2px solid #aaaaaa;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

const Icon = styled(IoSearchOutline)`
  margin-right: -30px;
  width: 25px;
  height: 25px;
  z-index: 9;
`;

const SearchBar = ({ description, setDescription }) => {
  return (
    <Row
      maxWidth="1102px"
      justifyContent="center"
      alignItems="center"
      margin="30px auto 60px auto"
    >
      <Icon />
      <Input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        type="text"
        placeholder="Search for your sneaker"
      />
    </Row>
  );
};

export default SearchBar;
