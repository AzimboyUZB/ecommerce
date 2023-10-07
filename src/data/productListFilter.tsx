export const phoneModels = [
  {
    id: 1,
    text: "Apple",
  },
  {
    id: 2,
    text: "Samsung",
  },
  {
    id: 3,
    text: "Huawei",
  },
  {
    id: 4,
    text: "Xiaomi",
  },
  {
    id: 5,
    text: "Honor",
  },
  {
    id: 6,
    text: "Vivo",
  },
];

const storage = [
  {
    id: 1,
    text: "32ГБ",
  },
  {
    id: 2,
    text: "64ГБ",
  },
  {
    id: 3,
    text: "128ГБ",
  },
  {
    id: 4,
    text: "256ГБ",
  },
  {
    id: 5,
    text: "512ГБ",
  },
  {
    id: 6,
    text: "1ТБ",
  },
]

export const productListFilter = [
  {
    id: 1,
    title: "Бренд",
    children: phoneModels
  },
  {
    id: 2,
    title: "Объем памяти",
    children: storage
  },
  {
    id: 3,
    title: "Другие параметры",
    children: storage
  },
]