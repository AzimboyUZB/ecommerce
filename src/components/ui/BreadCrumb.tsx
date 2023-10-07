import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { IBreadCrumb } from "./types";

const BreadCrumb: FC<IBreadCrumb> = ({ text }) => {
  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Главная страница
      </Link>
      <Typography color="text.primary">{text}</Typography>
    </StyledBreadcrumbs>
  );
};

export default BreadCrumb;

const StyledBreadcrumbs = styled(Breadcrumbs)`
  margin-bottom: 15px;
`;
