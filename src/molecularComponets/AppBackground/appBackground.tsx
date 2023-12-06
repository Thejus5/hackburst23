import React from "react";
import { Avatar, Background } from "./appBackground.styles";
import avatarImage from "../../assets/avatar.png";

function AppBackground({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Background>
      {/* <Avatar src={avatarImage} alt="Avatar Image"/> */}
      {children}
    </Background>
  );
}

export default AppBackground;
