import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { FC } from "react";
import { CommentCard, List, Flex } from "@/components";
import { font, Colors } from "@/helpers";
import { useModal } from "@/hooks";
import { comments } from "@/data";
import { CommentIcon } from "@/assets/icons";
import { AddCommentModal } from "../components/ui";

const Reviews: FC = () => {
  const { isOpen, open, close } = useModal();

  return (
    <Wrapper>
      <Flex direction="column" align="flex-start" gap={20}>
        <Title>Отзывы на смартфон Iphon 11 </Title>
        <List array={comments} Component={CommentCard} />
      </Flex>
      <StyledButton onClick={() => open()}>
        <span>Оставить отзыв</span>
        <CommentIcon />
      </StyledButton>
      <AddCommentModal open={isOpen} onClose={close} />
    </Wrapper>
  );
};

export default Reviews;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 770px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`;

const Title = styled.h1`
  ${font("24px", "150%", "700")};
`;

const StyledButton = styled(Button)`
  position: sticky;
  top: 0;
  right: 0;
  text-transform: unset;
  height: fit-content;
  padding: 12px 56px;
  border-radius: 10px;
  background-color: ${Colors.bright_green} !important;
  color: ${Colors.white_color};
  margin-bottom: 45px;
  transform: translateY(100%);

  svg {
    display: none;
    width: 16px;
    height: 16px;

    path {
      fill: ${Colors.white_color};
    }
  }

  @media screen and (max-width: 1010px) {
    position: absolute;
    top: 0;
    right: 0;
    transform: unset;
    padding: 10px;

    span {
      display: none;
    }

    svg {
      display: inline-block;
    }
  }

  @media screen and (max-width: 770px) {
    position: relative;
    margin: 0;
    width: fit-content;
  }
`;
