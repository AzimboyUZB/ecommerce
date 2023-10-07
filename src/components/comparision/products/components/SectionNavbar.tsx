import styled from "@emotion/styled";
import Tabs from "@mui/material/Tabs";
import { FC } from "react";
import { Colors, Shadows } from "@/helpers";
import { ISectionNavLinks } from "./types";

const SectionNavbar: FC<ISectionNavLinks> = ({ children, value, onChange }) => {
  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

export default SectionNavbar;

const Wrapper = styled(Tabs)`
  width: 100%;
  border-radius: 10px;
  background-color: ${Colors.white_color};
  ${Shadows.shadow_white};
  overflow: hidden;

  .MuiTabs-indicator {
    display: none;
  }

  .Mui-selected {
    background-color: ${Colors.bright_green};
    color: ${Colors.white_color} !important;
  }
`;
