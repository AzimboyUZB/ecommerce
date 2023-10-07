import { FC } from "react";
import { IColorsList } from "./types";
import { FormControl, RadioGroup } from "@mui/material";
import { Flex, ColorPalette, List } from "..";

const ColorsList: FC<IColorsList> = ({ colors, defaultColor }) => {
  return (
    <FormControl>
      <RadioGroup>
        <Flex gap={10} className="colors">
          <List array={colors} Component={ColorPalette} />
        </Flex>
      </RadioGroup>
    </FormControl>
  );
};

export default ColorsList;
