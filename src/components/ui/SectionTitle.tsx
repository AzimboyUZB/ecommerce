import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";
import { Flex } from "./Flex";
import { ISectionTitle } from "./types";
import { Colors, font } from "@/helpers";

const SectionTitle: FC<ISectionTitle> = ({ title, link }) => {
  link && !link.text ? (link.text = "Смотреть все") : link?.text;

  return (
    <Flex justify="space-between">
      <Title>{title}</Title>
      {link ? <StyledLink href={link.url!}>{link.text}</StyledLink> : null}
    </Flex>
  );
};

export default SectionTitle;

const Title = styled.h1`
  ${font("24px", "120%", "700")};

  @media screen and (min-width: 510px) {
    font-size: 28px;
  }

  @media screen and (min-width: 730px) {
    font-size: 32px;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  ${font("14px", "120%", "500")};

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    width: 0;
    border-radius: 10px;
    background-color: ${Colors.dark_grey};
    transition: all 0.2s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
