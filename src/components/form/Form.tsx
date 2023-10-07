import styled from "@emotion/styled";
import { FC } from "react";
import { FormT } from "./types";

const Form: FC<FormT> = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;

const StyledForm = styled.form`
  position: relative;
  width: 100%;
`;
