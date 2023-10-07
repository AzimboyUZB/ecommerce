import styled from "@emotion/styled";
import React, { FC } from "react";
import { IntInput } from "./type";
import { Colors } from "@/helpers/colors";

const InputForm: FC<IntInput> = ({ placeholder }) => {
  return <Input placeholder={placeholder} />;
};

export default InputForm;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  border-radius: 10px;
  border: 1px solid ${Colors.medium_grey};
  color: ${Colors.dark_grey};
  background: ${Colors.white_color};
`;
