import styled from "@emotion/styled";
import { FC } from "react";
import { Flex } from "..";
import { IStatistic } from "./types";
import { Colors, font } from "@/helpers";

const Statistic: FC<IStatistic> = ({ text, icon, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Flex gap={5}>
        <Amound>{text}</Amound>
        {icon}
      </Flex>
    </Wrapper>
  );
};

export default Statistic;

const Wrapper = styled.div`
  cursor: pointer;
`;

const Amound = styled.h4`
  ${font("14px", "140%")}
  color: ${Colors.dark_grey};

  @media screen and (max-width: 330px) {
    font-size: 12px;
  }
`;
