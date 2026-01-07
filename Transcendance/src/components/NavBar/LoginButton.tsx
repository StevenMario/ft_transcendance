import Button from "@mui/material/Button";

export default function LoginButton() {
  return (
    <Button
      //   onClick={onClick}
      disableElevation
      sx={{
         color: "#fff" ,
        borderRadius: "12px",
      }}
      className="
        normal-case
        w-25
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