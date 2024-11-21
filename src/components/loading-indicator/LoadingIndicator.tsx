import React from "react";
import { LoadingIndicatorProps } from "./LoadingIndicator.types";

import { LoadingIndicatorContainer, Spinner } from "./LoadingIndicator.styles";

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ message }) => {
  return (
    <LoadingIndicatorContainer>
      <Spinner role="status" />
      {message && <p style={{ marginLeft: "10px", fontSize: "16px" }}>{message}</p>}
    </LoadingIndicatorContainer>
  );
};
  
export default LoadingIndicator;