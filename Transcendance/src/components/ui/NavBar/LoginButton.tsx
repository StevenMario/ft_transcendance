import Button from "@mui/material/Button";

export default function LoginButton() {
  return (
    <Button
      //   onClick={onClick}
      disableElevation
       disableRipple
      sx={{
        color: "#fff" ,
        borderRadius: "32px",
        padding: "10px 24px",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "160%",
        backgroundColor: "#E64A22",
        "&:hover": { backgroundColor: "#E64A22" }
      }}
      className="
        normal-case
        text-lg
        font-medium
      "
    >
      Se connecter
    </Button>
  );
}