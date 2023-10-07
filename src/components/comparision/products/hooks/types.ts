import { FC } from "react";

export interface IContents {
    Component: FC<any>;
    props: {
      id?: number;
      data?: any;
    };
}

export interface ICommentInputs {
  name: string;
  email: string;
  comment: string;
}
