import React from "react";
import { Background } from "./appBackground.styles";

function AppBackground({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Background>{children}</Background>;
}

export default AppBackground;
