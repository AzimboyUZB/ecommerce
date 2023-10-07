export const name = {
  required: "это поле должно быть заполнено",
  minLength: {
    value: 3,
    message: "минимальная длина имени должна быть 3",
  },
  maxLength: {
    value: 30,
    message: "максимальная длина имени должна быть 30",
  },
};

export const email = {
  required: "это поле должно быть заполнено",
  minLength: {
    value: 8,
    message: "электронная почта не может быть короче 8 символов",
  },
};

export const comment = {
  required: "это поле должно быть заполнено",
};
