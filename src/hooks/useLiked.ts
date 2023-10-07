import { useState } from "react";

export const useLiked = (initialState: boolean) => {
  const [isLiked, setIsLiked] = useState<boolean>(initialState);

  const toggleLiked = () => {
    setIsLiked(!isLiked);
  };

  return { isLiked, toggleLiked };
};
