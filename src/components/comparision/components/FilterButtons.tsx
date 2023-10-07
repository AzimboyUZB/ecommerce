import { Flex } from "@/components";
import { FC } from "react";
import { Button } from "./ui";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const FilterButtons: FC = () => {
  const router = useRouter();
  const { characteristics } = router.query;

  const changeRoute = (url: string) => {
    router.push({ query: { ...router.query, characteristics: url } });
  };

  return (
    <StyledFlex gap={40}>
      <Button
        text="Все характеристики"
        className={characteristics === "all" ? "active" : ""}
        onClick={() => changeRoute("all")}
      />
      <Button
        text="Только различия"
        className={characteristics === "only-differences" ? "active" : ""}
        onClick={() => changeRoute("only-differences")}
      />
    </StyledFlex>
  );
};

export default FilterButtons;

const StyledFlex = styled(Flex)`
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 500px) {
    gap: 10px;
  }
`;
