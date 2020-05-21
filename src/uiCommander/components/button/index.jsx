import React, { forwardRef } from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ButtonCustom = forwardRef((props, ref) => {
  const {
    type,
    key,
    basic,
    color,
    fluid,
    primary,
    secondary,
    visible,
    disabled,
    size,
    children,
    onClick,
  } = props;

  return (
    <Button
      type={type || "button"}
      color={color}
      basic={basic}
      fluid={fluid}
      primary={primary}
      secondary={secondary}
      size={size}
      visible={visible}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </Button>
  );
});

export default ButtonCustom;
