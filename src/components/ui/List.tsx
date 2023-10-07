import { FC } from "react";
import { IList, IMenuLink } from "./types";

const List: FC<IList & Pick<IMenuLink, "onHover">> = ({
  array,
  Component,
  ...rest
}) => {
  return (
    <>
      {array.map((item, index: number) => (
        <Component data={item} key={index} {...rest} />
      ))}
    </>
  );
};

export default List;
