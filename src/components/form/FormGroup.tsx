import styled from "@emotion/styled";
import { FC } from "react";
import { Input, Textarea } from "@/components";
import { Colors, font } from "@/helpers";
import { IInput, InputT, TextareaT, IFormGroup } from "./types";

const FormGroup: FC<IInput & IFormGroup & InputT & TextareaT> = ({
  variant,
  label,
  rows,
  id,
  textarea = false,
  register,
  error,
  ...rest
}) => {
  return (
    <Wrapper className={`form-group ${textarea ? "full" : ""}`}>
      <Label htmlFor={id} className={error ? "error" : ""}>
        {label}
      </Label>
      {textarea ? (
        <Textarea
          id={id}
          variant={error ? "error" : variant}
          rows={rows}
          register={register}
          {...rest}
        />
      ) : (
        <Input
          id={id}
          variant={error ? "error" : variant}
          register={register}
          {...rest}
        />
      )}
      <Error>{error}</Error>
    </Wrapper>
  );
};

export default FormGroup;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 5px;

  &.full {
    width: 100%;
  }
`;

const Label = styled.label`
  ${font("16px", "150%", "700")};
  color: ${Colors.dark_grey};
  cursor: pointer;

  &.error {
    color: ${Colors.red_color};
  }
`;

const Error = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
  margin-top: 7px;
  text-align: center;
  ${font("12px", "120%", "500")};
  color: ${Colors.red_color};
`;
