import Button from "@mui/material/Button";

export default function LoginButton() {
  return (
    <Button
      //   onClick={onClick}
      disableElevation
      sx={{
        color: "#fff" ,
        borderRadius: "32px",
        padding: "10px 24px",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "160%",
      }}
      className="
        normal-case
        text-lg
        font-medium
        bg-linear-to-r
        from-orange-400
        to-pink-500
      "
    >
      Se connecter
    </Button>
  );
}