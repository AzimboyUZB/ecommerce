import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { FC } from "react";
import { Flex } from "@/components";
import { StarIcon, CloseIcon } from "@/assets/icons";
import { Colors, Shadows, font } from "@/helpers";
import { IAddCommentModal } from "./types";
import { useRating } from "@/hooks";
import { CommentForm } from "../form";

const AddCommentModal: FC<IAddCommentModal> = ({ open, onClose }) => {
  const { value, update } = useRating();

  return (
    <Modal open={open} onClose={onClose}>
      <Wrapper>
        <CloseIcon className="close-icon" onClick={onClose} />
        <Flex direction="column" gap={25}>
          <Title>Оставить отзыв</Title>
          <StyledRating
            icon={<StyledStarIcon />}
            emptyIcon={<StyledStarIcon className="disabled" />}
            value={value}
            onChange={update}
          />
          <CommentForm />
        </Flex>
      </Wrapper>
    </Modal>
  );
};

export default AddCommentModal;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 750px;
  width: 100%;
  height: 510px;
  padding: 60px;
  padding-top: 40px;
  border-radius: 10px;
  background-color: ${Colors.white_color};
  ${Shadows.shadow_white};

  svg.close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
    height: 100vh;
    border-radius: 0;

    svg.close-icon {
      display: inline-block;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 20px;
  }
`;

const StyledFlex = styled(Flex)`
  width: 100%;
`;

const Title = styled.h1`
  ${font("32px", "120%", "700")};
  ${Colors.text_color}
`;

const StyledButton = styled(Button)``;

const StyledStarIcon = styled(StarIcon)`
  width: 22px;
  height: 22px;

  path {
    fill: ${Colors.bright_green};
  }

  &.disabled {
    path {
      fill: ${Colors.medium_grey_2};
    }
  }
`;

const StyledRating = styled(Rating)`
  & .muirating-iconfilled {
    color: ${Colors.bright_green};
  }
  & .muirating-iconhover {
    color: ${Colors.bright_green};
  }
`;
