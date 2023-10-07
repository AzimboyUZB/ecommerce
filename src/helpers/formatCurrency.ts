let DOLLAR = Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});

export const formatCurrency = (number: number): string => {
  return DOLLAR.format(number);
};
