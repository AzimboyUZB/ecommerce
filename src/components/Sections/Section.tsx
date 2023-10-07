import styled from "@emotion/styled";
import SectionTitle from "../ui/SectionTitle";
import { FC } from "react";
import { ISectionTitle } from "../ui/types";
import { ISection } from "./types";
import { Flex } from "../ui/Flex";

const Section: FC<ISection & ISectionTitle> = ({ children, title, link }) => {
  return (
    <StyledSection>
      <Flex direction="column" align="unset" gap={30}>
        {title || link ? <SectionTitle title={title} link={link} /> : null}
        {children}
      </Flex>
    </StyledSection>
  );
};

export default Section;

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;

  @media screen and (min-width: 730px) {
    margin-bottom: 50px;
  }
`;
