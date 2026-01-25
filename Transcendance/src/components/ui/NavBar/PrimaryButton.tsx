import Button from "@mui/material/Button";

interface PrimaryButtonProps {
  // onClick?: () => void;
  name: string;
  classButton?: string;
  px?: string;
  fontSize?: string; 
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <Button
      //   onClick={onClick}
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