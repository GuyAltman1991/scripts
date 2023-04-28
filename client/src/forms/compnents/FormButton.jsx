import React from "react";
import { string, bool, node, func } from "prop-types";
import { Button } from "@mui/material";

const FormButton = ({
  variant,
  component,
  size,
  color,
  onClick,
  disabled,
  node,
}) => {
  return (
    <Button
      variant={variant}
      component={component}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth
    >
      {node}
    </Button>
  );
};

FormButton.propTypes = {
  variant: string.isRequired,
  component: string.isRequired,
  size: string.isRequired,
  color: string.isRequired,
  onClick: func.isRequired,
  disabled: bool.isRequired,
  node: node.isRequired,
};

FormButton.defaulrProps = {
  variant: "contained",
  component: "button",
  size: "medium",
  color: "primary",
  disabled: false,
};

export default React.memo(FormButton);
