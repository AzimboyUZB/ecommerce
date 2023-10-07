import styled from "@emotion/styled";
import FooterDesc from "./components/FooterDesc";
import FooterBottom from "./components/FooterBottom";

function Footer() {
  return (
    <FooterStyle>
      <FooterDesc />
      <FooterBottom />
    </FooterStyle>
  );
}

export default Footer;

const FooterStyle = styled.div`
  position: relative;
`;
