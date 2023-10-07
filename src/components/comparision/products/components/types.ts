import { IProductScheme } from "@/components/cards/types";
import { ReactNode, SyntheticEvent } from "react";

export interface IMainCharacteristics {
  data: Pick<
    IProductScheme,
    "id" | "memories" | "colors" | "characteristics" | "defaultColor"
  >;
}

export interface IAllCharacteristics {
  id: number;
}

export interface ISectionNavLinks {
  children: ReactNode;
  value: number;
  onChange: (_: SyntheticEvent, newValue: number) => void;
}
