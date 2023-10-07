import { useState } from "react";

export const useRating = () => {
  const [value, setValue] = useState<number | null>(2);

  const update = (_: any, newEvent: number | null) => setValue(newEvent);

  return { value, update };
};
