import { toggleHoverMenu } from "@/redux/slices/layoutSlice";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useTypedDispatch } from "@/hooks/useTypedDispatch";

export const useHoverMenu = () => {
  const { hoverMenuIsOpen } = useTypedSelector((state) => state.layout);

  const dispatch = useTypedDispatch();

  const toggleMenu = () => {
    dispatch(toggleHoverMenu());
  };

  return { hoverMenuIsOpen, toggleMenu };
};
