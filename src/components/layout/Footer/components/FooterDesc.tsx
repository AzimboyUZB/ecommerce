import { Colors } from "@/helpers/colors";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React from "react";

const FooterDesc = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <DescriptionTitle>
            Вы хотите продать или купить что-либо быстро и выгодно?
          </DescriptionTitle>
          <DescriptionContent>
            К вашим услугам доска бесплатных объявлений Dily.ru. На нашем
            портале вы найдёте всё, начиная от мелких бытовых приборов и
            заканчивая недвижимостью и автомобилями. А если вы продаёте товар,
            услугу, сдаёте или снимаете жилье, мы поможем решить вашу задачу
            быстро и эффективно, для этого просто добавьте объявление бесплатно!
            Широким предложением товаров и услуг. Одежда и обувь, электроника и
            бытовая техника, недвижимость, автомобили, работа, предметы
            коллекционирования – здесь вы найдёте объявления на любой вкус!
            Огромной аудиторией. Тысячи ваших потенциальных клиентов посещают
            наш сайт ежедневно. Не упускайте их, подайте объявление прямо
            сейчас! Удобством пользования. Продуманная структура разделов и
            поиск объявлений помогут вам быстро найти нужные предложения. А
            разместить объявление вы сможете всего в несколько кликов.
          </DescriptionContent>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default FooterDesc;

const Wrapper = styled.div`
  width: 100%;
  margin: 50px 0;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescriptionTitle = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  color: ${Colors.text_color};
  margin-bottom: 15px;
`;
const DescriptionContent = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
  color: ${Colors.text_color};
`;
