import React, { FC } from "react";

interface ButtonProps {
  children: any;
  style?: any;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
