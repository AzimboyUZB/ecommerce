import styled from "@emotion/styled";
import { FC } from "react";
import { ITabPanel } from "./types";

const TabPanel: FC<ITabPanel> = ({ children, value, index }) => {
  return (
    <Wrapper hidden={value !== index}>
      {value === index && <>{children}</>}
    </Wrapper>
  );
};

export default TabPanel;

const Wrapper = styled.div`
  width: 100%;
`;
