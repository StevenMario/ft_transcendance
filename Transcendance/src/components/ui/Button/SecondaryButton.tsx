import { Button } from "@mui/material";
import type { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  name: string;
  classButton?: string;
  px?: string;
  fontSize?: string;
  endIcon?: ReactNode;
}

function SecondaryButton(props: ButtonProps) {
  return (
    <Button
      variant="outlined"
      startIcon={props.endIcon}
      sx={{
        color: "#333",
        borderRadius: "32px",
        padding: `8px ${props.px || "20px"}`,
        fontSize: props.fontSize || "16px",
        fontWeight: 500,
        lineHeight: "160%",
        border: "2px solid transparent",
        background:
          "    linear-gradient(#f5f5f5,#f5f5f5) padding-box, \
                   linear-gradient(90deg, #ff6a00, #ee0979) border-box",
      }}
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
}

export default SecondaryButton;
