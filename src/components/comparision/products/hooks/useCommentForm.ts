import { useForm, SubmitHandler } from "react-hook-form";
import { name, email, comment } from "@/helpers/formValidations";
import { ICommentInputs } from "./types";

export const useCommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommentInputs>();

  const onSubmit: SubmitHandler<ICommentInputs> = (data) => {
    console.log(data);
  };

  return { handleSubmit, onSubmit, register, errors, validations: { name, email, comment }  };
};
