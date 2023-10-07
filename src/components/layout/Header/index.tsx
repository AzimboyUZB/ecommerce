import styled from "@emotion/styled";
import HeaderMain from "./components/HeaderMain";
import HeaderTop from "./components/HeaderTop";
import HoverMenu from "./components/HoverMenu";

function Header() {
  return (
    <HeaderStyle>
      <HeaderTop />
      <HeaderMain />
      <HoverMenu />
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.header`
  width: 100%;
  position: relative;
`;
