import { Container } from "@/components/ui/Container";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import InputForm from "../layout/Footer/components/Input";
import { Colors } from "@/helpers/colors";

const FooterSubscribe = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <TitleWrapper>
            <MainTitle>Будь первым!</MainTitle>
            <SecondaryTitle>
              Подпишитесь на последние обновления и узнавайте о новинках и
              специальных предложениях первыми
            </SecondaryTitle>
          </TitleWrapper>
          <SubscribeSection>
            <SubscribeInput>
              <InputForm placeholder='Ваш e-mail' />
              <InputBox>
                <InputCheckBox type="checkbox" name="checkbox" id="checkbox" />
                <InputText htmlFor="checkbox">Я согласен с условиями обработки персональных данных, а также с условиями подписки</InputText>
              </InputBox>
              <SubscribeBtn variant="contained">Подписаться</SubscribeBtn>
            </SubscribeInput>
          </SubscribeSection>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default FooterSubscribe;

const Wrapper = styled.div`
    width: 100%;
    height: 28vh;
    display: flex;
    align-items: center;
    background: #F7F7F7;
    @media screen and (max-width: 990px) {
      height: 280px;
    }
`
const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    @media screen and (max-width: 990px) {
      flex-direction: column;
      padding: 0;
    }
`
const TitleWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`
const SubscribeSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-right: 70px;
  @media screen and (max-width: 990px) {
    width: 100%;
    margin-right: 0;
  }
`
const SubscribeInput = styled.div`
  display: flex;
  flex-direction: column;
`
const MainTitle = styled.span`
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
  color: ${Colors.dark_grey};
  margin-bottom: 30px;
`;
const SecondaryTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 152%;
  height: 60px;
  width: 80%;
  color: ${Colors.dark_grey};
  @media screen and (max-width: 990px) {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
`
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 11px;

`
const InputCheckBox = styled.input`
  margin-right: 10px;
`

const InputText = styled.label`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: ${Colors.dark_grey};
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`
const SubscribeBtn = styled(Button)`
  border-radius: 10px;
  padding: 10px 56px;
  background: ${Colors.bright_green};
  color: ${Colors.white_color};
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
  margin-top: 10px;
  &:hover {
    background: ${Colors.bright_green};
  }
`;
