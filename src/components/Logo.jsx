import React from "react";
import StyledText from "./StyledText";

function Logo() {
  return (
    <div className="flex flex-col">
      <StyledText className=" font-extrabold text-xl inline">RICO</StyledText>
      <p className="ml-auto text-xs tracking-widest -mt-2">Clothing</p>
    </div>
  );
}

export default Logo;
