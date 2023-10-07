import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { FC } from "react";
import { useCommentForm } from "../../hooks";
import { FormGroup, Flex, Form } from "@/components";
import { Colors } from "@/helpers";

const CommentForm: FC = () => {
  const { handleSubmit, onSubmit, register, validations, errors } =
    useCommentForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" align="flex-start" gap={30}>
        <StyledFlex justify="space-between" gap={10}>
          <FormGroup
            label="Имя"
            id="name"
            placeholder="Петров Петр"
            register={register("name", { ...validations.name })}
            error={errors.name?.message}
          />
          <FormGroup
            label="E- mail"
            id="email"
            placeholder="name@inbox.ru"
            register={register("email", { ...validations.email })}
            error={errors.email?.message}
          />
        </StyledFlex>
        <FormGroup
          label="Оставить отзыв"
          id="comment"
          placeholder="Отзыв"
          textarea
          register={register("comment", { ...validations.comment })}
          error={errors.comment?.message}
        />
        <StyledButton type="submit">Отправить</StyledButton>
      </Flex>
    </Form>
  );
};

export default CommentForm;

const StyledFlex = styled(Flex)`
  width: 100%;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: center;

    input {
      width: 100%;
    }
  }

  .form-group {
    width: 300px;

    @media screen and (max-width: 750px) {
      width: 100%;
    }
  }
`;

const StyledButton = styled(Button)`
  text-transform: unset;
  padding: 12px 56px;
  border-radius: 10px;
  background-color: ${Colors.bright_green} !important;
  color: ${Colors.white_color};
`;
