import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  background: ${props => (props.active ? "blue" : "red")};
  height: 100px;
  width: 100%;
`;

export default Header;
