export interface ICharacteristicScheme {
  id?: number;
  key: string;
  value: string | number;
}

export interface ICharacteristic {
  data: ICharacteristicScheme;
}

export interface ICharacteristicsGroup {
  data: {
    id?: number;
    title: string;
    content: ICharacteristicScheme[];
  };
}

export interface ICategoryButton {
  data: {
    id?: number;
    text: string;
    url: string;
  };
}

export interface IAddCommentModal {
  open: boolean;
  onClose: () => void;
}

export interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
}