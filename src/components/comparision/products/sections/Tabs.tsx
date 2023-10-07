import styled from "@emotion/styled";
import Tab from "@mui/material/Tab";
import { TabPanel } from "../components/ui";
import { useContents } from "../hooks";
import { FC, SyntheticEvent, useState } from "react";
import { IProduct } from "@/components/cards/types";
import { sectionNavLinks } from "@/data";
import { Colors, Shadows, font } from "@/helpers";
import { Container } from "@mui/material";
import { SectionNavbar } from "../components";

const ContentTabs: FC<IProduct> = ({ data }) => {
  const [value, setValue] = useState<number>(0);
  const { contents } = useContents(data);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <SectionNavbar value={value} onChange={handleChange}>
        {sectionNavLinks.map(({ text }, index) => (
          <StyledTab label={text} key={index} />
        ))}
      </SectionNavbar>
      <ContentWrapper id="characteristics">
        {contents.map(({ Component, props }, index) => (
          <TabPanel value={value} index={index} key={index}>
            <Component {...props} />
          </TabPanel>
        ))}
      </ContentWrapper>
    </>
  );
};

export default ContentTabs;

const StyledTab = styled(Tab)`
  max-width: calc(100% / 5);
  width: 100%;
  flex-shrink: 0;
  text-transform: unset;
  width: 100%;
  padding-block: 12px;
  color: ${Colors.text_color};
  ${font("12px", "140%", "500")};

  &:not(:last-of-type) {
    border-right: 1px solid ${Colors.light_grey};
  }

  @media screen and (max-width: 870px) {
    max-width: calc(100% / 4);
  }
  @media screen and (max-width: 710px) {
    max-width: calc(100% / 3);
  }
  @media screen and (max-width: 530px) {
    max-width: calc(100% / 2);
  }
  @media screen and (max-width: 360px) {
    max-width: calc(100% / 1);
  }
`;

const ContentWrapper = styled(Container)`
  padding: 40px;
  border-radius: 10px;
  ${Shadows.shadow_white};

  @media screen and (max-width: 575px) {
    padding: 20px;
    box-shadow: unset;
    padding: 20px 0;
  }
`;
