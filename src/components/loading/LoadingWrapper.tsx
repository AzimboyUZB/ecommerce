import { FC } from "react";
import { ILoadingWrapper } from "./types";
import { Loading } from "..";

const LoadingWrapper: FC<ILoadingWrapper> = ({ loading, children }) => {
  return <>{loading ? <Loading /> : children}</>;
};

export default LoadingWrapper;
