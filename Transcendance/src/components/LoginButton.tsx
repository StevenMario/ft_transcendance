import Button from "@mui/material/Button";

export default function LoginButton() {
  return (
    <Button
    //   onClick={onClick}
      disableElevation
      sx={{ color: "#fff" }}
      className="
        normal-case
        rounded-full
        px-10
        py-3
        text-lg
        font-medium
        bg-linear-to-r
        from-orange-400
        to-pink-500
      "
    >
      Login
    </Button>
  );
}