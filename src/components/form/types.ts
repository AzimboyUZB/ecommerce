import { ComponentProps } from "react";

export type FormT = Omit<ComponentProps<"form">, 'onSubmit'> & {
  onSubmit: () => void 
};

export interface IInput {
  variant?:
    | "primary-grey"
    | "secondary-grey"
    | "primary-green"
    | "secondary-green"
    | "error";
    register: any
}

export interface IFormGroup {
  label: string;
  textarea?: boolean;
  register: any;
  error?: string;
}

export type InputT = Omit<ComponentProps<"input">, "variant">;

export type TextareaT = Omit<ComponentProps<"textarea">, "variant">;
