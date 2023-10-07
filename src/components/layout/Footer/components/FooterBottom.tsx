import { Logo } from "@/assets/icons";
import { Container } from "@/components/ui/Container";
import styled from "@emotion/styled";
import LocationsSelect from "../../Header/components/LocationsSelect";
import FacebookLogo from "@/assets/icons/FacebookLogo";
import { Colors } from "@/helpers/colors";
import FooterItem from "./FooterItem";
import InstagramLogo from "@/assets/icons/InstagramLogo";
import WkontaktIcon from "@/assets/icons/WkontaktIcon";

const FooterBottom = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <FooterTop>
            <FooterTopLogo>
              <Logo />
              <LocationSelect />
            </FooterTopLogo>
            <FooterTopSocial>
              <FooterTopSocialText>Присоединяйтесь к нам </FooterTopSocialText>
              <a href="">
                <FacebookLogo />
              </a>
              <a href="">
                <InstagramLogo />
              </a>
              <a href="">
                <WkontaktIcon />
              </a>
            </FooterTopSocial>
          </FooterTop>
          <FooterMiddle>
            <FooterItem />
          </FooterMiddle>
        </Row>
      </Container>
      <FooterCopy>
        <Container>
          <FooterRow>
            <FooterCopyText>
              <FooterCopyContent>Политика конфиденциальности</FooterCopyContent>
              <FooterCopyContent>Пользовательское соглашение</FooterCopyContent>
              <FooterCopyContent>Использование cookies</FooterCopyContent>
              <FooterCopyContent>Карта сайта</FooterCopyContent>
            </FooterCopyText>
            <FooterCopyYear>
              Dily.ru {new Date().getFullYear()} &copy;
            </FooterCopyYear>
          </FooterRow>
        </Container>
      </FooterCopy>
    </Wrapper>
  );
};

export default FooterBottom;

const Wrapper = styled.div`
  width: 100%;
  background: #efefef;
`;
const Row = styled.div`
  width: 100%;
`;
const FooterTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #dadcdc;
`;
const FooterMiddle = styled.div``;
const FooterCopy = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.white_color};
`;
const FooterTopLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const FooterTopSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 990px) {
    display: none;
  }
`;
const FooterTopSocialText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${Colors.dark_grey};
  margin-right: 10px;
`;
const LocationSelect = styled(LocationsSelect)`
  @media screen and (max-width: 990px) {
    display: none;
  }
`;
const FooterCopyText = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
`;
const FooterCopyContent = styled.a`
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  cursor: pointer;
`;
const FooterCopyYear = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #363a45;
`;
const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;