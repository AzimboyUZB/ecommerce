import React from "react";
import styled from "@emotion/styled";

export default function IconCategories() {
  return (
    <Wrapper>
      <Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            style={{ color: "#00C65E" }}
            clipRule="evenodd"
            d="m5.49718 3.00617 4.50169-.00507c.55343 0 1.00113.44771 1.00113 1v5.99887c0 .55233-.4477 1.00003-1 1.00003h-6c-.55228 0-1-.4477-1-1.00003v-4.4938c0-1.37961 1.11757-2.49844 2.49718-2.5zm-1.49831 10.00173c-.55184.0006-.99887.4481-.99887 1v4.4921c0 1.3807 1.11929 2.5 2.5 2.5h4.5c.5523 0 1-.4477 1-1v-5.9989c0-.5523-.4477-1-1.00113-1zm10.00003 0c-.5519.0006-.9989.4481-.9989 1v5.9921c0 .5523.4477 1 1 1h4.5c1.3807 0 2.5-1.1193 2.5-2.5v-4.4989c0-.5523-.4477-1-1.0011-1zm0-10.00004c-.5519.00063-.9989.44816-.9989 1v5.99211c0 .55233.4477 1.00003 1 1.00003h6c.5523 0 1-.4477 1-1.00003v-4.49718c0-1.38071-1.1193-2.5-2.5028-2.5zm-8.9989 15.49214c0 .2761.22386.5.5.5h3.5v-3.9978l-4 .0045zm13.5.5h-3.5v-3.9933l4-.0045v3.4978c0 .2761-.2239.5-.5.5zm-9.5-10.00003v-3.99774l-3.50056.00394c-.27593.00031-.49944.22408-.49944.5v3.4938zm10 0h-4v-3.99323l3.5-.00395c.2761 0 .5.22386.5.5z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </Icon>
      <H4>Все категории</H4>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 70px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: sans-serif;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaffd5;
  border-radius: 10px;
`;

const H4 = styled.h4`
  text-align: center;
  font-weight: normal;
  font-size: 12px;
`;
