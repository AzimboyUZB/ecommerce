export interface IButton {
  text?: string;
  children?: string;
}

export interface ICharacteristicScheme {
  id?: number;
  key: string;
  value: string | number;
}

export interface ICharacteristic {
  firstData: ICharacteristicScheme;
  secondData: ICharacteristicScheme;
}

export interface ICharacteristicsGroupScheme {
  id?: number;
  title: string;
  content: ICharacteristicScheme[];
}

export interface ICharacteristicsGroup {
  firstData: ICharacteristicsGroupScheme;
  secondData: ICharacteristicsGroupScheme;
}
