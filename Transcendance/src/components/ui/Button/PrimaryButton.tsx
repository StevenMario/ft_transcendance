import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface PrimaryButtonProps {
  onClick?: () => void;
  name: string;
  classButton?: string;
  px?: string;
  fontSize?: string;
  path?: string;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <Button
      {...(props.onClick
        ? { onClick: props.onClick }
        : { component: Link, to: props.path || "#" })
      }
      disableElevation
      disableRipple
      sx={{
        color: "#fff",
        borderRadius: "32px",
        padding: `10px ${props.px || "24px"}`,
        fontSize: props.fontSize || "16px",
        fontWeight: 500,
        lineHeight: "160%",
        backgroundColor: "#E64A22",
        "&:hover": { backgroundColor: "#E64A22" }
      }}
      className={`normal-case text-lg font-medium` + ` ${props.classButton ? props.classButton : ""}`}
    >
      {props.name}
    </Button>
  );
}